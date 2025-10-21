import { Request, Response, NextFunction } from 'express'
import { verifyToken } from '../utils/jwt'

/**
 * Middleware to verify JWT token and attach user to request
 */
export function authenticate(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  try {
    const token = req.cookies.token

    if (!token) {
      res.status(401).json({ error: 'Authentication required' })
      return
    }

    const decoded = verifyToken(token)
    req.user = decoded
    next()
  } catch (error) {
    res.status(401).json({ error: 'Invalid or expired token' })
  }
}
