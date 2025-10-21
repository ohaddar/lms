import { Router } from 'express'
import {
  submitModuleFeedback,
  getModuleFeedback,
  getMyModuleFeedback,
} from '../controllers/feedbackController'
import { authenticate } from '../middleware'

const router = Router()

// Submit feedback for a module
router.post('/modules/:moduleId/feedback', authenticate, submitModuleFeedback)

// Get feedback for a module (for admin/analytics)
router.get('/modules/:moduleId/feedback', getModuleFeedback)

// Get current user's feedback for a specific module
router.get('/my/modules/:moduleId/feedback', authenticate, getMyModuleFeedback)

export default router
