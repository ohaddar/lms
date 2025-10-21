import { PrismaClient } from '../src/generated/prisma'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

const SALT_ROUNDS = 10

async function main() {
  console.log('🌱 Starting database seeding...\n')

  try {
    // Clear existing data (optional - for development)
    await prisma.userQuizResponse.deleteMany({})
    await prisma.userQuizAttempt.deleteMany({})
    await prisma.answer.deleteMany({})
    await prisma.question.deleteMany({})
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

    const createdModules = []
    for (const moduleData of modules) {
      const module = await prisma.module.create({
        data: moduleData,
      })
      createdModules.push(module)
      console.log(`✅ Created module: ${module.title} (Order: ${module.order})`)
    }

    // Create quiz questions and answers for each module
    const quizData = [
      {
        // Module 1: AI Foundations: Introduction
        moduleIndex: 0,
        questions: [
          {
            questionText: 'What is Artificial Intelligence primarily concerned with?',
            order: 1,
            answers: [
              { answerText: 'Creating intelligent machines that can simulate human thinking', isCorrect: true, order: 1 },
              { answerText: 'Building faster computers', isCorrect: false, order: 2 },
              { answerText: 'Designing user interfaces', isCorrect: false, order: 3 },
              { answerText: 'Managing databases', isCorrect: false, order: 4 },
            ],
          },
          {
            questionText: 'Which of the following is an example of AI application?',
            order: 2,
            answers: [
              { answerText: 'Virtual assistants like Siri or Alexa', isCorrect: true, order: 1 },
              { answerText: 'Spreadsheet software', isCorrect: false, order: 2 },
              { answerText: 'Text editors', isCorrect: false, order: 3 },
              { answerText: 'Web browsers', isCorrect: false, order: 4 },
            ],
          },
          {
            questionText: 'What distinguishes narrow AI from general AI?',
            order: 3,
            answers: [
              { answerText: 'Narrow AI is designed for specific tasks while general AI can perform any intellectual task', isCorrect: true, order: 1 },
              { answerText: 'Narrow AI is faster than general AI', isCorrect: false, order: 2 },
              { answerText: 'Narrow AI uses less memory', isCorrect: false, order: 3 },
              { answerText: 'Narrow AI is cheaper to implement', isCorrect: false, order: 4 },
            ],
          },
        ],
      },
      {
        // Module 2: AI Foundations: Tool Calling
        moduleIndex: 1,
        questions: [
          {
            questionText: 'What is tool calling in the context of AI?',
            order: 1,
            answers: [
              { answerText: 'The ability of AI to invoke external functions or APIs to perform tasks', isCorrect: true, order: 1 },
              { answerText: 'Making phone calls through AI', isCorrect: false, order: 2 },
              { answerText: 'Training AI models', isCorrect: false, order: 3 },
              { answerText: 'Debugging AI code', isCorrect: false, order: 4 },
            ],
          },
          {
            questionText: 'What is a key benefit of tool calling for AI systems?',
            order: 2,
            answers: [
              { answerText: 'It extends AI capabilities beyond text generation to interact with external systems', isCorrect: true, order: 1 },
              { answerText: 'It makes AI responses faster', isCorrect: false, order: 2 },
              { answerText: 'It reduces token usage', isCorrect: false, order: 3 },
              { answerText: 'It improves grammar', isCorrect: false, order: 4 },
            ],
          },
          {
            questionText: 'What is required for effective tool calling?',
            order: 3,
            answers: [
              { answerText: 'Structured function definitions with clear parameters and descriptions', isCorrect: true, order: 1 },
              { answerText: 'Faster internet connection', isCorrect: false, order: 2 },
              { answerText: 'More GPU power', isCorrect: false, order: 3 },
              { answerText: 'Larger context windows', isCorrect: false, order: 4 },
            ],
          },
        ],
      },
      {
        // Module 3: AI Foundations: Hallucinations
        moduleIndex: 2,
        questions: [
          {
            questionText: 'What are AI hallucinations?',
            order: 1,
            answers: [
              { answerText: 'When AI generates confident but incorrect or fabricated information', isCorrect: true, order: 1 },
              { answerText: 'When AI becomes self-aware', isCorrect: false, order: 2 },
              { answerText: 'When AI refuses to answer', isCorrect: false, order: 3 },
              { answerText: 'When AI runs too slowly', isCorrect: false, order: 4 },
            ],
          },
          {
            questionText: 'What is a primary cause of hallucinations in AI models?',
            order: 2,
            answers: [
              { answerText: 'Pattern matching from training data leading to plausible but false outputs', isCorrect: true, order: 1 },
              { answerText: 'Too much electricity', isCorrect: false, order: 2 },
              { answerText: 'User input errors', isCorrect: false, order: 3 },
              { answerText: 'Slow internet connection', isCorrect: false, order: 4 },
            ],
          },
          {
            questionText: 'How can hallucinations be mitigated?',
            order: 3,
            answers: [
              { answerText: 'Use retrieval-augmented generation and fact-checking mechanisms', isCorrect: true, order: 1 },
              { answerText: 'Increase model temperature', isCorrect: false, order: 2 },
              { answerText: 'Use shorter prompts', isCorrect: false, order: 3 },
              { answerText: 'Disable safety features', isCorrect: false, order: 4 },
            ],
          },
        ],
      },
    ]

    for (const moduleQuiz of quizData) {
      const module = createdModules[moduleQuiz.moduleIndex]
      for (const questionData of moduleQuiz.questions) {
        const question = await prisma.question.create({
          data: {
            moduleId: module.id,
            questionText: questionData.questionText,
            order: questionData.order,
          },
        })

        for (const answerData of questionData.answers) {
          await prisma.answer.create({
            data: {
              questionId: question.id,
              answerText: answerData.answerText,
              isCorrect: answerData.isCorrect,
              order: answerData.order,
            },
          })
        }
      }
      console.log(`✅ Created quiz for module: ${module.title} (3 questions, 12 answers)`)
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
    console.log('   - 9 quiz questions (3 per module)')
    console.log('   - 36 quiz answers (4 per question)')
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
