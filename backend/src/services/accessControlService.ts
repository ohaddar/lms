import { PrismaClient } from '../generated/prisma'

const prisma = new PrismaClient()

/**
 * Access control service for managing module access and unlocking logic
 */
export class AccessControlService {
  /**
   * Checks if a module is accessible to a user
   * Module 1 is always accessible
   * Module 2 is accessible if Quiz 1 is passed
   * Module 3 is accessible if Quiz 2 is passed
   */
  async isModuleAccessible(
    userId: string,
    moduleOrder: number
  ): Promise<boolean> {
    // Module 1 is always accessible to logged-in users
    if (moduleOrder === 1) {
      return true
    }

    // Get the previous module (module order is 1-based)
    const previousModule = await prisma.module.findFirst({
      where: { order: moduleOrder - 1 },
    })

    if (!previousModule) {
      return false
    }

    // Check if the user has passed the quiz for the previous module
    const hasPassedPreviousQuiz = await prisma.userQuizAttempt.findFirst({
      where: {
        userId,
        moduleId: previousModule.id,
        passed: true,
      },
    })

    return hasPassedPreviousQuiz !== null
  }

  /**
   * Gets all modules with their accessibility status for a user
   */
  async getModulesWithAccessibility(userId: string) {
    const modules = await prisma.module.findMany({
      orderBy: { order: 'asc' },
      include: {
        userProgress: {
          where: { userId },
        },
      },
    })

    const modulesWithAccess = await Promise.all(
      modules.map(async module => {
        const isAccessible = await this.isModuleAccessible(userId, module.order)
        return {
          id: module.id,
          title: module.title,
          videoUrl: module.videoUrl,
          order: module.order,
          createdAt: module.createdAt,
          updatedAt: module.updatedAt,
          isAccessible,
          isLocked: !isAccessible,
          progress: module.userProgress[0] || null,
        }
      })
    )

    return modulesWithAccess
  }

  /**
   * Unlocks the next module after a quiz is passed
   */
  async unlockNextModule(userId: string, currentModuleId: string) {
    const currentModule = await prisma.module.findUnique({
      where: { id: currentModuleId },
    })

    if (!currentModule) {
      throw new Error('Current module not found')
    }

    // Find the next module
    const nextModule = await prisma.module.findFirst({
      where: { order: currentModule.order + 1 },
    })

    if (!nextModule) {
      // No next module - this is the last one
      return null
    }

    // Create or update progress for the next module to mark it as unlocked
    const progress = await prisma.userModuleProgress.upsert({
      where: {
        userId_moduleId: {
          userId,
          moduleId: nextModule.id,
        },
      },
      update: {
        isUnlocked: true,
      },
      create: {
        userId,
        moduleId: nextModule.id,
        isUnlocked: true,
        status: 'NOT_STARTED',
      },
    })

    return {
      module: nextModule,
      progress,
    }
  }

  /**
   * Initialize progress for Module 1 when a user first logs in
   */
  async initializeUserProgress(userId: string) {
    // Get Module 1
    const module1 = await prisma.module.findFirst({
      where: { order: 1 },
    })

    if (!module1) {
      throw new Error('Module 1 not found')
    }

    // Create progress for Module 1 as unlocked
    const progress = await prisma.userModuleProgress.upsert({
      where: {
        userId_moduleId: {
          userId,
          moduleId: module1.id,
        },
      },
      update: {
        isUnlocked: true,
      },
      create: {
        userId,
        moduleId: module1.id,
        isUnlocked: true,
        status: 'NOT_STARTED',
      },
    })

    return progress
  }

  /**
   * Check if a user has completed all modules
   */
  async hasCompletedAllModules(userId: string): Promise<boolean> {
    const totalModules = await prisma.module.count()
    const completedModules = await prisma.userModuleProgress.count({
      where: {
        userId,
        status: 'COMPLETED',
        quizPassed: true,
      },
    })

    return totalModules > 0 && totalModules === completedModules
  }
}

export const accessControlService = new AccessControlService()
