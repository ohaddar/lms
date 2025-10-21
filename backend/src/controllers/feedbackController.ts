import { Request, Response } from 'express'
import { PrismaClient } from '../generated/prisma'

const prisma = new PrismaClient()

/**
 * Submit feedback for a module
 * @route POST /api/modules/:moduleId/feedback
 */
export const submitModuleFeedback = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.userId
    const { moduleId } = req.params
    const { helpful } = req.body

    if (!userId) {
      res.status(401).json({
        success: false,
        message: 'Not authenticated',
      })
      return
    }

    // Validate helpful field
    if (typeof helpful !== 'boolean') {
      res.status(400).json({
        success: false,
        message: 'Invalid feedback. "helpful" must be a boolean value.',
      })
      return
    }

    // Check if module exists
    const module = await prisma.module.findUnique({
      where: { id: moduleId },
    })

    if (!module) {
      res.status(404).json({
        success: false,
        message: 'Module not found',
      })
      return
    }

    // Check if feedback already exists
    const existingFeedback = await prisma.moduleFeedback.findUnique({
      where: {
        userId_moduleId: {
          userId,
          moduleId,
        },
      },
    })

    if (existingFeedback) {
      res.status(409).json({
        success: false,
        message: 'Feedback already submitted for this module',
      })
      return
    }

    // Create feedback
    const feedback = await prisma.moduleFeedback.create({
      data: {
        userId,
        moduleId,
        helpful,
      },
    })

    res.status(201).json({
      success: true,
      data: feedback,
    })
  } catch (error) {
    console.error('Error submitting feedback:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to submit feedback',
    })
  }
}

/**
 * Get feedback for a module (for admin/analytics)
 * @route GET /api/modules/:moduleId/feedback
 */
export const getModuleFeedback = async (req: Request, res: Response) => {
  try {
    const { moduleId } = req.params

    // Check if module exists
    const module = await prisma.module.findUnique({
      where: { id: moduleId },
    })

    if (!module) {
      res.status(404).json({
        success: false,
        message: 'Module not found',
      })
      return
    }

    // Get all feedback for the module
    const feedbackList = await prisma.moduleFeedback.findMany({
      where: { moduleId },
      include: {
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    // Calculate statistics
    const totalFeedback = feedbackList.length
    const helpfulCount = feedbackList.filter(f => f.helpful).length
    const notHelpfulCount = totalFeedback - helpfulCount
    const helpfulPercentage =
      totalFeedback > 0 ? (helpfulCount / totalFeedback) * 100 : 0

    res.json({
      success: true,
      data: {
        module: {
          id: module.id,
          title: module.title,
        },
        statistics: {
          total: totalFeedback,
          helpful: helpfulCount,
          notHelpful: notHelpfulCount,
          helpfulPercentage: Math.round(helpfulPercentage * 100) / 100,
        },
        feedback: feedbackList,
      },
    })
  } catch (error) {
    console.error('Error fetching module feedback:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to fetch module feedback',
    })
  }
}

/**
 * Get user's feedback for a specific module
 * @route GET /api/my/modules/:moduleId/feedback
 */
export const getMyModuleFeedback = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.userId
    const { moduleId } = req.params

    if (!userId) {
      res.status(401).json({
        success: false,
        message: 'Not authenticated',
      })
      return
    }

    const feedback = await prisma.moduleFeedback.findUnique({
      where: {
        userId_moduleId: {
          userId,
          moduleId,
        },
      },
    })

    res.json({
      success: true,
      data: feedback,
    })
  } catch (error) {
    console.error('Error fetching feedback:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to fetch feedback',
    })
  }
}
