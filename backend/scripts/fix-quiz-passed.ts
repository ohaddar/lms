import { PrismaClient } from '../src/generated/prisma'

const prisma = new PrismaClient()

async function fixQuizPassedStatus() {
  console.log('🔧 Fixing quiz_passed status for completed modules...\n')

  // Get all modules that are COMPLETED but quizPassed is false
  const modulesToFix = await prisma.userModuleProgress.findMany({
    where: {
      status: 'COMPLETED',
      quizPassed: false,
    },
    include: {
      user: { select: { email: true } },
      module: { select: { title: true, order: true } },
    },
  })

  console.log(`Found ${modulesToFix.length} modules to fix:\n`)

  for (const progress of modulesToFix) {
    // Check if user has actually passed the quiz for this module
    const passedQuiz = await prisma.userQuizAttempt.findFirst({
      where: {
        userId: progress.userId,
        moduleId: progress.moduleId,
        passed: true,
      },
    })

    if (passedQuiz) {
      // Update the quizPassed flag to true
      await prisma.userModuleProgress.update({
        where: { id: progress.id },
        data: { quizPassed: true },
      })

      console.log(
        `✅ Fixed: ${progress.user.email} - Module #${progress.module.order}: ${progress.module.title}`
      )
    } else {
      console.log(
        `⚠️  Skipped: ${progress.user.email} - Module #${progress.module.order}: ${progress.module.title} (No passing quiz found)`
      )
    }
  }

  console.log('\n✨ Done!')
  await prisma.$disconnect()
}

fixQuizPassedStatus().catch(error => {
  console.error('Error:', error)
  process.exit(1)
})
