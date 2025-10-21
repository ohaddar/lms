import { Router } from 'express'
import {
  getAllModules,
  getModuleById,
  getUserModules,
  updateModuleProgress,
  getMyModules,
  updateMyModuleProgress,
} from '../controllers'
import { authenticate } from '../middleware'

const router = Router()

// Public routes (all modules)
router.get('/', getAllModules)
router.get('/:id', getModuleById)

// Admin/Instructor routes (any user's modules)
router.get('/users/:userId/modules', getUserModules)
router.put('/users/:userId/modules/:moduleId/progress', updateModuleProgress)

// Protected routes (current user's modules)
router.get('/my/modules', authenticate, getMyModules)
router.put('/my/modules/:moduleId/progress', authenticate, updateMyModuleProgress)

export default router

