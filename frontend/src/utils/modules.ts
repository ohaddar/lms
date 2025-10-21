import { api } from './api'
import type { Module, ModuleWithProgress, ModuleStatus } from '../types'

interface ApiResponse<T> {
  success: boolean
  data: T
}

/**
 * Get all modules
 */
export const getAllModules = async (): Promise<Module[]> => {
  const response = await api.get<ApiResponse<Module[]>>('/modules')
  return response.data
}

/**
 * Get a single module by ID
 */
export const getModuleById = async (id: string): Promise<Module> => {
  const response = await api.get<ApiResponse<Module>>(`/modules/${id}`)
  return response.data
}

/**
 * Get current user's modules with progress
 */
export const getMyModules = async (): Promise<ModuleWithProgress[]> => {
  const response = await api.get<ApiResponse<ModuleWithProgress[]>>(
    '/modules/my/modules'
  )
  return response.data
}

/**
 * Update current user's module progress
 */
export const updateMyModuleProgress = async (
  moduleId: string,
  status: ModuleStatus
): Promise<void> => {
  await api.put(`/modules/my/modules/${moduleId}/progress`, { status })
}

/**
 * Get user's modules with progress (admin/instructor)
 */
export const getUserModules = async (
  userId: string
): Promise<ModuleWithProgress[]> => {
  const response = await api.get<ApiResponse<ModuleWithProgress[]>>(
    `/modules/users/${userId}/modules`
  )
  return response.data
}

/**
 * Update user's module progress (admin/instructor)
 */
export const updateUserModuleProgress = async (
  userId: string,
  moduleId: string,
  status: ModuleStatus
): Promise<void> => {
  await api.put(`/modules/users/${userId}/modules/${moduleId}/progress`, {
    status,
  })
}
