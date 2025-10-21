import { prisma } from '@/config'

export interface UserProgress {
  totalModules: number
  completedModules: number
  percentage: number
}

/**
 * Calculate user's overall progress across all modules
 * @param userId - User ID
 * @returns User progress data
 */
export const calculateUserProgress = async (
  userId: string
): Promise<UserProgress> => {
  // Get total number of modules
  const totalModules = await prisma.module.count()

  // Get number of completed modules for the user
  const completedModules = await prisma.userModuleProgress.count({
    where: {
      userId,
      status: 'COMPLETED',
    },
  })

  // Calculate percentage
  const percentage =
    totalModules > 0 ? (completedModules / totalModules) * 100 : 0

  return {
    totalModules,
    completedModules,
    percentage: Math.round(percentage * 100) / 100, // Round to 2 decimal places
  }
}

/**
 * Check if user has completed all modules
 * @param userId - User ID
 * @returns True if all modules are completed
 */
export const hasCompletedAllModules = async (
  userId: string
): Promise<boolean> => {
  const progress = await calculateUserProgress(userId)
  return (
    progress.completedModules === progress.totalModules &&
    progress.totalModules > 0
  )
}
