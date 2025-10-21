import jwt, { SignOptions } from 'jsonwebtoken'
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
  const options: SignOptions = {
    // jsonwebtoken's type for expiresIn uses a branded StringValue; cast here from env string
    expiresIn: config.jwt.expiresIn as unknown as SignOptions['expiresIn'],
  }
  return jwt.sign(payload, config.jwt.secret, options)
}

/**
 * Verify a JWT token
 * @param token - JWT token
 * @returns Decoded token payload
 */
export function verifyToken(token: string): JwtPayload {
  return jwt.verify(token, config.jwt.secret) as JwtPayload
}
