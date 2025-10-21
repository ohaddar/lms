import { PrismaClient } from '../generated/prisma'

// Singleton pattern for Prisma Client
const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log:
      process.env.NODE_ENV === 'development'
        ? ['query', 'error', 'warn']
        : ['error'],
  })

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}

// Test database connection
export async function connectDatabase(): Promise<void> {
  try {
    await prisma.$connect()
    console.log('✓ Database connected successfully')
  } catch (error) {
    console.error('✗ Database connection failed:', error)
    throw error
  }
}

// Graceful shutdown
export async function disconnectDatabase(): Promise<void> {
  try {
    await prisma.$disconnect()
    console.log('✓ Database disconnected successfully')
  } catch (error) {
    console.error('✗ Database disconnection failed:', error)
    throw error
  }
}
