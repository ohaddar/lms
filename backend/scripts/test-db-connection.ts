import { PrismaClient } from "../src/generated/prisma";
import dotenv from "dotenv";

dotenv.config();

const prisma = new PrismaClient();

async function testDatabaseConnection() {
  console.log("Testing database connection...\n");

  try {
    // Test connection
    await prisma.$connect();
    console.log("✅ Successfully connected to database");

    // Execute a simple query
    await prisma.$queryRaw`SELECT 1`;
    console.log("✅ Database query executed successfully");

    // Check if database is accessible
    const result =
      await prisma.$queryRaw`SELECT current_database(), current_user, version()`;
    console.log("\n📊 Database Information:");
    console.log(result);

    console.log("\n✅ Database connection test completed successfully!");
  } catch (error) {
    console.error("\n❌ Database connection failed:");
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

testDatabaseConnection();
