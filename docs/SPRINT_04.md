# Sprint 4: Progressive Unlocking Logic

## Objective

Implement module access control and progression tracking

---

## Deliverables

- Module access control logic
- User progress tracking in database
- Module locking/unlocking mechanism
- Congratulations screen (final)
- Progress persistence

---

## Acceptance Criteria

- Module 1 accessible on login
- Module 2 locked until Quiz 1 validated
- Module 3 locked until Quiz 2 validated
- Locked modules display appropriate messaging
- Congratulations screen shown after Quiz 3 completion
- User progress saved and restored on login

---

## Task Breakdown

### Task 1: Access Control Logic

- Create module access control service
- Implement logic to check module accessibility
- Module 1: always accessible after login
- Module 2: accessible only if Quiz 1 validated
- Module 3: accessible only if Quiz 2 validated
- Return access status for each module

### Task 2: Progress Tracking Schema

- Update UserModuleProgress model
- Add isUnlocked field
- Add completedAt timestamp
- Add quizPassed field
- Run database migration

### Task 3: Module Unlocking API

- Create GET /api/users/:userId/progress endpoint
- Return list of accessible modules
- Return list of locked modules
- Implement unlocking logic after quiz validation
- Update module access when quiz is passed

### Task 4: Quiz Completion Hook

- Modify quiz submission endpoint
- On quiz pass, unlock next module
- Update UserModuleProgress for current module (status: Done)
- Update UserModuleProgress for next module (isUnlocked: true)
- Check if all modules completed

### Task 5: Locked Module UI

- Create locked module indicator component
- Display lock icon for inaccessible modules
- Show unlock requirement message
- Disable navigation to locked modules
- Style locked modules differently

### Task 6: Module Access Middleware

- Create middleware to check module access
- Prevent access to locked modules via URL manipulation
- Redirect to accessible module if access denied
- Return appropriate error messages

### Task 7: Congratulations Screen

- Create congratulations page component
- Display "Bravo, tu es maintenant Vibenengineer Certified!" message
- Add celebration graphics
- Trigger display after Quiz 3 completion
- Add navigation to view completed modules

### Task 8: Progress Persistence

- Store user progress in database
- Retrieve progress on login
- Restore module access states
- Restore module completion statuses
- Handle session persistence across page refresh

### Task 9: Unit Testing

- Write unit tests for access control logic
- Write unit tests for unlocking mechanism
- Write unit tests for progress tracking
- Write unit tests for congratulations screen trigger
- Write unit tests for locked module UI
- Ensure unit test coverage ≥80%
