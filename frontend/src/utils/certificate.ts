import { api, ApiError } from './api'
import type { Certificate, CertificateResponse } from '../types/certificate'

/**
 * Get current user's certificate (if all modules completed)
 */
export const getMyCertificate = async (): Promise<Certificate | null> => {
  try {
    const response = await api.get<CertificateResponse>('/my/certificate')
    return response.data
  } catch (error) {
    // If certificate not available (404), return null
    if (error instanceof ApiError && error.status === 404) {
      return null
    }
    throw error
  }
}

/**
 * Download current user's certificate as PDF
 */
export const downloadMyCertificate = async (): Promise<void> => {
  const API_BASE_URL =
    import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1'
  const url = `${API_BASE_URL}/my/certificate/download`

  try {
    const response = await fetch(url, {
      method: 'GET',
      credentials: 'include', // Send cookies for authentication
    })

    if (!response.ok) {
      throw new Error('Failed to download certificate')
    }

    // Get the blob from response
    const blob = await response.blob()

    // Extract filename from Content-Disposition header or use default
    const contentDisposition = response.headers.get('Content-Disposition')
    let filename = 'certificate.pdf'
    if (contentDisposition) {
      const filenameMatch = contentDisposition.match(/filename="?(.+)"?/)
      if (filenameMatch && filenameMatch[1]) {
        filename = filenameMatch[1]
      }
    }

    // Create a download link and trigger download
    const downloadUrl = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = downloadUrl
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(downloadUrl)
  } catch (error) {
    console.error('Error downloading certificate:', error)
    throw error
  }
}
