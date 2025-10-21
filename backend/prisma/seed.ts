import { PrismaClient, UserRole } from '../src/generated/prisma'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

const SALT_ROUNDS = 10

async function main() {
  console.log('🌱 Starting database seeding...\n')

  try {
    // Clear existing users (optional - for development)
    await prisma.user.deleteMany({})
    console.log('📦 Cleared existing users')

    // Create 3 users with different roles
    const users = [
      {
        email: 'admin@vibe-lms.com',
        password: await bcrypt.hash('admin123', SALT_ROUNDS),
        firstName: 'Admin',
        lastName: 'User',
        role: UserRole.ADMIN,
      },
      {
        email: 'instructor@vibe-lms.com',
        password: await bcrypt.hash('instructor123', SALT_ROUNDS),
        firstName: 'John',
        lastName: 'Instructor',
        role: UserRole.INSTRUCTOR,
      },
      {
        email: 'student@vibe-lms.com',
        password: await bcrypt.hash('student123', SALT_ROUNDS),
        firstName: 'Jane',
        lastName: 'Student',
        role: UserRole.STUDENT,
      },
    ]

    for (const userData of users) {
      const user = await prisma.user.create({
        data: userData,
      })
      console.log(`✅ Created user: ${user.email} (${user.role})`)
    }

    console.log('\n✅ Database seeding completed successfully!')
    console.log('\n📝 Test credentials:')
    console.log('   Admin: admin@vibe-lms.com / admin123')
    console.log('   Instructor: instructor@vibe-lms.com / instructor123')
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
