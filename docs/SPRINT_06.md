# Sprint 6: Bonus Features

## Objective

Enhance user experience with additional features

---

## Deliverables

- Global progress bar component
- Certificate generation and download functionality
- User feedback module
- Feedback data storage

---

## Acceptance Criteria

- Progress bar shows completion percentage across all modules
- Certificate PDF can be downloaded with user name and date
- Feedback prompt displayed after each module
- User feedback captured and stored in database
- Bonus features integrate seamlessly with existing UI

---

## Task Breakdown

### Task 1: Global Progress Bar Component

- Create progress bar component
- Calculate completion percentage (modules completed / total modules)
- Display progress percentage visually
- Update progress bar when module status changes
- Position progress bar on all pages

### Task 2: Progress Calculation Logic

- Create service to calculate user progress
- Count completed modules
- Calculate percentage (completed / 3 * 100)
- Create API endpoint to retrieve progress data
- Update progress in real-time

### Task 3: Certificate Data Model

- Create Certificate model in Prisma schema
- Define certificate fields (id, userId, issuedAt, certificateNumber)
- Create relationship with User model
- Run database migration
- Generate certificate on all modules completion

### Task 4: Certificate Generation

- Install PDF generation library
- Create certificate template design
- Include user name on certificate
- Include completion date on certificate
- Include "Vibenengineer Certified!" title
- Generate unique certificate number

### Task 5: Certificate Download

- Create GET /api/certificates/:userId endpoint
- Generate PDF file
- Implement download functionality
- Add download button to congratulations screen
- Handle download errors

### Task 6: User Feedback Data Model

- Create ModuleFeedback model in Prisma schema
- Define feedback fields (id, userId, moduleId, helpful, createdAt)
- Create relationship with User and Module models
- Run database migration

### Task 7: Feedback UI Component

- Create feedback prompt component
- Display "Ce module t'a-t-il aidé ?" question
- Add yes/no response buttons
- Show feedback prompt after module completion
- Handle feedback submission

### Task 8: Feedback API

- Create POST /api/modules/:moduleId/feedback endpoint
- Store user feedback in database
- Validate feedback data
- Return success confirmation
- Prevent duplicate feedback submissions

### Task 9: Progress Bar Integration

- Add progress bar to header/navigation
- Display progress on module list page
- Display progress on module detail page
- Display progress on congratulations screen
- Ensure responsive design

### Task 10: Certificate Integration

- Trigger certificate generation on Quiz 3 completion
- Display download button on congratulations screen
- Show certificate status (issued/not issued)
- Handle certificate regeneration if needed

### Task 11: Unit Testing

- Write unit tests for progress bar component
- Write unit tests for progress calculation
- Write unit tests for certificate generation
- Write unit tests for feedback submission
- Write unit tests for all API endpoints
- Ensure unit test coverage ≥80%
