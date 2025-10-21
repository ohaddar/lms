import { Request, Response } from 'express'
import { certificateService } from '../services'
import PDFDocument from 'pdfkit'

/**
 * Get current user's certificate
 * @route GET /api/my/certificate
 */
export const getMyCertificate = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.userId

    if (!userId) {
      res.status(401).json({
        success: false,
        message: 'Not authenticated',
      })
      return
    }

    const certificate = await certificateService.getOrCreateCertificate(userId)

    if (!certificate) {
      res.status(404).json({
        success: false,
        message: 'Certificate not available. Complete all modules first.',
      })
      return
    }

    res.json({
      success: true,
      data: certificate,
    })
  } catch (error) {
    console.error('Error fetching certificate:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to fetch certificate',
    })
  }
}

/**
 * Download current user's certificate as PDF
 * @route GET /api/my/certificate/download
 */
export const downloadMyCertificate = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.userId

    if (!userId) {
      res.status(401).json({
        success: false,
        message: 'Not authenticated',
      })
      return
    }

    const certificate = await certificateService.getOrCreateCertificate(userId)

    if (!certificate) {
      res.status(404).json({
        success: false,
        message: 'Certificate not available. Complete all modules first.',
      })
      return
    }

    // Create PDF
    const doc = new PDFDocument({
      size: 'A4',
      layout: 'landscape',
      margins: { top: 50, bottom: 50, left: 72, right: 72 },
    })

    // Set response headers
    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader(
      'Content-Disposition',
      `attachment; filename=certificate-${certificate.certificateNumber}.pdf`
    )

    // Pipe PDF to response
    doc.pipe(res)

    // Design the certificate
    const pageWidth = doc.page.width
    const pageHeight = doc.page.height

    // Background border
    doc
      .rect(30, 30, pageWidth - 60, pageHeight - 60)
      .lineWidth(3)
      .stroke('#4F46E5')

    doc
      .rect(40, 40, pageWidth - 80, pageHeight - 80)
      .lineWidth(1)
      .stroke('#4F46E5')

    // Title
    doc
      .fontSize(48)
      .font('Helvetica-Bold')
      .fillColor('#4F46E5')
      .text('Certificate of Completion', 0, 120, {
        align: 'center',
        width: pageWidth,
      })

    // Subtitle
    doc
      .fontSize(24)
      .font('Helvetica')
      .fillColor('#1F2937')
      .text('Vibenengineer Certified!', 0, 190, {
        align: 'center',
        width: pageWidth,
      })

    // Divider
    doc
      .moveTo(pageWidth / 2 - 150, 240)
      .lineTo(pageWidth / 2 + 150, 240)
      .lineWidth(2)
      .stroke('#4F46E5')

    // "This certifies that" text
    doc
      .fontSize(16)
      .font('Helvetica')
      .fillColor('#6B7280')
      .text('This is to certify that', 0, 270, {
        align: 'center',
        width: pageWidth,
      })

    // Student name
    const fullName = `${certificate.user.firstName} ${certificate.user.lastName}`
    doc
      .fontSize(32)
      .font('Helvetica-Bold')
      .fillColor('#1F2937')
      .text(fullName, 0, 310, {
        align: 'center',
        width: pageWidth,
      })

    // Completion text
    doc
      .fontSize(16)
      .font('Helvetica')
      .fillColor('#6B7280')
      .text('has successfully completed all modules of the', 0, 370, {
        align: 'center',
        width: pageWidth,
      })

    // Course name
    doc
      .fontSize(24)
      .font('Helvetica-Bold')
      .fillColor('#4F46E5')
      .text('Vibe LMS Training Program', 0, 405, {
        align: 'center',
        width: pageWidth,
      })

    // Date
    const issueDate = new Date(certificate.issuedAt).toLocaleDateString(
      'en-US',
      {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }
    )

    doc
      .fontSize(14)
      .font('Helvetica')
      .fillColor('#6B7280')
      .text(`Issued on: ${issueDate}`, 0, 470, {
        align: 'center',
        width: pageWidth,
      })

    // Certificate number
    doc
      .fontSize(12)
      .font('Helvetica')
      .fillColor('#9CA3AF')
      .text(`Certificate No: ${certificate.certificateNumber}`, 0, 500, {
        align: 'center',
        width: pageWidth,
      })

    // Finalize PDF
    doc.end()
  } catch (error) {
    console.error('Error downloading certificate:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to download certificate',
    })
  }
}

/**
 * Get user's certificate by ID (for admin/testing)
 * @route GET /api/users/:userId/certificate
 */
export const getUserCertificate = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params

    const certificate = await certificateService.getOrCreateCertificate(userId)

    if (!certificate) {
      res.status(404).json({
        success: false,
        message:
          'Certificate not available. User must complete all modules first.',
      })
      return
    }

    res.json({
      success: true,
      data: certificate,
    })
  } catch (error) {
    console.error('Error fetching user certificate:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to fetch certificate',
    })
  }
}
