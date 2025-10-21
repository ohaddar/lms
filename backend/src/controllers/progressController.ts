import { Request, Response } from 'express'
import { progressService } from '../services'

/**
 * Get current user's overall progress
 * @route GET /api/my/progress
 */
export const getMyProgress = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.userId

    if (!userId) {
      res.status(401).json({
        success: false,
        message: 'Not authenticated',
      })
      return
    }

    const progress = await progressService.calculateUserProgress(userId)

    res.json({
      success: true,
      data: progress,
    })
  } catch (error) {
    console.error('Error fetching progress:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to fetch progress',
    })
  }
}

/**
 * Get user's progress by ID (for admin/testing)
 * @route GET /api/users/:userId/progress
 */
export const getUserProgress = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params

    const progress = await progressService.calculateUserProgress(userId)

    res.json({
      success: true,
      data: progress,
    })
  } catch (error) {
    console.error('Error fetching user progress:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to fetch user progress',
    })
  }
}
