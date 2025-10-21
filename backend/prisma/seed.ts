import { PrismaClient } from '../src/generated/prisma'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

const SALT_ROUNDS = 10

async function main() {
  console.log('🌱 Starting database seeding...\n')

  try {
    // Clear existing data (optional - for development)
    await prisma.userModuleProgress.deleteMany({})
    await prisma.user.deleteMany({})
    await prisma.module.deleteMany({})
    console.log('📦 Cleared existing data')

    // Create 3 modules
    const modules = [
      {
        title: 'AI Foundations: Introduction',
        videoUrl: 'https://www.youtube.com/watch?v=IccjZDV93lw',
        order: 1,
      },
      {
        title: 'AI Foundations: Tool Calling',
        videoUrl: 'https://www.youtube.com/watch?v=byR5YVesMeg',
        order: 2,
      },
      {
        title: 'AI Foundations: Hallucinations',
        videoUrl: 'https://www.youtube.com/watch?v=JJDAaxxhF74',
        order: 3,
      },
    ]

    for (const moduleData of modules) {
      const module = await prisma.module.create({
        data: moduleData,
      })
      console.log(`✅ Created module: ${module.title} (Order: ${module.order})`)
    }

    // Create 3 student users
    const users = [
      {
        email: 'alice@vibe-lms.com',
        password: await bcrypt.hash('alice123', SALT_ROUNDS),
        firstName: 'Alice',
        lastName: 'Johnson',
      },
      {
        email: 'bob@vibe-lms.com',
        password: await bcrypt.hash('bob123', SALT_ROUNDS),
        firstName: 'Bob',
        lastName: 'Smith',
      },
      {
        email: 'student@vibe-lms.com',
        password: await bcrypt.hash('student123', SALT_ROUNDS),
        firstName: 'Jane',
        lastName: 'Student',
      },
    ]

    for (const userData of users) {
      const user = await prisma.user.create({
        data: userData,
      })
      console.log(`✅ Created user: ${user.email}`)
    }

    // Create initial module progress for the student user
    const student = await prisma.user.findUnique({
      where: { email: 'student@vibe-lms.com' },
    })
    const allModules = await prisma.module.findMany({
      orderBy: { order: 'asc' },
    })

    if (student && allModules.length > 0) {
      // Student is currently on module 1
      await prisma.userModuleProgress.create({
        data: {
          userId: student.id,
          moduleId: allModules[0].id,
          status: 'IN_PROGRESS',
          startedAt: new Date(),
        },
      })
      console.log(`✅ Created progress for student: Module 1 (In Progress)`)
    }

    console.log('\n✅ Database seeding completed successfully!')
    console.log('\n📊 Seeded data:')
    console.log(`   - ${allModules.length} modules`)
    console.log('   - 3 student users')
    console.log('\n📝 Test credentials:')
    console.log('   Alice: alice@vibe-lms.com / alice123')
    console.log('   Bob: bob@vibe-lms.com / bob123')
    console.log('   Student: student@vibe-lms.com / student123')
  } catch (error) {
    console.error('❌ Error during seeding:', error)
    throw error
  }
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
