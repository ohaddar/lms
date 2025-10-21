import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seeding...\n");

  try {
    // Add your seed data here
    // Example:
    // const user = await prisma.user.create({
    //   data: {
    //     email: "admin@example.com",
    //     password: "hashed_password",
    //     firstName: "Admin",
    //     lastName: "User",
    //     role: "ADMIN",
    //   },
    // });

    console.log("✅ Database seeding completed successfully!");
  } catch (error) {
    console.error("❌ Error during seeding:", error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
