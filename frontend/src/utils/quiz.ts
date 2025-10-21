import { api } from './api'
import type {
  Quiz,
  QuizSubmissionResult,
  QuizAttempt,
  UserAnswer,
} from '../types'

interface ApiResponse<T> {
  success: boolean
  data: T
}

/**
 * Fetch quiz questions for a module
 */
export const getModuleQuiz = async (moduleId: string): Promise<Quiz> => {
  const response = await api.get<ApiResponse<Quiz>>(`/modules/${moduleId}/quiz`)
  return response.data
}

/**
 * Submit quiz answers
 */
export const submitQuiz = async (
  moduleId: string,
  answers: UserAnswer[]
): Promise<QuizSubmissionResult> => {
  const response = await api.post<ApiResponse<QuizSubmissionResult>>(
    `/modules/${moduleId}/quiz/submit`,
    { answers }
  )
  return response.data
}

/**
 * Get user's quiz attempts for a module
 */
export const getQuizAttempts = async (
  moduleId: string
): Promise<QuizAttempt[]> => {
  const response = await api.get<ApiResponse<QuizAttempt[]>>(
    `/modules/${moduleId}/quiz/attempts`
  )
  return response.data
}
