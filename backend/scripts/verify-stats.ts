import { PrismaClient } from '../src/generated/prisma'

const prisma = new PrismaClient()

async function verifyStats() {
  const alice = await prisma.userModuleProgress.findMany({
    where: { user: { email: 'alice@vibe-lms.com' } },
    include: { module: { select: { title: true, order: true } } },
    orderBy: { module: { order: 'asc' } },
  })

  console.log('\n📊 Module Progress for alice@vibe-lms.com:\n')
  alice.forEach(p =>
    console.log(
      `#${p.module.order}: Status=${p.status}, QuizPassed=${p.quizPassed}`
    )
  )

  const completed = alice.filter(
    p => p.status === 'COMPLETED' && p.quizPassed
  ).length
  const totalMinutes = completed * 100
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60
  const hoursLearned =
    hours > 0
      ? `${hours}h${minutes > 0 ? minutes + 'min' : ''}`
      : `${minutes}min`

  console.log(`\n✅ Statistics:`)
  console.log(`   Modules Completed: ${completed}`)
  console.log(`   Hours Learned: ${hoursLearned}`)
  console.log('')

  await prisma.$disconnect()
}

verifyStats()
