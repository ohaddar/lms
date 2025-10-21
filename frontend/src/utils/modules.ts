import { api } from './api'
import type { Module, ModuleWithProgress, ModuleStatus } from '../types'

/**
 * Get all modules
 */
export const getAllModules = async (): Promise<Module[]> => {
  const response = await api.get('/modules')
  return response.data.data
}

/**
 * Get a single module by ID
 */
export const getModuleById = async (id: string): Promise<Module> => {
  const response = await api.get(`/modules/${id}`)
  return response.data.data
}

/**
 * Get current user's modules with progress
 */
export const getMyModules = async (): Promise<ModuleWithProgress[]> => {
  const response = await api.get('/modules/my/modules')
  return response.data.data
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
  const response = await api.get(`/modules/users/${userId}/modules`)
  return response.data.data
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
