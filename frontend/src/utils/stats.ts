import { api } from './api'

export interface UserStats {
  modulesCompleted: number
  quizzesPassed: number
  hoursLearned: string
}

export interface StatsResponse {
  success: boolean
  data: UserStats
}

export const getUserStats = async (): Promise<UserStats> => {
  const response = await api.get<StatsResponse>('/auth/stats')
  return response.data
}
