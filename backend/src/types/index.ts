export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  message?: string
  error?: string
}

export interface CustomError extends Error {
  statusCode?: number
  isOperational?: boolean
}
