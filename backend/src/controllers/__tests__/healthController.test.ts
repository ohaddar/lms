import { describe, it, expect, jest } from '@jest/globals'
import { getHealth } from '../healthController'
import { mockRequest, mockResponse } from '@/test/test-utils'
import { Request, Response } from 'express'

interface HealthData {
  status: string
  timestamp: string
  uptime: number
}

interface ApiResponse {
  success: boolean
  message: string
  data: HealthData
}

describe('Health Controller', () => {
  describe('getHealth', () => {
    it('should return 200 status with success response', () => {
      const req = mockRequest() as Request
      const res = mockResponse() as Response

      getHealth(req, res)

      expect(res.status).toHaveBeenCalledWith(200)
      expect(res.json).toHaveBeenCalled()
    })

    it('should return correct response structure', () => {
      const req = mockRequest() as Request
      const res = mockResponse() as Response

      getHealth(req, res)

      const jsonCall = (res.json as jest.Mock).mock.calls[0][0] as ApiResponse

      expect(jsonCall).toHaveProperty('success', true)
      expect(jsonCall).toHaveProperty('message', 'API is running smoothly')
      expect(jsonCall).toHaveProperty('data')
    })

    it('should return health status data', () => {
      const req = mockRequest() as Request
      const res = mockResponse() as Response

      getHealth(req, res)

      const jsonCall = (res.json as jest.Mock).mock.calls[0][0] as ApiResponse

      expect(jsonCall.data).toHaveProperty('status', 'healthy')
      expect(jsonCall.data).toHaveProperty('timestamp')
      expect(jsonCall.data).toHaveProperty('uptime')
    })

    it('should return valid timestamp', () => {
      const req = mockRequest() as Request
      const res = mockResponse() as Response

      getHealth(req, res)

      const jsonCall = (res.json as jest.Mock).mock.calls[0][0] as ApiResponse
      const timestamp = new Date(jsonCall.data.timestamp)

      expect(timestamp.toString()).not.toBe('Invalid Date')
    })

    it('should return numeric uptime', () => {
      const req = mockRequest() as Request
      const res = mockResponse() as Response

      getHealth(req, res)

      const jsonCall = (res.json as jest.Mock).mock.calls[0][0] as ApiResponse

      expect(typeof jsonCall.data.uptime).toBe('number')
      expect(jsonCall.data.uptime).toBeGreaterThanOrEqual(0)
    })
  })
})
