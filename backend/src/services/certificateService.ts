import { prisma } from '@/config'
import { hasCompletedAllModules } from './progressService'

/**
 * Generate a unique certificate number
 * @returns Unique certificate number in format: CERT-YYYYMMDD-XXXXXX
 */
const generateCertificateNumber = (): string => {
  const date = new Date()
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const random = Math.floor(Math.random() * 1000000)
    .toString()
    .padStart(6, '0')

  return `CERT-${year}${month}${day}-${random}`
}

/**
 * Get or create a certificate for a user
 * @param userId - User ID
 * @returns Certificate data or null if user hasn't completed all modules
 */
export const getOrCreateCertificate = async (userId: string) => {
  // Check if user has completed all modules
  const hasCompleted = await hasCompletedAllModules(userId)

  if (!hasCompleted) {
    return null
  }

  // Check if certificate already exists
  let certificate = await prisma.certificate.findFirst({
    where: { userId },
    include: {
      user: {
        select: {
          firstName: true,
          lastName: true,
          email: true,
        },
      },
    },
  })

  // Create certificate if it doesn't exist
  if (!certificate) {
    certificate = await prisma.certificate.create({
      data: {
        userId,
        certificateNumber: generateCertificateNumber(),
      },
      include: {
        user: {
          select: {
            firstName: true,
            lastName: true,
            email: true,
          },
        },
      },
    })
  }

  return certificate
}

/**
 * Get certificate by user ID
 * @param userId - User ID
 * @returns Certificate data or null
 */
export const getCertificateByUserId = async (userId: string) => {
  return await prisma.certificate.findFirst({
    where: { userId },
    include: {
      user: {
        select: {
          firstName: true,
          lastName: true,
          email: true,
        },
      },
    },
  })
}
