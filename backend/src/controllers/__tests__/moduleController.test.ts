import { describe, it, expect, beforeEach, jest } from '@jest/globals'
import type { Request, Response } from 'express'

// Mock Prisma Client
const mockPrismaModule = {
  findMany: jest.fn() as any,
  findUnique: jest.fn() as any,
  create: jest.fn() as any,
  update: jest.fn() as any,
}

const mockPrismaUser = {
  findUnique: jest.fn() as any,
}

const mockPrismaUserModuleProgress = {
  upsert: jest.fn() as any,
  create: jest.fn() as any,
}

jest.mock('../../generated/prisma', () => {
  return {
    PrismaClient: jest.fn(() => ({
      module: mockPrismaModule,
      user: mockPrismaUser,
      userModuleProgress: mockPrismaUserModuleProgress,
    })),
    ModuleStatus: {
      NOT_STARTED: 'NOT_STARTED',
      IN_PROGRESS: 'IN_PROGRESS',
      COMPLETED: 'COMPLETED',
    },
  }
})

// Import after mock - using require to avoid top-level await
import * as moduleController from '../moduleController'

const {
  getAllModules,
  getModuleById,
  getUserModules,
  updateModuleProgress,
  getMyModules,
  updateMyModuleProgress,
} = moduleController

describe('Module Controller', () => {
  let mockRequest: Partial<Request>
  let mockResponse: Partial<Response>
  let jsonMock: any
  let statusMock: any

  beforeEach(() => {
    jsonMock = jest.fn()
    statusMock = jest.fn(() => ({ json: jsonMock }))

    mockRequest = {}
    mockResponse = {
      json: jsonMock,
      status: statusMock,
    } as any

    // Clear all mocks
    jest.clearAllMocks()
  })

  describe('getAllModules', () => {
    it('should return all modules successfully', async () => {
      const mockModules = [
        {
          id: '1',
          title: 'Module 1',
          videoUrl: 'https://youtube.com/watch?v=test1',
          order: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '2',
          title: 'Module 2',
          videoUrl: 'https://youtube.com/watch?v=test2',
          order: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]

      mockPrismaModule.findMany.mockResolvedValue(mockModules)

      await getAllModules(mockRequest as Request, mockResponse as Response)

      expect(mockPrismaModule.findMany).toHaveBeenCalledWith({
        orderBy: { order: 'asc' },
      })
      expect(jsonMock).toHaveBeenCalledWith({
        success: true,
        data: mockModules,
      })
    })

    it('should handle errors', async () => {
      mockPrismaModule.findMany.mockRejectedValue(new Error('Database error'))

      await getAllModules(mockRequest as Request, mockResponse as Response)

      expect(statusMock).toHaveBeenCalledWith(500)
      expect(jsonMock).toHaveBeenCalledWith({
        success: false,
        message: 'Failed to fetch modules',
      })
    })
  })

  describe('getModuleById', () => {
    it('should return a module by ID', async () => {
      const mockModule = {
        id: '1',
        title: 'Module 1',
        videoUrl: 'https://youtube.com/watch?v=test1',
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }

      mockRequest.params = { id: '1' }
      mockPrismaModule.findUnique.mockResolvedValue(mockModule)

      await getModuleById(mockRequest as Request, mockResponse as Response)

      expect(mockPrismaModule.findUnique).toHaveBeenCalledWith({
        where: { id: '1' },
      })
      expect(jsonMock).toHaveBeenCalledWith({
        success: true,
        data: mockModule,
      })
    })

    it('should return 404 if module not found', async () => {
      mockRequest.params = { id: 'non-existent' }
      mockPrismaModule.findUnique.mockResolvedValue(null)

      await getModuleById(mockRequest as Request, mockResponse as Response)

      expect(statusMock).toHaveBeenCalledWith(404)
      expect(jsonMock).toHaveBeenCalledWith({
        success: false,
        message: 'Module not found',
      })
    })
  })

  describe('getUserModules', () => {
    it('should return user modules with progress', async () => {
      const mockUser = { id: 'user1', email: 'test@test.com' }
      const mockModules = [
        {
          id: '1',
          title: 'Module 1',
          videoUrl: 'https://youtube.com/watch?v=test1',
          order: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          userProgress: [
            {
              id: 'progress1',
              userId: 'user1',
              moduleId: '1',
              status: 'IN_PROGRESS',
              startedAt: new Date(),
              completedAt: null,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ],
        },
      ]

      mockRequest.params = { userId: 'user1' }
      mockPrismaUser.findUnique.mockResolvedValue(mockUser)
      mockPrismaModule.findMany.mockResolvedValue(mockModules)

      await getUserModules(mockRequest as Request, mockResponse as Response)

      expect(mockPrismaUser.findUnique).toHaveBeenCalledWith({
        where: { id: 'user1' },
      })
      expect(jsonMock).toHaveBeenCalledWith({
        success: true,
        data: expect.arrayContaining([
          expect.objectContaining({
            id: '1',
            title: 'Module 1',
            progress: mockModules[0].userProgress[0],
          }),
        ]),
      })
    })

    it('should return 404 if user not found', async () => {
      mockRequest.params = { userId: 'non-existent' }
      mockPrismaUser.findUnique.mockResolvedValue(null)

      await getUserModules(mockRequest as Request, mockResponse as Response)

      expect(statusMock).toHaveBeenCalledWith(404)
      expect(jsonMock).toHaveBeenCalledWith({
        success: false,
        message: 'User not found',
      })
    })
  })

  describe('updateModuleProgress', () => {
    it('should update module progress successfully', async () => {
      const mockUser = { id: 'user1', email: 'test@test.com' }
      const mockModule = { id: 'module1', title: 'Module 1' }
      const mockProgress = {
        id: 'progress1',
        userId: 'user1',
        moduleId: 'module1',
        status: 'COMPLETED',
        completedAt: new Date(),
      }

      mockRequest.params = { userId: 'user1', moduleId: 'module1' }
      mockRequest.body = { status: 'COMPLETED' }
      mockPrismaUser.findUnique.mockResolvedValue(mockUser)
      mockPrismaModule.findUnique.mockResolvedValue(mockModule)
      mockPrismaUserModuleProgress.upsert.mockResolvedValue(mockProgress)

      await updateModuleProgress(
        mockRequest as Request,
        mockResponse as Response
      )

      expect(jsonMock).toHaveBeenCalledWith({
        success: true,
        data: mockProgress,
      })
    })

    it('should return 400 for invalid status', async () => {
      mockRequest.params = { userId: 'user1', moduleId: 'module1' }
      mockRequest.body = { status: 'INVALID_STATUS' }

      await updateModuleProgress(
        mockRequest as Request,
        mockResponse as Response
      )

      expect(statusMock).toHaveBeenCalledWith(400)
      expect(jsonMock).toHaveBeenCalledWith({
        success: false,
        message:
          'Invalid status. Must be one of: NOT_STARTED, IN_PROGRESS, COMPLETED',
      })
    })
  })

  describe('getMyModules', () => {
    it('should return 401 if not authenticated', async () => {
      mockRequest.user = undefined

      await getMyModules(mockRequest as Request, mockResponse as Response)

      expect(statusMock).toHaveBeenCalledWith(401)
      expect(jsonMock).toHaveBeenCalledWith({
        success: false,
        message: 'Not authenticated',
      })
    })
  })

  describe('updateMyModuleProgress', () => {
    it('should update current user module progress', async () => {
      const mockModule = { id: 'module1', title: 'Module 1' }
      const mockProgress = {
        id: 'progress1',
        userId: 'user1',
        moduleId: 'module1',
        status: 'IN_PROGRESS',
        startedAt: new Date(),
      }

      mockRequest.user = { userId: 'user1', email: 'test@test.com' }
      mockRequest.params = { moduleId: 'module1' }
      mockRequest.body = { status: 'IN_PROGRESS' }
      mockPrismaModule.findUnique.mockResolvedValue(mockModule)
      mockPrismaUserModuleProgress.upsert.mockResolvedValue(mockProgress)

      await updateMyModuleProgress(
        mockRequest as Request,
        mockResponse as Response
      )

      expect(jsonMock).toHaveBeenCalledWith({
        success: true,
        data: mockProgress,
      })
    })

    it('should return 401 if not authenticated', async () => {
      mockRequest.user = undefined
      mockRequest.params = { moduleId: 'module1' }
      mockRequest.body = { status: 'IN_PROGRESS' }

      await updateMyModuleProgress(
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
