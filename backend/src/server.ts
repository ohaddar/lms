import app from "./app";
import { config } from "@/config/env";

const PORT = config.port;

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
  `);
});

// Graceful shutdown
const gracefulShutdown = () => {
  console.log("\n🛑 Shutting down gracefully...");
  server.close(() => {
    console.log("✅ Server closed");
    process.exit(0);
  });
};

process.on("SIGTERM", gracefulShutdown);
process.on("SIGINT", gracefulShutdown);

export default server;
