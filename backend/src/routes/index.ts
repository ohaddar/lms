import { Router } from 'express'
import healthRoutes from './healthRoutes'
import { authRoutes } from './authRoutes'
import moduleRoutes from './moduleRoutes'
import progressRoutes from './progressRoutes'
import certificateRoutes from './certificateRoutes'
import feedbackRoutes from './feedbackRoutes'

const router = Router()

router.use('/health', healthRoutes)
router.use('/auth', authRoutes)
router.use('/modules', moduleRoutes)
router.use('/', progressRoutes)
router.use('/', certificateRoutes)
router.use('/', feedbackRoutes)

export default router
