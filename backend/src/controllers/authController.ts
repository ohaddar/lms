import { Request, Response } from 'express'
import { prisma } from '@/config'
import { comparePassword } from '../utils/password'
import { generateToken } from '../utils/jwt'

/**
 * Login user with email and password
 * POST /api/auth/login
 */
export async function login(req: Request, res: Response): Promise<void> {
  try {
    const { email, password } = req.body

    // Validate input
    if (!email || !password) {
      res.status(400).json({ error: 'Email and password are required' })
      return
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      res.status(400).json({ error: 'Invalid email format' })
      return
    }

    // Validate password length
    if (password.length < 5) {
      res.status(400).json({ error: 'Password must be at least 5 characters' })
      return
    }

    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (!user) {
      res.status(401).json({ error: 'Invalid credentials' })
      return
    }

    // Check if user is active
    if (!user.isActive) {
      res.status(401).json({ error: 'Account is disabled' })
      return
    }

    // Verify password
    const isPasswordValid = await comparePassword(password, user.password)
    if (!isPasswordValid) {
      res.status(401).json({ error: 'Invalid credentials' })
      return
    }

    // Generate JWT token
    const token = generateToken({
      userId: user.id,
      email: user.email,
    })

    // Set token in HTTP-only cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    })

    // Return user data (without password)
    res.json({
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
    })
  } catch (error) {
    console.error('Login error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

/**
 * Logout user by clearing the token cookie
 * POST /api/auth/logout
 */
export async function logout(_req: Request, res: Response): Promise<void> {
  res.clearCookie('token')
  res.json({ message: 'Logged out successfully' })
}

/**
 * Get current authenticated user
 * GET /api/auth/me
 */
export async function getCurrentUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
    if (!req.user) {
      res.status(401).json({ error: 'Not authenticated' })
      return
    }

    // Fetch fresh user data from database
    const user = await prisma.user.findUnique({
      where: { id: req.user.userId },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        isActive: true,
      },
    })

    if (!user || !user.isActive) {
      res.status(401).json({ error: 'User not found or inactive' })
      return
    }

    res.json({ user })
  } catch (error) {
    console.error('Get current user error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

/**
 * Get current authenticated user statistics
 * GET /api/auth/stats
 */
export async function getUserStats(req: Request, res: Response): Promise<void> {
  try {
    if (!req.user) {
      res.status(401).json({ error: 'Not authenticated' })
      return
    }

    const userId = req.user.userId

    // Get modules completed count (status = COMPLETED AND quizPassed = true)
    const modulesCompleted = await prisma.userModuleProgress.count({
      where: {
        userId,
        status: 'COMPLETED',
        quizPassed: true,
      },
    })

    // Get quizzes passed count (distinct modules where quiz is passed)
    const passedQuizAttempts = await prisma.userQuizAttempt.findMany({
      where: {
        userId,
        passed: true,
      },
      select: {
        moduleId: true,
      },
      distinct: ['moduleId'],
    })
    const quizzesPassed = passedQuizAttempts.length

    // Calculate hours learned (1h40min = 100 minutes per completed module)
    const totalMinutes = modulesCompleted * 100
    const hours = Math.floor(totalMinutes / 60)
    const minutes = totalMinutes % 60
    const hoursLearned =
      hours > 0
        ? `${hours}h${minutes > 0 ? minutes + 'min' : ''}`
        : `${minutes}min`

    res.json({
      success: true,
      data: {
        modulesCompleted,
        quizzesPassed,
        hoursLearned,
      },
    })
  } catch (error) {
    console.error('Get user stats error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
