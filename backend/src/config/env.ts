import dotenv from 'dotenv'

dotenv.config()

interface Config {
  port: number
  nodeEnv: string
  apiPrefix: string
  database: {
    url: string
  }
  jwt: {
    secret: string
    expiresIn: string
  }
}

export const config: Config = {
  port: Number(process.env.PORT) || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  apiPrefix: process.env.API_PREFIX || '/api/v1',
  database: {
    url: process.env.DATABASE_URL || '',
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'dev-secret-key-change-in-production',
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  },
}
