const { PrismaClient } = require('../src/generated/prisma');

async function main() {
  const prisma = new PrismaClient();
  try {
    await prisma.$connect();
    const rows = await prisma.$queryRawUnsafe(
      "SELECT coalesce(to_regclass('public.users')::text,'') as users, coalesce(to_regclass('public.modules')::text,'') as modules, coalesce(to_regclass('public.user_module_progress')::text,'') as ump"
    );
    console.log(rows[0]);
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
