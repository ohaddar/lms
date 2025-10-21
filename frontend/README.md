# Vibe LMS - Frontend

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Routing**: React Router v7
- **Linting**: ESLint

## Project Structure

```
src/
├── components/     # Reusable React components
├── pages/         # Page components for routing
├── hooks/         # Custom React hooks
├── utils/         # Utility functions
├── types/         # TypeScript type definitions
└── assets/        # Static assets (images, fonts, etc.)
```

## Path Aliases

The project is configured with path aliases for cleaner imports:

- `@/*` - src directory
- `@/components/*` - components directory
- `@/pages/*` - pages directory
- `@/hooks/*` - hooks directory
- `@/utils/*` - utils directory
- `@/types/*` - types directory

### Example Usage

```typescript
// Instead of: import { Home } from '../../pages/Home';
import { Home } from "@/pages";
```

## Available Scripts

### `npm run dev`

Starts the development server at http://localhost:5173

### `npm run build`

Builds the application for production. Output is in the `dist` directory.

### `npm run lint`

Runs ESLint to check code quality.

### `npm run preview`

Previews the production build locally.

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open http://localhost:5173 in your browser

## Features

- ✅ React 19 with TypeScript
- ✅ Vite for fast development
- ✅ TailwindCSS for styling
- ✅ React Router for navigation
- ✅ Path aliases configured
- ✅ ESLint for code quality
- ✅ Modern folder structure
