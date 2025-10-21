import { Request, Response } from 'express'
import type { ModuleStatus } from '@prisma/client'
import { prisma } from '@/config'
import { accessControlService } from '../services'

/**
 * Get all modules
 * @route GET /api/modules
 */
export const getAllModules = async (_req: Request, res: Response) => {
  try {
    const modules = await prisma.module.findMany({
      orderBy: { order: 'asc' },
    })

    res.json({
      success: true,
      data: modules,
    })
  } catch (error) {
    console.error('Error fetching modules:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to fetch modules',
    })
  }
}

/**
 * Get a single module by ID
 * @route GET /api/modules/:id
 */
export const getModuleById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    const module = await prisma.module.findUnique({
      where: { id },
    })

    if (!module) {
      res.status(404).json({
        success: false,
        message: 'Module not found',
      })
      return
    }

    res.json({
      success: true,
      data: module,
    })
  } catch (error) {
    console.error('Error fetching module:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to fetch module',
    })
  }
}

/**
 * Get user's module progress
 * @route GET /api/users/:userId/modules
 */
export const getUserModules = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params

    // First, check if user exists
    const user = await prisma.user.findUnique({
      where: { id: userId },
    })

    if (!user) {
      res.status(404).json({
        success: false,
        message: 'User not found',
      })
      return
    }

    // Get all modules with user's progress
    const modules = await prisma.module.findMany({
      orderBy: { order: 'asc' },
      include: {
        userProgress: {
          where: {
            userId,
          },
        },
      },
    })

    // Transform the response to include progress status
    const modulesWithProgress = modules.map(module => ({
      id: module.id,
      title: module.title,
      videoUrl: module.videoUrl,
      order: module.order,
      createdAt: module.createdAt,
      updatedAt: module.updatedAt,
      progress: module.userProgress[0] || null,
    }))

    res.json({
      success: true,
      data: modulesWithProgress,
    })
  } catch (error) {
    console.error('Error fetching user modules:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to fetch user modules',
    })
  }
}

/**
 * Update user's module progress
 * @route PUT /api/users/:userId/modules/:moduleId/progress
 */
export const updateModuleProgress = async (req: Request, res: Response) => {
  try {
    const { userId, moduleId } = req.params
    const { status } = req.body

    // Validate status
    const validStatuses: ModuleStatus[] = [
      'NOT_STARTED',
      'IN_PROGRESS',
      'COMPLETED',
    ]
    if (!status || !validStatuses.includes(status)) {
      res.status(400).json({
        success: false,
        message:
          'Invalid status. Must be one of: NOT_STARTED, IN_PROGRESS, COMPLETED',
      })
      return
    }

    // Check if user and module exist
    const [user, module] = await Promise.all([
      prisma.user.findUnique({ where: { id: userId } }),
      prisma.module.findUnique({ where: { id: moduleId } }),
    ])

    if (!user) {
      res.status(404).json({
        success: false,
        message: 'User not found',
      })
      return
    }

    if (!module) {
      res.status(404).json({
        success: false,
        message: 'Module not found',
      })
      return
    }

    // Upsert progress
    const now = new Date()
    const progress = await prisma.userModuleProgress.upsert({
      where: {
        userId_moduleId: {
          userId,
          moduleId,
        },
      },
      update: {
        status,
        ...(status === 'IN_PROGRESS' && { startedAt: now }),
        ...(status === 'COMPLETED' && { completedAt: now }),
      },
      create: {
        userId,
        moduleId,
        status,
        ...(status === 'IN_PROGRESS' && { startedAt: now }),
        ...(status === 'COMPLETED' && { completedAt: now }),
      },
    })

    res.json({
      success: true,
      data: progress,
    })
  } catch (error) {
    console.error('Error updating module progress:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to update module progress',
    })
  }
}

/**
 * Get current user's module progress (uses authenticated user)
 * @route GET /api/my/modules
 */
export const getMyModules = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.userId

    if (!userId) {
      res.status(401).json({
        success: false,
        message: 'Not authenticated',
      })
      return
    }

    // Initialize user progress (unlock Module 1) if first time
    await accessControlService.initializeUserProgress(userId)

    // Get all modules with accessibility status
    const modulesWithAccess =
      await accessControlService.getModulesWithAccessibility(userId)

    res.json({
      success: true,
      data: modulesWithAccess,
    })
  } catch (error) {
    console.error('Error fetching my modules:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to fetch modules',
    })
  }
}

/**
 * Update current user's module progress (uses authenticated user)
 * @route PUT /api/my/modules/:moduleId/progress
 */
export const updateMyModuleProgress = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.userId
    const { moduleId } = req.params
    const { status } = req.body

    if (!userId) {
      res.status(401).json({
        success: false,
        message: 'Not authenticated',
      })
      return
    }

    // Validate status
    const validStatuses: ModuleStatus[] = [
      'NOT_STARTED',
      'IN_PROGRESS',
      'COMPLETED',
    ]
    if (!status || !validStatuses.includes(status)) {
      res.status(400).json({
        success: false,
        message:
          'Invalid status. Must be one of: NOT_STARTED, IN_PROGRESS, COMPLETED',
      })
      return
    }

    // Check if module exists
    const module = await prisma.module.findUnique({ where: { id: moduleId } })

    if (!module) {
      res.status(404).json({
        success: false,
        message: 'Module not found',
      })
      return
    }

    // Upsert progress
    const now = new Date()
    const progress = await prisma.userModuleProgress.upsert({
      where: {
        userId_moduleId: {
          userId,
          moduleId,
        },
      },
      update: {
        status,
        ...(status === 'IN_PROGRESS' && { startedAt: now }),
        ...(status === 'COMPLETED' && { completedAt: now }),
      },
      create: {
        userId,
        moduleId,
        status,
        ...(status === 'IN_PROGRESS' && { startedAt: now }),
        ...(status === 'COMPLETED' && { completedAt: now }),
      },
    })

    res.json({
      success: true,
      data: progress,
    })
  } catch (error) {
    console.error('Error updating module progress:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to update module progress',
    })
  }
}
