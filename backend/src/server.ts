import app from './app'
import { config, connectDatabase, disconnectDatabase } from '@/config'

const PORT = config.port

// Start server with database connection
async function startServer() {
  try {
    // Connect to database
    await connectDatabase()

    const server = app.listen(PORT, () => {
      console.log(`
  ╔═══════════════════════════════════════╗
  ║                                       ║
  ║   🚀 Vibe LMS API Server Running     ║
  ║                                       ║
  ║   Environment: ${config.nodeEnv.padEnd(23)}║
  ║   Port: ${String(PORT).padEnd(30)}║
  ║   API Prefix: ${config.apiPrefix.padEnd(24)}║
  ║                                       ║
  ╚═══════════════════════════════════════╝
      `)
    })

    // Graceful shutdown
    const gracefulShutdown = async () => {
      console.log('\n🛑 Shutting down gracefully...')
      server.close(async () => {
        await disconnectDatabase()
        console.log('✅ Server closed')
        process.exit(0)
      })
    }

    process.on('SIGTERM', gracefulShutdown)
    process.on('SIGINT', gracefulShutdown)

    return server
  } catch (error) {
    console.error('Failed to start server:', error)
    process.exit(1)
  }
}

startServer()

export default startServer
