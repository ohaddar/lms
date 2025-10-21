import { Router } from 'express'
import {
  getAllModules,
  getModuleById,
  getUserModules,
  updateModuleProgress,
  getMyModules,
  updateMyModuleProgress,
} from '../controllers'
import {
  getModuleQuiz,
  submitQuiz,
  getQuizAttempts,
} from '../controllers/quizController'
import { authenticate, checkModuleAccess } from '../middleware'

const router = Router()

// Public routes (all modules)
router.get('/', getAllModules)
router.get('/:id', getModuleById)

// Admin/Instructor routes (any user's modules)
router.get('/users/:userId/modules', getUserModules)
router.put('/users/:userId/modules/:moduleId/progress', updateModuleProgress)

// Protected routes (current user's modules)
router.get('/my/modules', authenticate, getMyModules)
router.put(
  '/my/modules/:moduleId/progress',
  authenticate,
  updateMyModuleProgress
)

// Quiz routes (protected with access control)
router.get('/:moduleId/quiz', authenticate, checkModuleAccess, getModuleQuiz)
router.post(
  '/:moduleId/quiz/submit',
  authenticate,
  checkModuleAccess,
  submitQuiz
)
router.get(
  '/:moduleId/quiz/attempts',
  authenticate,
  checkModuleAccess,
  getQuizAttempts
)

export default router
