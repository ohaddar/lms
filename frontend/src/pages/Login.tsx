import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts'
import { ApiError } from '../utils'

export default function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    general: '',
  })
  const [isLoading, setIsLoading] = useState(false)

  const validateEmail = (email: string): string => {
    if (!email) {
      return 'Email is required'
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return 'Invalid email format'
    }
    return ''
  }

  const validatePassword = (password: string): string => {
    if (!password) {
      return 'Password is required'
    }
    if (password.length < 5) {
      return 'Password must be at least 5 characters'
    }
    return ''
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error for this field when user types
    setErrors(prev => ({ ...prev, [name]: '', general: '' }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Validate form
    const emailError = validateEmail(formData.email)
    const passwordError = validatePassword(formData.password)

    if (emailError || passwordError) {
      setErrors({
        email: emailError,
        password: passwordError,
        general: '',
      })
      return
    }

    setIsLoading(true)
    setErrors({ email: '', password: '', general: '' })

    try {
      await login(formData)
      navigate('/') // Redirect to home after successful login
    } catch (error) {
      if (error instanceof ApiError) {
        setErrors(prev => ({ ...prev, general: error.message }))
      } else {
        setErrors(prev => ({
          ...prev,
          general: 'An unexpected error occurred',
        }))
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50/30 to-primary-50/20 px-4 py-12">
      <div className="max-w-md w-full">
        {/* Logo & Header */}
        <div className="text-center mb-8 animate-slide-down">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl shadow-large mb-6">
            <span className="text-white font-bold text-4xl">V</span>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent mb-3">
            Welcome to Vibe LMS
          </h1>
          <p className="text-gray-600 text-lg">
            Sign in to start your learning journey
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-large p-8 animate-scale-in border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Sign In</h2>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* General Error */}
            {errors.general && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-sm text-red-600">{errors.general}</p>
              </div>
            )}

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.email
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-500 bg-red-50'
                    : 'border-gray-300 focus:border-primary-500 focus:ring-primary-500'
                } focus:outline-none focus:ring-2 transition-all duration-200 bg-gray-50 focus:bg-white`}
                placeholder="your.email@example.com"
                disabled={isLoading}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.password
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-500 bg-red-50'
                    : 'border-gray-300 focus:border-primary-500 focus:ring-primary-500'
                } focus:outline-none focus:ring-2 transition-all duration-200 bg-gray-50 focus:bg-white`}
                placeholder="Enter your password"
                disabled={isLoading}
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3.5 px-4 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 shadow-medium hover:shadow-large disabled:cursor-not-allowed transform hover:scale-[1.02] disabled:transform-none"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Signing in...
                </span>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Test Credentials Info */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm font-semibold text-gray-700 text-center mb-4">
              Test Credentials
            </p>
            <div className="space-y-3">
              {[
                {
                  name: 'Alice',
                  email: 'alice@vibe-lms.com',
                  password: 'alice123',
                },
                { name: 'Bob', email: 'bob@vibe-lms.com', password: 'bob123' },
                {
                  name: 'Student',
                  email: 'student@vibe-lms.com',
                  password: 'student123',
                },
              ].map((cred, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-gray-50 to-blue-50/50 rounded-xl p-3 border border-gray-200"
                >
                  <p className="font-medium text-gray-900 text-sm mb-1">
                    {cred.name}
                  </p>
                  <p className="text-xs text-gray-600">
                    <span className="font-mono">{cred.email}</span>
                    <span className="mx-2 text-gray-400">/</span>
                    <span className="font-mono">{cred.password}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
