// Global test setup file
import { config } from 'dotenv'

// Load test environment variables
config({ path: '.env.test' })

// Set test environment
process.env.NODE_ENV = 'test'

// Increase timeout for database operations
jest.setTimeout(10000)

// Global setup
beforeAll(() => {
  // Add any global setup here
})

// Global teardown
afterAll(() => {
  // Add any global cleanup here
})

// Reset mocks between tests
afterEach(() => {
  jest.clearAllMocks()
})
