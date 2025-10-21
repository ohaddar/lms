export const ModuleStatus = {
  NOT_STARTED: 'NOT_STARTED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
} as const

export type ModuleStatus = (typeof ModuleStatus)[keyof typeof ModuleStatus]

export interface Module {
  id: string
  title: string
  videoUrl: string
  order: number
  createdAt: string
  updatedAt: string
}

export interface UserModuleProgress {
  id: string
  userId: string
  moduleId: string
  status: ModuleStatus
  isUnlocked: boolean
  quizPassed: boolean
  startedAt: string | null
  completedAt: string | null
  createdAt: string
  updatedAt: string
}

export interface ModuleWithProgress extends Module {
  progress: UserModuleProgress | null
  isAccessible: boolean
  isLocked: boolean
}
