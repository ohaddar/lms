import { Router } from 'express'
import { login, logout, getCurrentUser } from '../controllers/authController'
import { authenticate } from '../middleware/auth'

const router = Router()

// Public routes
router.post('/login', login)
router.post('/logout', logout)

// Protected routes
router.get('/me', authenticate, getCurrentUser)

export { router as authRoutes }
