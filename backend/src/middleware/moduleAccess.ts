import { Request, Response, NextFunction } from 'express'
import { PrismaClient } from '../generated/prisma'
import { accessControlService } from '../services'

const prisma = new PrismaClient()

/**
 * Middleware to check if a user has access to a module
 * Prevents access to locked modules via URL manipulation
 */
export const checkModuleAccess = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
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

    if (!moduleId) {
      res.status(400).json({
        success: false,
        message: 'Module ID is required',
      })
      return
    }

    // Get the module
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

    // Check if the module is accessible
    const isAccessible = await accessControlService.isModuleAccessible(
      userId,
      module.order
    )

    if (!isAccessible) {
      res.status(403).json({
        success: false,
        message:
          'This module is locked. Complete the previous module quiz to unlock.',
        locked: true,
        requiredModule: module.order - 1,
      })
      return
    }

    // Module is accessible, continue to the route handler
    next()
  } catch (error) {
    console.error('Error checking module access:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to check module access',
    })
  }
}
