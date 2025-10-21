export interface Certificate {
  id: string
  userId: string
  certificateNumber: string
  issuedAt: string
  createdAt: string
  updatedAt: string
  user: {
    firstName: string
    lastName: string
    email: string
  }
}

export interface CertificateResponse {
  success: boolean
  data: Certificate
  message?: string
}
