import { Router } from 'express'
import { getMyModuleFeedback } from '../controllers/feedbackController'
import { authenticate } from '../middleware'

const router = Router()

// Get current user's feedback for a specific module
router.get('/my/modules/:moduleId/feedback', authenticate, getMyModuleFeedback)

export default router


