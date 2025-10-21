import { describe, it, expect } from '@jest/globals'
import { generateToken, verifyToken, JwtPayload } from '../jwt'

describe('JWT Utils', () => {
  const mockPayload: JwtPayload = {
    userId: '123',
    email: 'test@example.com',
    role: 'STUDENT',
  }

  describe('generateToken', () => {
    it('should generate a JWT token', () => {
      const token = generateToken(mockPayload)

      expect(token).toBeDefined()
      expect(typeof token).toBe('string')
      expect(token.split('.')).toHaveLength(3) // JWT has 3 parts
    })
  })

  describe('verifyToken', () => {
    it('should verify and decode a valid token', () => {
      const token = generateToken(mockPayload)
      const decoded = verifyToken(token)

      expect(decoded.userId).toBe(mockPayload.userId)
      expect(decoded.email).toBe(mockPayload.email)
      expect(decoded.role).toBe(mockPayload.role)
    })

    it('should throw error for invalid token', () => {
      const invalidToken = 'invalid.token.here'

      expect(() => verifyToken(invalidToken)).toThrow()
    })

    it('should throw error for tampered token', () => {
      const token = generateToken(mockPayload)
      const tamperedToken = token + 'tampered'

      expect(() => verifyToken(tamperedToken)).toThrow()
    })
  })
})
