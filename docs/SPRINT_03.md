# Sprint 3: Quiz System

## Objective

Implement quiz functionality with validation logic

---

## Deliverables

- Quiz database schema (questions, answers, user responses)
- Quiz UI component (3 QCM questions)
- Quiz submission and scoring logic
- Retry mechanism
- Success/failure feedback

---

## Acceptance Criteria

- Each module has 3 QCM questions
- User can select answers and submit quiz
- Correct answers validated against database
- Pass: Module marked as "Done"
- Fail: "Veuillez réessayer" message displayed
- User can retake failed quizzes

---

## Task Breakdown

### Task 1: Quiz Database Schema

- Create Question model in Prisma schema
- Define question fields (id, moduleId, questionText, order)
- Create Answer model in Prisma schema
- Define answer fields (id, questionId, answerText, isCorrect)
- Create UserQuizAttempt model to track attempts
- Run database migration
- Verify schema in PostgreSQL

### Task 2: Quiz Data Seeding

- Create seed script for quiz questions
- Add 3 questions per module (9 total questions)
- Add 4 answer options per question
- Mark correct answers
- Run seed script and verify data

### Task 3: Quiz API Endpoints

- Create GET /api/modules/:moduleId/quiz endpoint
- Create POST /api/modules/:moduleId/quiz/submit endpoint
- Implement quiz retrieval logic
- Implement answer validation logic
- Implement scoring logic

### Task 4: Quiz Validation Logic

- Create quiz validation service
- Compare user answers with correct answers
- Calculate quiz score
- Determine pass/fail based on score
- Update module status to "Done" on pass

### Task 5: Quiz UI Component

- Create quiz question component
- Display question text
- Display 4 answer options as radio buttons
- Handle answer selection
- Create quiz form with 3 questions

### Task 6: Quiz Submission

- Implement quiz form submission handler
- Send user answers to backend
- Handle loading state during submission
- Receive and process validation result

### Task 7: Success/Failure Feedback

- Display success message on pass
- Update module status to "Done" visually
- Display "Veuillez réessayer" message on fail
- Show retry button on failure
- Handle retry logic (reset quiz)

### Task 8: User Quiz Progress

- Track quiz attempts in database
- Store user answers
- Allow unlimited retry attempts
- Display previous attempts (optional)

### Task 9: Unit Testing

- Write unit tests for quiz API endpoints
- Write unit tests for validation logic
- Write unit tests for scoring logic
- Write unit tests for quiz UI components
- Write unit tests for submission handling
- Ensure unit test coverage ≥80%
