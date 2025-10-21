import { Request, Response } from 'express'
import { PrismaClient } from '../generated/prisma'

const prisma = new PrismaClient()

/**
 * Get quiz questions for a specific module
 * GET /api/modules/:moduleId/quiz
 */
export const getModuleQuiz = async (req: Request, res: Response): Promise<void> => {
  try {
    const { moduleId } = req.params

    // Verify module exists
    const module = await prisma.module.findUnique({
      where: { id: moduleId },
    })

    if (!module) {
      res.status(404).json({
        success: false,
        message: 'Module not found',
      })
      return
    }

    // Get questions with their answers
    const questions = await prisma.question.findMany({
      where: { moduleId },
      orderBy: { order: 'asc' },
      include: {
        answers: {
          orderBy: { order: 'asc' },
          select: {
            id: true,
            answerText: true,
            order: true,
            // Don't include isCorrect in the response
          },
        },
      },
    })

    res.status(200).json({
      success: true,
      data: {
        moduleId,
        moduleTitle: module.title,
        questions: questions.map(q => ({
          id: q.id,
          questionText: q.questionText,
          order: q.order,
          answers: q.answers,
        })),
      },
    })
  } catch (error) {
    console.error('Error fetching quiz:', error)
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    })
  }
}

/**
 * Submit quiz answers and get results
 * POST /api/modules/:moduleId/quiz/submit
 * Body: { answers: { questionId: string, answerId: string }[] }
 */
export const submitQuiz = async (req: Request, res: Response): Promise<void> => {
  try {
    const { moduleId } = req.params
    const { answers } = req.body
    const userId = req.user?.userId

    if (!userId) {
      res.status(401).json({
        success: false,
        message: 'Unauthorized',
      })
      return
    }

    // Validate request body
    if (!answers || !Array.isArray(answers)) {
      res.status(400).json({
        success: false,
        message: 'Invalid request body. Expected answers array.',
      })
      return
    }

    // Verify module exists
    const module = await prisma.module.findUnique({
      where: { id: moduleId },
    })

    if (!module) {
      res.status(404).json({
        success: false,
        message: 'Module not found',
      })
      return
    }

    // Get all questions for this module
    const questions = await prisma.question.findMany({
      where: { moduleId },
      include: {
        answers: true,
      },
    })

    if (questions.length === 0) {
      res.status(404).json({
        success: false,
        message: 'No quiz questions found for this module',
      })
      return
    }

    // Validate that all questions are answered
    if (answers.length !== questions.length) {
      res.status(400).json({
        success: false,
        message: `Expected ${questions.length} answers, got ${answers.length}`,
      })
      return
    }

    // Calculate score
    let correctAnswers = 0
    const answerDetails: Array<{
      questionId: string
      answerId: string
      isCorrect: boolean
      correctAnswerId?: string
    }> = []

    for (const userAnswer of answers) {
      const question = questions.find(q => q.id === userAnswer.questionId)
      
      if (!question) {
        res.status(400).json({
          success: false,
          message: `Invalid question ID: ${userAnswer.questionId}`,
        })
        return
      }

      const selectedAnswer = question.answers.find(a => a.id === userAnswer.answerId)
      const correctAnswer = question.answers.find(a => a.isCorrect)

      if (!selectedAnswer) {
        res.status(400).json({
          success: false,
          message: `Invalid answer ID: ${userAnswer.answerId}`,
        })
        return
      }

      const isCorrect = selectedAnswer.isCorrect

      if (isCorrect) {
        correctAnswers++
      }

      answerDetails.push({
        questionId: userAnswer.questionId,
        answerId: userAnswer.answerId,
        isCorrect,
        correctAnswerId: correctAnswer?.id,
      })
    }

    const score = Math.round((correctAnswers / questions.length) * 100)
    const passed = correctAnswers === questions.length // All answers must be correct to pass

    // Create quiz attempt record
    const quizAttempt = await prisma.userQuizAttempt.create({
      data: {
        userId,
        moduleId,
        score,
        passed,
        responses: {
          create: answers.map(answer => ({
            answerId: answer.answerId,
          })),
        },
      },
      include: {
        responses: true,
      },
    })

    // If passed, update module progress to COMPLETED
    if (passed) {
      await prisma.userModuleProgress.upsert({
        where: {
          userId_moduleId: {
            userId,
            moduleId,
          },
        },
        update: {
          status: 'COMPLETED',
          completedAt: new Date(),
        },
        create: {
          userId,
          moduleId,
          status: 'COMPLETED',
          startedAt: new Date(),
          completedAt: new Date(),
        },
      })
    }

    res.status(200).json({
      success: true,
      data: {
        attemptId: quizAttempt.id,
        score,
        correctAnswers,
        totalQuestions: questions.length,
        passed,
        answerDetails,
        message: passed 
          ? 'Félicitations! Module terminé.' 
          : 'Veuillez réessayer',
      },
    })
  } catch (error) {
    console.error('Error submitting quiz:', error)
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    })
  }
}

/**
 * Get user's quiz attempts for a module
 * GET /api/modules/:moduleId/quiz/attempts
 */
export const getQuizAttempts = async (req: Request, res: Response): Promise<void> => {
  try {
    const { moduleId } = req.params
    const userId = req.user?.userId

    if (!userId) {
      res.status(401).json({
        success: false,
        message: 'Unauthorized',
      })
      return
    }

    const attempts = await prisma.userQuizAttempt.findMany({
      where: {
        userId,
        moduleId,
      },
      orderBy: {
        attemptedAt: 'desc',
      },
      select: {
        id: true,
        score: true,
        passed: true,
        attemptedAt: true,
      },
    })

    res.status(200).json({
      success: true,
      data: attempts,
    })
  } catch (error) {
    console.error('Error fetching quiz attempts:', error)
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    })
  }
}

