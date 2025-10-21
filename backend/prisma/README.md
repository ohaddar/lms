# Database Setup Guide

This directory contains the Prisma schema and database-related files for the Vibe LMS backend.

## Prerequisites

- PostgreSQL 14+ installed and running
- Node.js 18+ installed

## Quick Start

### 1. Configure Database Connection

Copy the `.env.example` file to `.env` and update the `DATABASE_URL`:

```bash
DATABASE_URL="postgresql://username:password@localhost:5432/vibe_lms?schema=public"
```

### 2. Create Database

Create the database in PostgreSQL:

```bash
createdb vibe_lms
```

Or using psql:

```sql
CREATE DATABASE vibe_lms;
```

### 3. Generate Prisma Client

```bash
npm run db:generate
```

### 4. Run Migrations

```bash
npm run db:migrate
```

### 5. Test Database Connection

```bash
npm run db:test
```

## Available Scripts

| Script                    | Description                                    |
| ------------------------- | ---------------------------------------------- |
| `npm run db:generate`     | Generate Prisma Client from schema             |
| `npm run db:migrate`      | Run database migrations (development)          |
| `npm run db:migrate:prod` | Deploy migrations to production                |
| `npm run db:push`         | Push schema changes without creating migration |
| `npm run db:studio`       | Open Prisma Studio (GUI for database)          |
| `npm run db:seed`         | Seed database with initial data                |
| `npm run db:reset`        | Reset database and rerun migrations            |
| `npm run db:test`         | Test database connection                       |

## Database Schema

The current schema includes:

- **User**: User accounts with roles (ADMIN, INSTRUCTOR, STUDENT)

### User Model

```prisma
model User {
  id        String   @id @default(uuid())
  email     String   @unique
  password  String
  firstName String
  lastName  String
  role      UserRole @default(STUDENT)
  isActive  Boolean  @default(true)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## Workflow

### Adding New Models

1. Edit `schema.prisma`
2. Run `npm run db:migrate` to create and apply migration
3. The Prisma Client will be automatically regenerated

### Making Schema Changes

1. Update `schema.prisma`
2. Run `npm run db:migrate` and provide a migration name
3. Review the generated migration file in `prisma/migrations/`
4. Apply the migration

### Seeding Data

1. Edit `prisma/seed.ts`
2. Run `npm run db:seed`

## Troubleshooting

### Connection Issues

If you can't connect to the database:

1. Verify PostgreSQL is running:

   ```bash
   pg_isready
   ```

2. Check your DATABASE_URL in `.env`

3. Ensure the database exists:

   ```bash
   psql -l
   ```

4. Test connection manually:
   ```bash
   psql "postgresql://username:password@localhost:5432/vibe_lms"
   ```

### Migration Issues

If migrations fail:

1. Check migration status:

   ```bash
   npx prisma migrate status
   ```

2. Reset database (⚠️ destroys all data):
   ```bash
   npm run db:reset
   ```

## Production Deployment

1. Set `DATABASE_URL` environment variable
2. Run migrations:
   ```bash
   npm run db:migrate:prod
   ```
3. Optionally seed data:
   ```bash
   npm run db:seed
   ```

## Learn More

- [Prisma Documentation](https://www.prisma.io/docs)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
