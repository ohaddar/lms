import { PrismaClient } from '../../generated/prisma'
import {
  calculateUserProgress,
  hasCompletedAllModules,
} from '../progressService'

jest.mock('../../generated/prisma', () => ({
  PrismaClient: jest.fn(),
}))

describe('ProgressService', () => {
  let mockPrisma: any

  beforeEach(() => {
    mockPrisma = {
      module: {
        count: jest.fn(),
      },
      userModuleProgress: {
        count: jest.fn(),
      },
    }
    ;(PrismaClient as jest.Mock).mockImplementation(() => mockPrisma)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('calculateUserProgress', () => {
    it('should calculate progress correctly', async () => {
      const userId = 'user-123'
      mockPrisma.module.count.mockResolvedValue(3)
      mockPrisma.userModuleProgress.count.mockResolvedValue(2)

      const result = await calculateUserProgress(userId)

      expect(result).toEqual({
        totalModules: 3,
        completedModules: 2,
        percentage: 66.67,
      })
      expect(mockPrisma.module.count).toHaveBeenCalled()
      expect(mockPrisma.userModuleProgress.count).toHaveBeenCalledWith({
        where: {
          userId,
          status: 'COMPLETED',
        },
      })
    })

    it('should return 0% when no modules exist', async () => {
      const userId = 'user-123'
      mockPrisma.module.count.mockResolvedValue(0)
      mockPrisma.userModuleProgress.count.mockResolvedValue(0)

      const result = await calculateUserProgress(userId)

      expect(result).toEqual({
        totalModules: 0,
        completedModules: 0,
        percentage: 0,
      })
    })

    it('should return 100% when all modules are completed', async () => {
      const userId = 'user-123'
      mockPrisma.module.count.mockResolvedValue(3)
      mockPrisma.userModuleProgress.count.mockResolvedValue(3)

      const result = await calculateUserProgress(userId)

      expect(result).toEqual({
        totalModules: 3,
        completedModules: 3,
        percentage: 100,
      })
    })
  })

  describe('hasCompletedAllModules', () => {
    it('should return true when all modules are completed', async () => {
      const userId = 'user-123'
      mockPrisma.module.count.mockResolvedValue(3)
      mockPrisma.userModuleProgress.count.mockResolvedValue(3)

      const result = await hasCompletedAllModules(userId)

      expect(result).toBe(true)
    })

    it('should return false when not all modules are completed', async () => {
      const userId = 'user-123'
      mockPrisma.module.count.mockResolvedValue(3)
      mockPrisma.userModuleProgress.count.mockResolvedValue(2)

      const result = await hasCompletedAllModules(userId)

      expect(result).toBe(false)
    })

    it('should return false when no modules exist', async () => {
      const userId = 'user-123'
      mockPrisma.module.count.mockResolvedValue(0)
      mockPrisma.userModuleProgress.count.mockResolvedValue(0)

      const result = await hasCompletedAllModules(userId)

      expect(result).toBe(false)
    })
  })
})
