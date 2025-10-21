import { Request, Response } from 'express'
import { ApiResponse } from '@/types'

export const getHealth = (_req: Request, res: Response) => {
  const response: ApiResponse = {
    success: true,
    message: 'API is running smoothly',
    data: {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    },
  }

  res.status(200).json(response)
}
