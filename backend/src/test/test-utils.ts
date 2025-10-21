import { Request, Response } from 'express'

/**
 * Create a mock Express Request object
 */
export const mockRequest = (
  options: Partial<Request> = {}
): Partial<Request> => {
  return {
    body: {},
    params: {},
    query: {},
    headers: {},
    ...options,
  }
}

/**
 * Create a mock Express Response object
 */
export const mockResponse = (): Partial<Response> => {
  const res: Partial<Response> = {}
  res.status = jest.fn().mockReturnValue(res)
  res.json = jest.fn().mockReturnValue(res)
  res.send = jest.fn().mockReturnValue(res)
  return res
}

/**
 * Create a mock Express next function
 */
export const mockNext = jest.fn()

/**
 * Utility to wait for async operations
 */
export const waitFor = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms))
}
