import { createContext, useState, useEffect, type ReactNode } from 'react'
import type { User, LoginCredentials, AuthContextType } from '../types'
import { loginUser, logoutUser, getCurrentUser } from '../utils'

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Check authentication status on mount
  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const currentUser = await getCurrentUser()
      setUser(currentUser)
    } catch (error) {
      console.error('Authentication check failed:', error)
      setUser(null)
    } finally {
      setIsLoading(false)
    }
  }

  const login = async (credentials: LoginCredentials) => {
    const user = await loginUser(credentials)
    setUser(user)
  }

  const logout = async () => {
    await logoutUser()
    setUser(null)
  }

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    logout,
    checkAuth,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// Re-export the auth hook for convenience and backwards compatibility in imports
export { useAuth } from '../hooks/useAuth'
