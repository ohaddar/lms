# Sprint 2: Module Structure & Content

## Objective

Build module data model and display system

---

## Deliverables

- Module database schema
- Module listing page
- YouTube video embedding component
- Module status display (En cours, Done)
- Module navigation

---

## Acceptance Criteria

- 3 modules displayed with titles
- YouTube videos embedded and playable
- Module status correctly displayed
- Module data persisted in database
- Users can navigate between accessible modules

---

## Task Breakdown

### Task 1: Module Database Schema

- Create Module model in Prisma schema
- Define module fields (id, title, videoUrl, order, createdAt, updatedAt)
- Create relationship between User and Module (progress tracking)
- Run database migration
- Verify schema in PostgreSQL

### Task 2: Module Seeding

- Create seed script for 3 modules
- Define module data (titles, YouTube URLs, order)
- Run seed script and verify data in database

### Task 3: Module API Endpoints

- Create GET /api/modules endpoint (list all modules)
- Create GET /api/modules/:id endpoint (single module)
- Create GET /api/users/:userId/modules endpoint (user progress)
- Implement module data retrieval logic

### Task 4: YouTube Video Component

- Create YouTube embed component
- Accept video URL as prop
- Handle video loading states
- Ensure responsive video player
- Test video playback

### Task 5: Module Status Tracking

- Create UserModuleProgress model in Prisma schema
- Define status field (En cours, Done)
- Create API endpoint to retrieve user module status
- Implement status update logic

### Task 6: Module Listing Page

- Create module list component
- Fetch and display 3 modules
- Display module titles
- Display module status for current user
- Implement loading and error states

### Task 7: Module Detail Page

- Create module detail component
- Display module title
- Embed YouTube video
- Display module status
- Add navigation to other modules

### Task 8: Module Navigation

- Implement navigation between modules
- Add "Next Module" button
- Add "Previous Module" button
- Handle navigation for accessible modules only

### Task 9: Unit Testing

- Write unit tests for module API endpoints
- Write unit tests for module components
- Write unit tests for YouTube embed component
- Write unit tests for status display logic
- Ensure unit test coverage ≥80%
