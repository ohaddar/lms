import { Router } from 'express'
import { getMyProgress, getUserProgress } from '../controllers'
import { authenticate } from '../middleware'

const router = Router()

// Get current user's progress
router.get('/my/progress', authenticate, getMyProgress)

// Get user progress by ID (for admin/testing)
router.get('/users/:userId/progress', getUserProgress)

export default router
