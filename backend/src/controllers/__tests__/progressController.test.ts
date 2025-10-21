import { Request, Response } from 'express'
import { getMyProgress, getUserProgress } from '../progressController'
import * as progressService from '../../services/progressService'

jest.mock('../../services/progressService')

describe('ProgressController', () => {
  let mockRequest: Partial<Request>
  let mockResponse: Partial<Response>
  let jsonMock: jest.Mock
  let statusMock: jest.Mock

  beforeEach(() => {
    jsonMock = jest.fn()
    statusMock = jest.fn().mockReturnThis()

    mockRequest = {
      user: { userId: 'user-123', email: 'test@example.com' },
      params: {},
    }

    mockResponse = {
      json: jsonMock,
      status: statusMock,
    }
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('getMyProgress', () => {
    it('should return progress for authenticated user', async () => {
      const mockProgress = {
        totalModules: 3,
        completedModules: 2,
        percentage: 66.67,
      }

      ;(progressService.calculateUserProgress as jest.Mock).mockResolvedValue(
        mockProgress
      )

      await getMyProgress(mockRequest as Request, mockResponse as Response)

      expect(progressService.calculateUserProgress).toHaveBeenCalledWith(
        'user-123'
      )
      expect(jsonMock).toHaveBeenCalledWith({
        success: true,
        data: mockProgress,
      })
    })

    it('should return 401 when user is not authenticated', async () => {
      mockRequest.user = undefined

      await getMyProgress(mockRequest as Request, mockResponse as Response)

      expect(statusMock).toHaveBeenCalledWith(401)
      expect(jsonMock).toHaveBeenCalledWith({
        success: false,
        message: 'Not authenticated',
      })
      expect(progressService.calculateUserProgress).not.toHaveBeenCalled()
    })

    it('should handle errors', async () => {
      ;(progressService.calculateUserProgress as jest.Mock).mockRejectedValue(
        new Error('Database error')
      )

      await getMyProgress(mockRequest as Request, mockResponse as Response)

      expect(statusMock).toHaveBeenCalledWith(500)
      expect(jsonMock).toHaveBeenCalledWith({
        success: false,
        message: 'Failed to fetch progress',
      })
    })
  })

  describe('getUserProgress', () => {
    it('should return progress for specified user', async () => {
      const mockProgress = {
        totalModules: 3,
        completedModules: 1,
        percentage: 33.33,
      }

      mockRequest.params = { userId: 'user-456' }
      ;(progressService.calculateUserProgress as jest.Mock).mockResolvedValue(
        mockProgress
      )

      await getUserProgress(mockRequest as Request, mockResponse as Response)

      expect(progressService.calculateUserProgress).toHaveBeenCalledWith(
        'user-456'
      )
      expect(jsonMock).toHaveBeenCalledWith({
        success: true,
        data: mockProgress,
      })
    })

    it('should handle errors', async () => {
      mockRequest.params = { userId: 'user-456' }
      ;(progressService.calculateUserProgress as jest.Mock).mockRejectedValue(
        new Error('Database error')
      )

      await getUserProgress(mockRequest as Request, mockResponse as Response)

      expect(statusMock).toHaveBeenCalledWith(500)
      expect(jsonMock).toHaveBeenCalledWith({
        success: false,
        message: 'Failed to fetch user progress',
      })
    })
  })
})
