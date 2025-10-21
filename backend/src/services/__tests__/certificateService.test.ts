import { PrismaClient } from '../../generated/prisma'
import {
  getOrCreateCertificate,
  getCertificateByUserId,
} from '../certificateService'
import * as progressService from '../progressService'

jest.mock('../../generated/prisma', () => ({
  PrismaClient: jest.fn(),
}))

jest.mock('../progressService')

describe('CertificateService', () => {
  let mockPrisma: any

  beforeEach(() => {
    mockPrisma = {
      certificate: {
        findFirst: jest.fn(),
        create: jest.fn(),
      },
    }
    ;(PrismaClient as jest.Mock).mockImplementation(() => mockPrisma)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('getOrCreateCertificate', () => {
    const mockUser = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
    }

    it('should return null when user has not completed all modules', async () => {
      const userId = 'user-123'
      ;(progressService.hasCompletedAllModules as jest.Mock).mockResolvedValue(
        false
      )

      const result = await getOrCreateCertificate(userId)

      expect(result).toBeNull()
      expect(progressService.hasCompletedAllModules).toHaveBeenCalledWith(
        userId
      )
      expect(mockPrisma.certificate.findFirst).not.toHaveBeenCalled()
    })

    it('should return existing certificate if one exists', async () => {
      const userId = 'user-123'
      const existingCertificate = {
        id: 'cert-123',
        userId,
        certificateNumber: 'CERT-20231201-123456',
        issuedAt: new Date(),
        user: mockUser,
      }

      ;(progressService.hasCompletedAllModules as jest.Mock).mockResolvedValue(
        true
      )
      mockPrisma.certificate.findFirst.mockResolvedValue(
        existingCertificate as any
      )

      const result = await getOrCreateCertificate(userId)

      expect(result).toEqual(existingCertificate)
      expect(mockPrisma.certificate.findFirst).toHaveBeenCalledWith({
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
      expect(mockPrisma.certificate.create).not.toHaveBeenCalled()
    })

    it('should create new certificate if none exists', async () => {
      const userId = 'user-123'
      const newCertificate = {
        id: 'cert-123',
        userId,
        certificateNumber: expect.stringMatching(/^CERT-\d{8}-\d{6}$/),
        issuedAt: new Date(),
        user: mockUser,
      }

      ;(progressService.hasCompletedAllModules as jest.Mock).mockResolvedValue(
        true
      )
      mockPrisma.certificate.findFirst.mockResolvedValue(null)
      mockPrisma.certificate.create.mockResolvedValue(newCertificate as any)

      const result = await getOrCreateCertificate(userId)

      expect(result).toEqual(newCertificate)
      expect(mockPrisma.certificate.create).toHaveBeenCalledWith({
        data: {
          userId,
          certificateNumber: expect.stringMatching(/^CERT-\d{8}-\d{6}$/),
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
    })
  })

  describe('getCertificateByUserId', () => {
    it('should return certificate for user', async () => {
      const userId = 'user-123'
      const certificate = {
        id: 'cert-123',
        userId,
        certificateNumber: 'CERT-20231201-123456',
        issuedAt: new Date(),
        user: {
          firstName: 'John',
          lastName: 'Doe',
          email: 'john@example.com',
        },
      }

      mockPrisma.certificate.findFirst.mockResolvedValue(certificate as any)

      const result = await getCertificateByUserId(userId)

      expect(result).toEqual(certificate)
      expect(mockPrisma.certificate.findFirst).toHaveBeenCalledWith({
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
    })

    it('should return null when no certificate exists', async () => {
      const userId = 'user-123'
      mockPrisma.certificate.findFirst.mockResolvedValue(null)

      const result = await getCertificateByUserId(userId)

      expect(result).toBeNull()
    })
  })
})
