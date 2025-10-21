// Export all type definitions from this file for easier imports
export * from './auth'
export * from './module'

// Re-export specific types to ensure they're available
export type { Module, ModuleWithProgress, UserModuleProgress } from './module'
export { ModuleStatus } from './module'
export type { User, LoginCredentials, AuthContextType } from './auth'
