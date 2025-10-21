import { Router } from 'express'
import healthRoutes from './healthRoutes'
import { authRoutes } from './authRoutes'
import moduleRoutes from './moduleRoutes'

const router = Router()

router.use('/health', healthRoutes)
router.use('/auth', authRoutes)
router.use('/modules', moduleRoutes)

export default router
