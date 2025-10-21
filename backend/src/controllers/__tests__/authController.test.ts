import { describe, it, expect, jest, beforeEach } from '@jest/globals'
import { Request, Response } from 'express'
import { login, logout, getCurrentUser } from '../authController'
import * as passwordUtils from '../../utils/password'
import * as jwtUtils from '../../utils/jwt'

// Mock shared prisma from config (late binding)
type MockPrisma = {
  user: {
    // Explicitly type as Promise-returning to satisfy mockResolvedValue typings
    findUnique: jest.Mock<(...args: any[]) => Promise<any>>
  }
}
let mockPrisma: MockPrisma
jest.mock('@/config', () => ({
  get prisma() {
    return mockPrisma
  },
}))

jest.mock('../../utils/password')
jest.mock('../../utils/jwt')

// mockPrisma defined above

describe('Auth Controller', () => {
  let mockRequest: Partial<Request> & { user?: any }
  let mockResponse: Partial<Response>
  let mockJson: jest.Mock
  let mockStatus: jest.Mock
  let mockCookie: jest.Mock
  let mockClearCookie: jest.Mock

  beforeEach(() => {
    mockPrisma = {
      user: {
        findUnique: jest.fn(),
      },
    }
    mockJson = jest.fn()
    mockStatus = jest.fn().mockReturnThis()
    mockCookie = jest.fn().mockReturnThis()
    mockClearCookie = jest.fn().mockReturnThis()

    mockRequest = {
      body: {},
      user: undefined,
    }

    mockResponse = {
      json: mockJson as unknown as Response['json'],
      status: mockStatus as unknown as Response['status'],
      cookie: mockCookie as unknown as Response['cookie'],
      clearCookie: mockClearCookie as unknown as Response['clearCookie'],
    }

    jest.clearAllMocks()
  })

  describe('login', () => {
    const validUser = {
      id: '123',
      email: 'test@example.com',
      password: 'hashedPassword',
      firstName: 'Test',
      lastName: 'User',
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    it('should login user with valid credentials', async () => {
      mockRequest.body = {
        email: 'test@example.com',
        password: 'password123',
      }
      mockPrisma.user.findUnique.mockResolvedValue(validUser)
      jest
        .mocked(passwordUtils)
        .comparePassword.mockResolvedValue(true as never)
      jest.mocked(jwtUtils).generateToken.mockReturnValue('mock-token' as never)

      await login(mockRequest as Request, mockResponse as Response)

      expect(mockCookie).toHaveBeenCalledWith(
        'token',
        'mock-token',
        expect.objectContaining({
          httpOnly: true,
          sameSite: 'strict',
        })
      )
      expect(mockJson).toHaveBeenCalledWith({
        user: {
          id: validUser.id,
          email: validUser.email,
          firstName: validUser.firstName,
          lastName: validUser.lastName,
        },
      })
    })

    it('should return error for missing email', async () => {
      mockRequest.body = { password: 'password123' }

      await login(mockRequest as Request, mockResponse as Response)

      expect(mockStatus).toHaveBeenCalledWith(400)
      expect(mockJson).toHaveBeenCalledWith({
        error: 'Email and password are required',
      })
    })

    it('should return error for missing password', async () => {
      mockRequest.body = { email: 'test@example.com' }

      await login(mockRequest as Request, mockResponse as Response)

      expect(mockStatus).toHaveBeenCalledWith(400)
      expect(mockJson).toHaveBeenCalledWith({
        error: 'Email and password are required',
      })
    })

    it('should return error for invalid email format', async () => {
      mockRequest.body = {
        email: 'invalid-email',
        password: 'password123',
      }

      await login(mockRequest as Request, mockResponse as Response)

      expect(mockStatus).toHaveBeenCalledWith(400)
      expect(mockJson).toHaveBeenCalledWith({
        error: 'Invalid email format',
      })
    })

    it('should return error for password less than 5 characters', async () => {
      mockRequest.body = {
        email: 'test@example.com',
        password: '1234',
      }

      await login(mockRequest as Request, mockResponse as Response)

      expect(mockStatus).toHaveBeenCalledWith(400)
      expect(mockJson).toHaveBeenCalledWith({
        error: 'Password must be at least 5 characters',
      })
    })

    it('should return error for non-existent user', async () => {
      mockRequest.body = {
        email: 'nonexistent@example.com',
        password: 'password123',
      }
      mockPrisma.user.findUnique.mockResolvedValue(null)

      await login(mockRequest as Request, mockResponse as Response)

      expect(mockStatus).toHaveBeenCalledWith(401)
      expect(mockJson).toHaveBeenCalledWith({
        error: 'Invalid credentials',
      })
    })

    it('should return error for inactive user', async () => {
      mockRequest.body = {
        email: 'test@example.com',
        password: 'password123',
      }
      mockPrisma.user.findUnique.mockResolvedValue({
        ...validUser,
        isActive: false,
      })

      await login(mockRequest as Request, mockResponse as Response)

      expect(mockStatus).toHaveBeenCalledWith(401)
      expect(mockJson).toHaveBeenCalledWith({
        error: 'Account is disabled',
      })
    })

    it('should return error for invalid password', async () => {
      mockRequest.body = {
        email: 'test@example.com',
        password: 'wrongpassword',
      }
      mockPrisma.user.findUnique.mockResolvedValue(validUser)
      jest
        .mocked(passwordUtils)
        .comparePassword.mockResolvedValue(false as never)

      await login(mockRequest as Request, mockResponse as Response)

      expect(mockStatus).toHaveBeenCalledWith(401)
      expect(mockJson).toHaveBeenCalledWith({
        error: 'Invalid credentials',
      })
    })
  })

  describe('logout', () => {
    it('should clear cookie and return success message', async () => {
      await logout(mockRequest as Request, mockResponse as Response)

      expect(mockClearCookie).toHaveBeenCalledWith('token')
      expect(mockJson).toHaveBeenCalledWith({
        message: 'Logged out successfully',
      })
    })
  })

  describe('getCurrentUser', () => {
    it('should return user data for authenticated user', async () => {
      const mockUser = {
        id: '123',
        email: 'test@example.com',
        firstName: 'Test',
        lastName: 'User',
        isActive: true,
      }

      mockRequest.user = {
        userId: '123',
        email: 'test@example.com',
      }
      mockPrisma.user.findUnique.mockResolvedValue(mockUser)

      await getCurrentUser(mockRequest as Request, mockResponse as Response)

      expect(mockJson).toHaveBeenCalledWith({ user: mockUser })
    })

    it('should return error when user is not authenticated', async () => {
      mockRequest.user = undefined

      await getCurrentUser(mockRequest as Request, mockResponse as Response)

      expect(mockStatus).toHaveBeenCalledWith(401)
      expect(mockJson).toHaveBeenCalledWith({
        error: 'Not authenticated',
      })
    })

    it('should return error when user is not found', async () => {
      mockRequest.user = {
        userId: '123',
        email: 'test@example.com',
      }
      mockPrisma.user.findUnique.mockResolvedValue(null)

      await getCurrentUser(mockRequest as Request, mockResponse as Response)

      expect(mockStatus).toHaveBeenCalledWith(401)
      expect(mockJson).toHaveBeenCalledWith({
        error: 'User not found or inactive',
      })
    })
  })
})
