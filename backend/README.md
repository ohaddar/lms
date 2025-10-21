# Vibe LMS - Backend API

## Tech Stack

- **Runtime**: Node.js with TypeScript
- **Framework**: Express 5
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

3. Start the development server:

   ```bash
   npm run dev:api
   ```

4. The API will be available at http://localhost:5000

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
- `DATABASE_URL` - Database connection string (to be configured)
- `JWT_SECRET` - JWT signing secret (to be configured)

## Features

- ✅ Express 5 with TypeScript
- ✅ Hot reload with Nodemon
- ✅ Path aliases configured
- ✅ Global error handling
- ✅ Request logging middleware
- ✅ CORS enabled
- ✅ Health check endpoint
- ✅ Modern folder structure
- ✅ Environment configuration
