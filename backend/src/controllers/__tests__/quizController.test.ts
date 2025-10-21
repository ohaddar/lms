import { Request, Response } from 'express'
import { PrismaClient } from '../../generated/prisma'
import { getModuleQuiz, submitQuiz, getQuizAttempts } from '../quizController'

// Mock Prisma
jest.mock('../../generated/prisma', () => {
  const mockPrisma = {
    module: {
      findUnique: jest.fn(),
    },
    question: {
      findMany: jest.fn(),
    },
    userQuizAttempt: {
      create: jest.fn(),
      findMany: jest.fn(),
    },
    userModuleProgress: {
      upsert: jest.fn(),
    },
  }
  return {
    PrismaClient: jest.fn(() => mockPrisma),
  }
})

const prisma = new PrismaClient()

describe('Quiz Controller', () => {
  let mockReq: Partial<Request>
  let mockRes: Partial<Response>
  let jsonMock: jest.Mock
  let statusMock: jest.Mock

  beforeEach(() => {
    jsonMock = jest.fn()
    statusMock = jest.fn(() => ({ json: jsonMock })) as any

    mockReq = {
      params: {},
      body: {},
      user: { userId: 'user-123', email: 'test@example.com' },
    }

    mockRes = {
      status: statusMock,
      json: jsonMock,
    }

    jest.clearAllMocks()
  })

  describe('getModuleQuiz', () => {
    it('should return quiz questions for a valid module', async () => {
      const moduleId = 'module-123'
      mockReq.params = { moduleId }

      const mockModule = {
        id: moduleId,
        title: 'Test Module',
        videoUrl: 'https://example.com/video',
        order: 1,
      }

      const mockQuestions = [
        {
          id: 'q1',
          questionText: 'Question 1?',
          order: 1,
          answers: [
            { id: 'a1', answerText: 'Answer 1', order: 1 },
            { id: 'a2', answerText: 'Answer 2', order: 2 },
          ],
        },
      ]

      ;(prisma.module.findUnique as jest.Mock).mockResolvedValue(mockModule)
      ;(prisma.question.findMany as jest.Mock).mockResolvedValue(mockQuestions)

      await getModuleQuiz(mockReq as Request, mockRes as Response)

      expect(statusMock).toHaveBeenCalledWith(200)
      expect(jsonMock).toHaveBeenCalledWith({
        success: true,
        data: {
          moduleId,
          moduleTitle: mockModule.title,
          questions: mockQuestions.map(q => ({
            id: q.id,
            questionText: q.questionText,
            order: q.order,
            answers: q.answers,
          })),
        },
      })
    })

    it('should return 404 if module not found', async () => {
      const moduleId = 'invalid-module'
      mockReq.params = { moduleId }
      ;(prisma.module.findUnique as jest.Mock).mockResolvedValue(null)

      await getModuleQuiz(mockReq as Request, mockRes as Response)

      expect(statusMock).toHaveBeenCalledWith(404)
      expect(jsonMock).toHaveBeenCalledWith({
        success: false,
        message: 'Module not found',
      })
    })

    it('should handle errors gracefully', async () => {
      const moduleId = 'module-123'
      mockReq.params = { moduleId }
      ;(prisma.module.findUnique as jest.Mock).mockRejectedValue(
        new Error('Database error')
      )

      await getModuleQuiz(mockReq as Request, mockRes as Response)

      expect(statusMock).toHaveBeenCalledWith(500)
      expect(jsonMock).toHaveBeenCalledWith({
        success: false,
        message: 'Internal server error',
      })
    })
  })

  describe('submitQuiz', () => {
    it('should return fail message for incorrect answers', async () => {
      const moduleId = 'module-123'
      mockReq.params = { moduleId }
      mockReq.body = {
        answers: [
          { questionId: 'q1', answerId: 'a2' },
          { questionId: 'q2', answerId: 'a4' },
        ],
      }

      const mockModule = {
        id: moduleId,
        title: 'Test Module',
      }

      const mockQuestions = [
        {
          id: 'q1',
          answers: [
            { id: 'a1', isCorrect: true },
            { id: 'a2', isCorrect: false },
          ],
        },
        {
          id: 'q2',
          answers: [
            { id: 'a3', isCorrect: true },
            { id: 'a4', isCorrect: false },
          ],
        },
      ]

      const mockAttempt = {
        id: 'attempt-123',
        score: 0,
        passed: false,
        responses: [],
      }

      ;(prisma.module.findUnique as jest.Mock).mockResolvedValue(mockModule)
      ;(prisma.question.findMany as jest.Mock).mockResolvedValue(mockQuestions)
      ;(prisma.userQuizAttempt.create as jest.Mock).mockResolvedValue(
        mockAttempt
      )

      await submitQuiz(mockReq as Request, mockRes as Response)

      expect(statusMock).toHaveBeenCalledWith(200)
      expect(jsonMock).toHaveBeenCalledWith({
        success: true,
        data: expect.objectContaining({
          score: 0,
          passed: false,
          message: 'Veuillez réessayer',
        }),
      })
    })

    it('should return 401 if user not authenticated', async () => {
      mockReq.user = undefined

      await submitQuiz(mockReq as Request, mockRes as Response)

      expect(statusMock).toHaveBeenCalledWith(401)
      expect(jsonMock).toHaveBeenCalledWith({
        success: false,
        message: 'Unauthorized',
      })
    })

    it('should return 400 if answers array is invalid', async () => {
      const moduleId = 'module-123'
      mockReq.params = { moduleId }
      mockReq.body = { answers: 'invalid' }

      await submitQuiz(mockReq as Request, mockRes as Response)

      expect(statusMock).toHaveBeenCalledWith(400)
      expect(jsonMock).toHaveBeenCalledWith({
        success: false,
        message: 'Invalid request body. Expected answers array.',
      })
    })

    it('should return 400 if not all questions are answered', async () => {
      const moduleId = 'module-123'
      mockReq.params = { moduleId }
      mockReq.body = {
        answers: [{ questionId: 'q1', answerId: 'a1' }],
      }

      const mockModule = { id: moduleId, title: 'Test Module' }
      const mockQuestions = [
        { id: 'q1', answers: [] },
        { id: 'q2', answers: [] },
      ]

      ;(prisma.module.findUnique as jest.Mock).mockResolvedValue(mockModule)
      ;(prisma.question.findMany as jest.Mock).mockResolvedValue(mockQuestions)

      await submitQuiz(mockReq as Request, mockRes as Response)

      expect(statusMock).toHaveBeenCalledWith(400)
      expect(jsonMock).toHaveBeenCalledWith({
        success: false,
        message: 'Expected 2 answers, got 1',
      })
    })
  })

  describe('getQuizAttempts', () => {
    it('should return user quiz attempts', async () => {
      const moduleId = 'module-123'
      mockReq.params = { moduleId }

      const mockAttempts = [
        {
          id: 'attempt-1',
          score: 100,
          passed: true,
          attemptedAt: new Date(),
        },
        {
          id: 'attempt-2',
          score: 66,
          passed: false,
          attemptedAt: new Date(),
        },
      ]

      ;(prisma.userQuizAttempt.findMany as jest.Mock).mockResolvedValue(
        mockAttempts
      )

      await getQuizAttempts(mockReq as Request, mockRes as Response)

      expect(statusMock).toHaveBeenCalledWith(200)
      expect(jsonMock).toHaveBeenCalledWith({
        success: true,
        data: mockAttempts,
      })
    })

    it('should return 401 if user not authenticated', async () => {
      mockReq.user = undefined

      await getQuizAttempts(mockReq as Request, mockRes as Response)

      expect(statusMock).toHaveBeenCalledWith(401)
      expect(jsonMock).toHaveBeenCalledWith({
        success: false,
        message: 'Unauthorized',
      })
    })
  })
})
