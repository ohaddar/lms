export interface QuizAnswer {
  id: string
  answerText: string
  order: number
}

export interface QuizQuestion {
  id: string
  questionText: string
  order: number
  answers: QuizAnswer[]
}

export interface Quiz {
  moduleId: string
  moduleTitle: string
  questions: QuizQuestion[]
}

export interface UserAnswer {
  questionId: string
  answerId: string
}

export interface AnswerDetail {
  questionId: string
  answerId: string
  isCorrect: boolean
  correctAnswerId?: string
}

export interface QuizSubmissionResult {
  attemptId: string
  score: number
  correctAnswers: number
  totalQuestions: number
  passed: boolean
  answerDetails: AnswerDetail[]
  message: string
}

export interface QuizAttempt {
  id: string
  score: number
  passed: boolean
  attemptedAt: string
}
