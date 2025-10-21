import { Request, Response, NextFunction } from 'express'
import { checkModuleAccess } from '../moduleAccess'
import { PrismaClient } from '../../generated/prisma'
import { accessControlService } from '../../services'

// Mock the dependencies
jest.mock('../../generated/prisma')
jest.mock('../../services')

describe('checkModuleAccess middleware', () => {
  let mockRequest: Partial<Request>
  let mockResponse: Partial<Response>
  let mockNext: NextFunction
  let mockPrisma: any

  beforeEach(() => {
    mockRequest = {
      user: { userId: 'user-123', email: 'test@example.com' },
      params: { moduleId: 'module-1' },
    }
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    }
    mockNext = jest.fn()
    mockPrisma = new PrismaClient()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should call next() if module is accessible', async () => {
    const mockModule = { id: 'module-1', order: 1 }
    mockPrisma.module.findUnique.mockResolvedValue(mockModule)
    ;(accessControlService.isModuleAccessible as jest.Mock).mockResolvedValue(
      true
    )

    await checkModuleAccess(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    )

    expect(mockNext).toHaveBeenCalled()
    expect(mockResponse.status).not.toHaveBeenCalled()
  })

  it('should return 403 if module is locked', async () => {
    const mockModule = { id: 'module-2', order: 2 }
    mockPrisma.module.findUnique.mockResolvedValue(mockModule)
    ;(accessControlService.isModuleAccessible as jest.Mock).mockResolvedValue(
      false
    )

    await checkModuleAccess(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    )

    expect(mockResponse.status).toHaveBeenCalledWith(403)
    expect(mockResponse.json).toHaveBeenCalledWith({
      success: false,
      message:
        'This module is locked. Complete the previous module quiz to unlock.',
      locked: true,
      requiredModule: 1,
    })
    expect(mockNext).not.toHaveBeenCalled()
  })

  it('should return 401 if user is not authenticated', async () => {
    mockRequest.user = undefined

    await checkModuleAccess(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    )

    expect(mockResponse.status).toHaveBeenCalledWith(401)
    expect(mockResponse.json).toHaveBeenCalledWith({
      success: false,
      message: 'Not authenticated',
    })
    expect(mockNext).not.toHaveBeenCalled()
  })

  it('should return 400 if moduleId is not provided', async () => {
    mockRequest.params = {}

    await checkModuleAccess(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    )

    expect(mockResponse.status).toHaveBeenCalledWith(400)
    expect(mockResponse.json).toHaveBeenCalledWith({
      success: false,
      message: 'Module ID is required',
    })
    expect(mockNext).not.toHaveBeenCalled()
  })

  it('should return 404 if module does not exist', async () => {
    mockPrisma.module.findUnique.mockResolvedValue(null)

    await checkModuleAccess(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    )

    expect(mockResponse.status).toHaveBeenCalledWith(404)
    expect(mockResponse.json).toHaveBeenCalledWith({
      success: false,
      message: 'Module not found',
    })
    expect(mockNext).not.toHaveBeenCalled()
  })

  it('should return 500 if an error occurs', async () => {
    mockPrisma.module.findUnique.mockRejectedValue(new Error('Database error'))

    await checkModuleAccess(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    )

    expect(mockResponse.status).toHaveBeenCalledWith(500)
    expect(mockResponse.json).toHaveBeenCalledWith({
      success: false,
      message: 'Failed to check module access',
    })
    expect(mockNext).not.toHaveBeenCalled()
  })
})
