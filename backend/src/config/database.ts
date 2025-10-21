import { PrismaClient } from '@prisma/client'
import { exec } from 'child_process'
import util from 'util'
import path from 'path'

const execAsync = util.promisify(exec)

// Lightweight singleton PrismaClient aligned with Prisma best practices
const globalForPrisma = global as unknown as { prisma?: PrismaClient }

export const prisma: PrismaClient =
  globalForPrisma.prisma ??
  new PrismaClient({
    // Do not log queries; keep only errors (and warnings in dev)
    log: process.env.NODE_ENV === 'development' ? ['warn', 'error'] : ['error'],
  })

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}

export async function connectDatabase(): Promise<void> {
  await prisma.$connect()
  console.log('✓ Database connected')

  // Idempotently apply any pending migrations on startup (skip in tests)
  if (process.env.NODE_ENV !== 'test') {
    try {
      const backendRoot = path.resolve(__dirname, '../../')
      console.log('↻ Applying database migrations (prisma migrate deploy) ...')
      const { stdout, stderr } = await execAsync('npx prisma migrate deploy', {
        cwd: backendRoot,
        env: process.env,
      })
      if (stdout) process.stdout.write(stdout)
      if (stderr) process.stderr.write(stderr)
      console.log('✓ Migrations up to date')
    } catch (err) {
      console.error('✗ Failed to apply migrations on startup')
      throw err
    }
  }

  // Seed via prisma/seed.ts if users or modules are missing
  try {
    const [userCount, moduleCount] = await Promise.all([
      prisma.user.count(),
      prisma.module.count(),
    ])
    if (userCount === 0 || moduleCount === 0) {
      console.log('🌱 Seeding database using prisma/seed.ts ...')
      const backendRoot = path.resolve(__dirname, '../../')
      const { stdout, stderr } = await execAsync('npm run -s db:seed', {
        cwd: backendRoot,
        env: process.env,
      })
      if (stdout) process.stdout.write(stdout)
      if (stderr) process.stderr.write(stderr)
      console.log('✓ Seeding completed')
    }
  } catch (err) {
    console.error('✗ Failed during auto-seed check/run')
    throw err
  }
}

export async function disconnectDatabase(): Promise<void> {
  await prisma.$disconnect()
  console.log('✓ Database disconnected')
}
