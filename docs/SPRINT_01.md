# Sprint 1: Authentication System

## Objective

Implement user login and session management

---

## Deliverables

- User database schema (Prisma model)
- Database seeding with 3 users (encrypted passwords)
- Login page UI with form validation
- Authentication API endpoints
- Session management
- Protected route handling

---

## Acceptance Criteria

- User can login with email and password
- Email format validation enforced
- Password minimum 5 characters enforced
- Invalid credentials display error message
- Session persists on page refresh
- Unauthenticated users redirected to login
- 3 seeded users available in database
- Passwords encrypted in database

---

## Task Breakdown

### Task 1: User Database Schema

- Create User model in Prisma schema
- Define user fields (id, email, password, createdAt, updatedAt)
- Run database migration
- Verify schema in PostgreSQL

### Task 2: Password Encryption

- Install password encryption library (bcrypt)
- Create password hashing utility functions
- Create password comparison utility functions
- Write unit tests for encryption utilities

### Task 3: Database Seeding

- Create seed script for 3 users
- Hash passwords before seeding
- Define user credentials (email and password)
- Run seed script and verify data in database

### Task 4: Authentication API Endpoints

- Create POST /api/auth/login endpoint
- Implement login validation logic
- Implement password verification
- Generate and return session token
- Create POST /api/auth/logout endpoint
- Create GET /api/auth/me endpoint for session validation

### Task 5: Session Management

- Install session management library
- Configure session storage
- Implement session creation on login
- Implement session validation middleware
- Implement session destruction on logout

### Task 6: Login Page UI

- Create login form component
- Implement email input with validation
- Implement password input with validation (min 5 chars)
- Add form submission handling
- Display error messages for invalid credentials
- Add loading state during authentication

### Task 7: Protected Routes

- Create authentication middleware
- Implement route protection logic
- Redirect unauthenticated users to login
- Persist session across page refresh

### Task 8: Unit Testing

- Write unit tests for authentication endpoints
- Write unit tests for session management
- Write unit tests for validation logic
- Write unit tests for login form component
- Ensure unit test coverage ≥80%
