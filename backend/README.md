# Vibe LMS - Backend API

## Tech Stack

- **Runtime**: Node.js with TypeScript
- **Framework**: Express 5
- **Database**: PostgreSQL with Prisma ORM
- **Development**: Nodemon + ts-node
- **Code Quality**: ESLint, Prettier

## Project Structure

```
src/
├── routes/         # API route definitions
├── controllers/    # Request handlers
├── services/       # Business logic
├── middleware/     # Custom middleware (auth, error handling, etc.)
├── types/          # TypeScript type definitions
├── config/         # Configuration files
└── utils/          # Utility functions
```

## Path Aliases

The project is configured with path aliases for cleaner imports:

- `@/*` - src directory
- `@/routes/*` - routes directory
- `@/controllers/*` - controllers directory
- `@/services/*` - services directory
- `@/middleware/*` - middleware directory
- `@/types/*` - types directory
- `@/config/*` - config directory
- `@/utils/*` - utils directory

### Example Usage

```typescript
// Instead of: import { errorHandler } from '../../middleware/errorHandler';
import { errorHandler } from "@/middleware";
```

## Available Scripts

### `npm run dev` or `npm run dev:api`

Starts the development server with hot reload at http://localhost:5000

### `npm run build`

Compiles TypeScript to JavaScript. Output is in the `dist` directory.

### `npm start`

Runs the compiled production build.

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file based on `.env.example`:

   ```bash
   cp .env.example .env
   ```

3. Set up the database:

   ```bash
   # Create PostgreSQL database
   createdb vibe_lms

   # Generate Prisma Client
   npm run db:generate

   # Run database migrations
   npm run db:migrate

   # Test database connection
   npm run db:test
   ```

4. Start the development server:

   ```bash
   npm run dev:api
   ```

5. The API will be available at http://localhost:5000

## API Endpoints

### Base URL: `http://localhost:5000`

- `GET /` - Welcome message
- `GET /api/v1/health` - Health check endpoint

### Health Check Response

```json
{
  "success": true,
  "message": "API is running smoothly",
  "data": {
    "status": "healthy",
    "timestamp": "2025-10-21T08:00:00.000Z",
    "uptime": 123.456
  }
}
```

## Error Handling

The API includes comprehensive error handling middleware:

- **404 Handler**: Catches all undefined routes
- **Global Error Handler**: Catches and formats all errors
- **Development Mode**: Includes stack traces in error responses

## Environment Variables

See `.env.example` for all available configuration options:

- `PORT` - Server port (default: 5000)
- `NODE_ENV` - Environment (development/production)
- `DATABASE_URL` - PostgreSQL connection string
- `API_PREFIX` - API route prefix (default: /api/v1)

## Database

This project uses PostgreSQL with Prisma ORM. For detailed database setup and management instructions, see [prisma/README.md](./prisma/README.md).

### Quick Database Commands

| Command               | Description                   |
| --------------------- | ----------------------------- |
| `npm run db:generate` | Generate Prisma Client        |
| `npm run db:migrate`  | Run migrations (dev)          |
| `npm run db:push`     | Push schema without migration |
| `npm run db:studio`   | Open Prisma Studio GUI        |
| `npm run db:seed`     | Seed database                 |
| `npm run db:reset`    | Reset database                |
| `npm run db:test`     | Test connection               |

## Features

- ✅ Express 5 with TypeScript
- ✅ PostgreSQL database with Prisma ORM
- ✅ Database migrations and seeding
- ✅ Hot reload with Nodemon
- ✅ Path aliases configured
- ✅ Global error handling
- ✅ Request logging middleware
- ✅ CORS enabled
- ✅ Health check endpoint
- ✅ Modern folder structure
- ✅ Environment configuration
- ✅ Graceful shutdown with database cleanup
