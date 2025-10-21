import jwt from 'jsonwebtoken'
import { config } from '../config'

export interface JwtPayload {
  userId: string
  email: string
  role?: string
}

/**
 * Generate a JWT token
 * @param payload - Token payload
 * @returns JWT token
 */
export function generateToken(payload: JwtPayload): string {
  return jwt.sign(payload, config.jwt.secret, {
    expiresIn: config.jwt.expiresIn,
  } as any)
}

/**
 * Verify a JWT token
 * @param token - JWT token
 * @returns Decoded token payload
 */
export function verifyToken(token: string): JwtPayload {
  return jwt.verify(token, config.jwt.secret) as JwtPayload
}
