export enum ModuleStatus {
  NOT_STARTED = 'NOT_STARTED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
}

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
  startedAt: string | null
  completedAt: string | null
  createdAt: string
  updatedAt: string
}

export interface ModuleWithProgress extends Module {
  progress: UserModuleProgress | null
}

