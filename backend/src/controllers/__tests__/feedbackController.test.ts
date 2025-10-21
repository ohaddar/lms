import { Request, Response } from 'express'
import { PrismaClient } from '../../generated/prisma'
import {
  submitModuleFeedback,
  getModuleFeedback,
  getMyModuleFeedback,
} from '../feedbackController'

jest.mock('../../generated/prisma', () => ({
  PrismaClient: jest.fn(),
}))

describe('FeedbackController', () => {
  let mockPrisma: any
  let mockRequest: Partial<Request>
  let mockResponse: Partial<Response>
  let jsonMock: jest.Mock
  let statusMock: jest.Mock

  beforeEach(() => {
    mockPrisma = {
      module: {
        findUnique: jest.fn(),
      },
      moduleFeedback: {
        findUnique: jest.fn(),
        create: jest.fn(),
        findMany: jest.fn(),
      },
    }
    ;(PrismaClient as jest.Mock).mockImplementation(() => mockPrisma)

    jsonMock = jest.fn()
    statusMock = jest.fn().mockReturnThis()

    mockRequest = {
      user: { userId: 'user-123', email: 'test@example.com' },
      params: { moduleId: 'module-123' },
      body: {},
    }

    mockResponse = {
      json: jsonMock,
      status: statusMock,
    }
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('submitModuleFeedback', () => {
    it('should submit feedback successfully', async () => {
      const mockModule = { id: 'module-123', title: 'Module 1' }
      const mockFeedback = {
        id: 'feedback-123',
        userId: 'user-123',
        moduleId: 'module-123',
        helpful: true,
      }

      mockRequest.body = { helpful: true }
      mockPrisma.module.findUnique.mockResolvedValue(mockModule as any)
      mockPrisma.moduleFeedback.findUnique.mockResolvedValue(null)
      mockPrisma.moduleFeedback.create.mockResolvedValue(mockFeedback as any)

      await submitModuleFeedback(
        mockRequest as Request,
        mockResponse as Response
      )

      expect(statusMock).toHaveBeenCalledWith(201)
      expect(jsonMock).toHaveBeenCalledWith({
        success: true,
        data: mockFeedback,
      })
    })

    it('should return 401 when user is not authenticated', async () => {
      mockRequest.user = undefined

      await submitModuleFeedback(
        mockRequest as Request,
        mockResponse as Response
      )

      expect(statusMock).toHaveBeenCalledWith(401)
      expect(jsonMock).toHaveBeenCalledWith({
        success: false,
        message: 'Not authenticated',
      })
    })

    it('should return 400 when helpful is not a boolean', async () => {
      mockRequest.body = { helpful: 'yes' }

      await submitModuleFeedback(
        mockRequest as Request,
        mockResponse as Response
      )

      expect(statusMock).toHaveBeenCalledWith(400)
      expect(jsonMock).toHaveBeenCalledWith({
        success: false,
        message: 'Invalid feedback. "helpful" must be a boolean value.',
      })
    })

    it('should return 404 when module not found', async () => {
      mockRequest.body = { helpful: true }
      mockPrisma.module.findUnique.mockResolvedValue(null)

      await submitModuleFeedback(
        mockRequest as Request,
        mockResponse as Response
      )

      expect(statusMock).toHaveBeenCalledWith(404)
      expect(jsonMock).toHaveBeenCalledWith({
        success: false,
        message: 'Module not found',
      })
    })

    it('should return 409 when feedback already exists', async () => {
      const mockModule = { id: 'module-123', title: 'Module 1' }
      const existingFeedback = {
        id: 'feedback-123',
        userId: 'user-123',
        moduleId: 'module-123',
        helpful: true,
      }

      mockRequest.body = { helpful: false }
      mockPrisma.module.findUnique.mockResolvedValue(mockModule as any)
      mockPrisma.moduleFeedback.findUnique.mockResolvedValue(
        existingFeedback as any
      )

      await submitModuleFeedback(
        mockRequest as Request,
        mockResponse as Response
      )

      expect(statusMock).toHaveBeenCalledWith(409)
      expect(jsonMock).toHaveBeenCalledWith({
        success: false,
        message: 'Feedback already submitted for this module',
      })
    })
  })

  describe('getModuleFeedback', () => {
    it('should get feedback statistics for a module', async () => {
      const mockModule = { id: 'module-123', title: 'Module 1' }
      const mockFeedbackList = [
        {
          id: 'feedback-1',
          userId: 'user-1',
          moduleId: 'module-123',
          helpful: true,
          user: {
            id: 'user-1',
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@example.com',
          },
        },
        {
          id: 'feedback-2',
          userId: 'user-2',
          moduleId: 'module-123',
          helpful: true,
          user: {
            id: 'user-2',
            firstName: 'Jane',
            lastName: 'Smith',
            email: 'jane@example.com',
          },
        },
        {
          id: 'feedback-3',
          userId: 'user-3',
          moduleId: 'module-123',
          helpful: false,
          user: {
            id: 'user-3',
            firstName: 'Bob',
            lastName: 'Johnson',
            email: 'bob@example.com',
          },
        },
      ]

      mockPrisma.module.findUnique.mockResolvedValue(mockModule as any)
      mockPrisma.moduleFeedback.findMany.mockResolvedValue(
        mockFeedbackList as any
      )

      await getModuleFeedback(mockRequest as Request, mockResponse as Response)

      expect(jsonMock).toHaveBeenCalledWith({
        success: true,
        data: {
          module: {
            id: 'module-123',
            title: 'Module 1',
          },
          statistics: {
            total: 3,
            helpful: 2,
            notHelpful: 1,
            helpfulPercentage: 66.67,
          },
          feedback: mockFeedbackList,
        },
      })
    })

    it('should return 404 when module not found', async () => {
      mockPrisma.module.findUnique.mockResolvedValue(null)

      await getModuleFeedback(mockRequest as Request, mockResponse as Response)

      expect(statusMock).toHaveBeenCalledWith(404)
      expect(jsonMock).toHaveBeenCalledWith({
        success: false,
        message: 'Module not found',
      })
    })
  })

  describe('getMyModuleFeedback', () => {
    it('should get user feedback for a module', async () => {
      const mockFeedback = {
        id: 'feedback-123',
        userId: 'user-123',
        moduleId: 'module-123',
        helpful: true,
      }

      mockPrisma.moduleFeedback.findUnique.mockResolvedValue(
        mockFeedback as any
      )

      await getMyModuleFeedback(
        mockRequest as Request,
        mockResponse as Response
      )

      expect(jsonMock).toHaveBeenCalledWith({
        success: true,
        data: mockFeedback,
      })
    })

    it('should return null when no feedback exists', async () => {
      mockPrisma.moduleFeedback.findUnique.mockResolvedValue(null)

      await getMyModuleFeedback(
        mockRequest as Request,
        mockResponse as Response
      )

      expect(jsonMock).toHaveBeenCalledWith({
        success: true,
        data: null,
      })
    })

    it('should return 401 when user is not authenticated', async () => {
      mockRequest.user = undefined

      await getMyModuleFeedback(
        mockRequest as Request,
        mockResponse as Response
      )

      expect(statusMock).toHaveBeenCalledWith(401)
      expect(jsonMock).toHaveBeenCalledWith({
        success: false,
        message: 'Not authenticated',
      })
    })
  })
})
