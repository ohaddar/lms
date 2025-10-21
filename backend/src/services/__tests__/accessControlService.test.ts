import { AccessControlService } from '../accessControlService'

// Create mock functions
const mockModuleFindFirst = jest.fn()
const mockModuleFindMany = jest.fn()
const mockModuleFindUnique = jest.fn()
const mockModuleCount = jest.fn()
const mockUserQuizAttemptFindFirst = jest.fn()
const mockUserModuleProgressUpsert = jest.fn()
const mockUserModuleProgressCount = jest.fn()

// Mock Prisma Client
jest.mock('../../generated/prisma', () => ({
  PrismaClient: jest.fn().mockImplementation(() => ({
    module: {
      findFirst: mockModuleFindFirst,
      findMany: mockModuleFindMany,
      findUnique: mockModuleFindUnique,
      count: mockModuleCount,
    },
    userQuizAttempt: {
      findFirst: mockUserQuizAttemptFindFirst,
    },
    userModuleProgress: {
      upsert: mockUserModuleProgressUpsert,
      count: mockUserModuleProgressCount,
    },
  })),
}))

describe('AccessControlService', () => {
  let accessControlService: AccessControlService

  beforeEach(() => {
    jest.clearAllMocks()
    accessControlService = new AccessControlService()
  })

  describe('isModuleAccessible', () => {
    it('should allow access to Module 1 for any user', async () => {
      const result = await accessControlService.isModuleAccessible(
        'user-123',
        1
      )
      expect(result).toBe(true)
    })

    it('should allow access to Module 2 if user passed Quiz 1', async () => {
      const mockPreviousModule = { id: 'module-1', order: 1 }
      const mockQuizAttempt = { id: 'attempt-1', passed: true }

      mockModuleFindFirst.mockResolvedValueOnce(mockPreviousModule)
      mockUserQuizAttemptFindFirst.mockResolvedValueOnce(mockQuizAttempt)

      const result = await accessControlService.isModuleAccessible(
        'user-123',
        2
      )
      expect(result).toBe(true)
      expect(mockModuleFindFirst).toHaveBeenCalledWith({
        where: { order: 1 },
      })
      expect(mockUserQuizAttemptFindFirst).toHaveBeenCalledWith({
        where: {
          userId: 'user-123',
          moduleId: 'module-1',
          passed: true,
        },
      })
    })

    it('should deny access to Module 2 if user did not pass Quiz 1', async () => {
      const mockPreviousModule = { id: 'module-1', order: 1 }

      mockModuleFindFirst.mockResolvedValueOnce(mockPreviousModule)
      mockUserQuizAttemptFindFirst.mockResolvedValueOnce(null)

      const result = await accessControlService.isModuleAccessible(
        'user-123',
        2
      )
      expect(result).toBe(false)
    })

    it('should deny access if previous module does not exist', async () => {
      mockModuleFindFirst.mockResolvedValueOnce(null)

      const result = await accessControlService.isModuleAccessible(
        'user-123',
        2
      )
      expect(result).toBe(false)
    })
  })

  describe('unlockNextModule', () => {
    it('should unlock the next module after completing current module', async () => {
      const mockCurrentModule = { id: 'module-1', order: 1 }
      const mockNextModule = { id: 'module-2', order: 2 }
      const mockProgress = {
        id: 'progress-1',
        userId: 'user-123',
        moduleId: 'module-2',
        isUnlocked: true,
        status: 'NOT_STARTED',
      }

      mockModuleFindUnique.mockResolvedValueOnce(mockCurrentModule)
      mockModuleFindFirst.mockResolvedValueOnce(mockNextModule)
      mockUserModuleProgressUpsert.mockResolvedValueOnce(mockProgress)

      const result = await accessControlService.unlockNextModule(
        'user-123',
        'module-1'
      )

      expect(result).toEqual({
        module: mockNextModule,
        progress: mockProgress,
      })
      expect(mockUserModuleProgressUpsert).toHaveBeenCalledWith({
        where: {
          userId_moduleId: {
            userId: 'user-123',
            moduleId: 'module-2',
          },
        },
        update: {
          isUnlocked: true,
        },
        create: {
          userId: 'user-123',
          moduleId: 'module-2',
          isUnlocked: true,
          status: 'NOT_STARTED',
        },
      })
    })

    it('should return null if there is no next module', async () => {
      const mockCurrentModule = { id: 'module-3', order: 3 }

      mockModuleFindUnique.mockResolvedValueOnce(mockCurrentModule)
      mockModuleFindFirst.mockResolvedValueOnce(null)

      const result = await accessControlService.unlockNextModule(
        'user-123',
        'module-3'
      )

      expect(result).toBeNull()
    })

    it('should throw error if current module does not exist', async () => {
      mockModuleFindUnique.mockResolvedValueOnce(null)

      await expect(
        accessControlService.unlockNextModule('user-123', 'invalid-module')
      ).rejects.toThrow('Current module not found')
    })
  })

  describe('initializeUserProgress', () => {
    it('should create or update progress for Module 1 as unlocked', async () => {
      const mockModule1 = { id: 'module-1', order: 1 }
      const mockProgress = {
        id: 'progress-1',
        userId: 'user-123',
        moduleId: 'module-1',
        isUnlocked: true,
        status: 'NOT_STARTED',
      }

      mockModuleFindFirst.mockResolvedValueOnce(mockModule1)
      mockUserModuleProgressUpsert.mockResolvedValueOnce(mockProgress)

      const result =
        await accessControlService.initializeUserProgress('user-123')

      expect(result).toEqual(mockProgress)
      expect(mockUserModuleProgressUpsert).toHaveBeenCalledWith({
        where: {
          userId_moduleId: {
            userId: 'user-123',
            moduleId: 'module-1',
          },
        },
        update: {
          isUnlocked: true,
        },
        create: {
          userId: 'user-123',
          moduleId: 'module-1',
          isUnlocked: true,
          status: 'NOT_STARTED',
        },
      })
    })

    it('should throw error if Module 1 does not exist', async () => {
      mockModuleFindFirst.mockResolvedValueOnce(null)

      await expect(
        accessControlService.initializeUserProgress('user-123')
      ).rejects.toThrow('Module 1 not found')
    })
  })

  describe('hasCompletedAllModules', () => {
    it('should return true if all modules are completed', async () => {
      mockModuleCount.mockResolvedValueOnce(3)
      mockUserModuleProgressCount.mockResolvedValueOnce(3)

      const result =
        await accessControlService.hasCompletedAllModules('user-123')

      expect(result).toBe(true)
      expect(mockUserModuleProgressCount).toHaveBeenCalledWith({
        where: {
          userId: 'user-123',
          status: 'COMPLETED',
          quizPassed: true,
        },
      })
    })

    it('should return false if not all modules are completed', async () => {
      mockModuleCount.mockResolvedValueOnce(3)
      mockUserModuleProgressCount.mockResolvedValueOnce(2)

      const result =
        await accessControlService.hasCompletedAllModules('user-123')

      expect(result).toBe(false)
    })

    it('should return false if there are no modules', async () => {
      mockModuleCount.mockResolvedValueOnce(0)
      mockUserModuleProgressCount.mockResolvedValueOnce(0)

      const result =
        await accessControlService.hasCompletedAllModules('user-123')

      expect(result).toBe(false)
    })
  })

  describe('getModulesWithAccessibility', () => {
    it('should return modules with correct accessibility status', async () => {
      const mockModules = [
        {
          id: 'module-1',
          title: 'Module 1',
          videoUrl: 'url1',
          order: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          userProgress: [],
        },
        {
          id: 'module-2',
          title: 'Module 2',
          videoUrl: 'url2',
          order: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          userProgress: [],
        },
      ]

      mockModuleFindMany.mockResolvedValueOnce(mockModules)
      mockModuleFindFirst.mockResolvedValueOnce({
        id: 'module-1',
        order: 1,
      })
      mockUserQuizAttemptFindFirst.mockResolvedValueOnce({
        id: 'attempt-1',
        passed: true,
      })

      const result =
        await accessControlService.getModulesWithAccessibility('user-123')

      expect(result).toHaveLength(2)
      expect(result[0].isAccessible).toBe(true)
      expect(result[0].isLocked).toBe(false)
      expect(result[1].isAccessible).toBe(true)
      expect(result[1].isLocked).toBe(false)
    })
  })
})
