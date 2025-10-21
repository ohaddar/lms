import express, { Application } from 'express'
import cors from 'cors'
import { config } from '@/config/env'
import routes from '@/routes'
import { errorHandler, notFoundHandler, requestLogger } from '@/middleware'

const app: Application = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(requestLogger)

// Routes
app.use(config.apiPrefix, routes)

// Welcome route
app.get('/', (_req, res) => {
  res.json({
    success: true,
    message: 'Welcome to Vibe LMS API',
    version: '1.0.0',
  })
})

// Error handling - must be after all routes
app.use(notFoundHandler)
app.use(errorHandler)

export default app
