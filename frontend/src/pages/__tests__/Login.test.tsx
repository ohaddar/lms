import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Login from '../Login'
import { AuthProvider } from '../../contexts'
import * as authUtils from '../../utils/auth'

// Mock the auth utils
vi.mock('../../utils/auth', () => ({
  loginUser: vi.fn(),
  logoutUser: vi.fn(),
  getCurrentUser: vi.fn(),
}))

// Mock useNavigate
const mockNavigate = vi.fn()
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  }
})

describe('Login Page', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    ;(authUtils.getCurrentUser as any).mockRejectedValue(
      new Error('Not authenticated')
    )
  })

  const renderLogin = () => {
    return render(
      <BrowserRouter>
        <AuthProvider>
          <Login />
        </AuthProvider>
      </BrowserRouter>
    )
  }

  it('should render login form', () => {
    renderLogin()

    expect(screen.getByText('Welcome to Vibe LMS')).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument()
  })

  it('should display validation error for missing credentials', async () => {
    renderLogin()

    const submitButton = screen.getByRole('button', { name: /sign in/i })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText('Email is required')).toBeInTheDocument()
    })
  })

  it('should display validation error for empty password', async () => {
    renderLogin()

    const emailInput = screen.getByLabelText(/email/i)
    const submitButton = screen.getByRole('button', { name: /sign in/i })

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText('Password is required')).toBeInTheDocument()
    })
  })

  it('should display validation error for password less than 5 characters', async () => {
    renderLogin()

    const emailInput = screen.getByLabelText(/email/i)
    const passwordInput = screen.getByLabelText(/password/i)
    const submitButton = screen.getByRole('button', { name: /sign in/i })

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(passwordInput, { target: { value: '1234' } })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(
        screen.getByText('Password must be at least 5 characters')
      ).toBeInTheDocument()
    })
  })

  it('should clear error messages when user types', async () => {
    renderLogin()

    const emailInput = screen.getByLabelText(/email/i)
    const submitButton = screen.getByRole('button', { name: /sign in/i })

    // Trigger validation error
    fireEvent.click(submitButton)
    await waitFor(() => {
      expect(screen.getByText('Email is required')).toBeInTheDocument()
    })

    // Type in input - error should clear
    fireEvent.change(emailInput, { target: { value: 't' } })
    expect(screen.queryByText('Email is required')).not.toBeInTheDocument()
  })

  it('should call login function with correct credentials on valid submit', async () => {
    const mockUser = {
      id: '1',
      email: 'test@example.com',
      firstName: 'Test',
      lastName: 'User',
    }

    ;(authUtils.loginUser as any).mockResolvedValue(mockUser)

    renderLogin()

    const emailInput = screen.getByLabelText(/email/i)
    const passwordInput = screen.getByLabelText(/password/i)
    const submitButton = screen.getByRole('button', { name: /sign in/i })

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(passwordInput, { target: { value: 'password123' } })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(authUtils.loginUser).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password123',
      })
    })

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/')
    })
  })

  it('should display error message on login failure', async () => {
    const errorMessage = 'Invalid credentials'
    ;(authUtils.loginUser as any).mockRejectedValue(new Error(errorMessage))

    renderLogin()

    const emailInput = screen.getByLabelText(/email/i)
    const passwordInput = screen.getByLabelText(/password/i)
    const submitButton = screen.getByRole('button', { name: /sign in/i })

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(passwordInput, { target: { value: 'wrongpassword' } })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText(/error occurred/i)).toBeInTheDocument()
    })
  })

  it('should disable form inputs and show loading state during submission', async () => {
    ;(authUtils.loginUser as any).mockImplementation(
      () => new Promise(resolve => setTimeout(resolve, 100))
    )

    renderLogin()

    const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement
    const passwordInput = screen.getByLabelText(/password/i) as HTMLInputElement
    const submitButton = screen.getByRole('button', { name: /sign in/i })

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(passwordInput, { target: { value: 'password123' } })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText('Signing in...')).toBeInTheDocument()
    })

    await waitFor(() => {
      expect(emailInput.disabled).toBe(true)
      expect(passwordInput.disabled).toBe(true)
    })
  })

  it('should display test credentials information', () => {
    renderLogin()

    expect(screen.getByText(/alice@vibe-lms.com/i)).toBeInTheDocument()
    expect(screen.getByText(/bob@vibe-lms.com/i)).toBeInTheDocument()
    expect(screen.getByText(/student@vibe-lms.com/i)).toBeInTheDocument()
  })
})
