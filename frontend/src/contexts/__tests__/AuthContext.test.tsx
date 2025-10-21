import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { AuthProvider, useAuth } from '../AuthContext'
import * as authUtils from '../../utils/auth'

// Mock the auth utils
vi.mock('../../utils/auth', () => ({
  loginUser: vi.fn(),
  logoutUser: vi.fn(),
  getCurrentUser: vi.fn(),
}))

// Test component that uses the auth context
function TestComponent() {
  const { user, isLoading, isAuthenticated, login, logout } = useAuth()

  return (
    <div>
      <div data-testid="loading">{isLoading ? 'loading' : 'loaded'}</div>
      <div data-testid="authenticated">
        {isAuthenticated ? 'authenticated' : 'not-authenticated'}
      </div>
      {user && <div data-testid="user-email">{user.email}</div>}
      <button
        onClick={() =>
          login({ email: 'test@example.com', password: 'password123' })
        }
      >
        Login
      </button>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

describe('AuthContext', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should throw error when useAuth is used outside AuthProvider', () => {
    // Suppress console.error for this test
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    expect(() => render(<TestComponent />)).toThrow(
      'useAuth must be used within an AuthProvider'
    )

    consoleSpy.mockRestore()
  })

  it('should initialize with loading state', () => {
    ;(authUtils.getCurrentUser as any).mockImplementation(
      () => new Promise(resolve => setTimeout(resolve, 100))
    )

    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    )

    expect(screen.getByTestId('loading')).toHaveTextContent('loading')
  })

  it('should set user when getCurrentUser succeeds', async () => {
    const mockUser = {
      id: '1',
      email: 'test@example.com',
      firstName: 'Test',
      lastName: 'User',
    }

    ;(authUtils.getCurrentUser as any).mockResolvedValue(mockUser)

    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    )

    await waitFor(() => {
      expect(screen.getByTestId('loading')).toHaveTextContent('loaded')
    })

    expect(screen.getByTestId('authenticated')).toHaveTextContent(
      'authenticated'
    )
    expect(screen.getByTestId('user-email')).toHaveTextContent(
      'test@example.com'
    )
  })

  it('should set user to null when getCurrentUser fails', async () => {
    ;(authUtils.getCurrentUser as any).mockRejectedValue(
      new Error('Not authenticated')
    )

    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    )

    await waitFor(() => {
      expect(screen.getByTestId('loading')).toHaveTextContent('loaded')
    })

    expect(screen.getByTestId('authenticated')).toHaveTextContent(
      'not-authenticated'
    )
  })

  it('should login user successfully', async () => {
    const mockUser = {
      id: '1',
      email: 'test@example.com',
      firstName: 'Test',
      lastName: 'User',
    }

    ;(authUtils.getCurrentUser as any).mockRejectedValue(
      new Error('Not authenticated')
    )
    ;(authUtils.loginUser as any).mockResolvedValue(mockUser)

    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    )

    await waitFor(() => {
      expect(screen.getByTestId('loading')).toHaveTextContent('loaded')
    })

    const loginButton = screen.getByText('Login')
    loginButton.click()

    await waitFor(() => {
      expect(screen.getByTestId('authenticated')).toHaveTextContent(
        'authenticated'
      )
      expect(screen.getByTestId('user-email')).toHaveTextContent(
        'test@example.com'
      )
    })
  })

  it('should logout user successfully', async () => {
    const mockUser = {
      id: '1',
      email: 'test@example.com',
      firstName: 'Test',
      lastName: 'User',
    }

    ;(authUtils.getCurrentUser as any).mockResolvedValue(mockUser)
    ;(authUtils.logoutUser as any).mockResolvedValue(undefined)

    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    )

    await waitFor(() => {
      expect(screen.getByTestId('authenticated')).toHaveTextContent(
        'authenticated'
      )
    })

    const logoutButton = screen.getByText('Logout')
    logoutButton.click()

    await waitFor(() => {
      expect(screen.getByTestId('authenticated')).toHaveTextContent(
        'not-authenticated'
      )
    })
  })
})
