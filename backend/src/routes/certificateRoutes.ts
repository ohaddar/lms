import { Router } from 'express'
import {
  getMyCertificate,
  downloadMyCertificate,
  getUserCertificate,
} from '../controllers'
import { authenticate } from '../middleware'

const router = Router()

// Get current user's certificate
router.get('/my/certificate', authenticate, getMyCertificate)

// Download current user's certificate as PDF
router.get('/my/certificate/download', authenticate, downloadMyCertificate)

// Get user certificate by ID (for admin/testing)
router.get('/users/:userId/certificate', getUserCertificate)

export default router
