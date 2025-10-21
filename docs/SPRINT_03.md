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
- Add 3 questions per module (9 total questions):

  **Module 1: AI Foundations: Introduction**
  - Q1: "What is Artificial Intelligence primarily concerned with?"
    - Creating intelligent machines that can simulate human thinking (correct)
    - Building faster computers
    - Designing user interfaces
    - Managing databases
  - Q2: "Which of the following is an example of AI application?"
    - Virtual assistants like Siri or Alexa (correct)
    - Spreadsheet software
    - Text editors
    - Web browsers
  - Q3: "What distinguishes narrow AI from general AI?"
    - Narrow AI is designed for specific tasks while general AI can perform any intellectual task (correct)
    - Narrow AI is faster than general AI
    - Narrow AI uses less memory
    - Narrow AI is cheaper to implement

  **Module 2: AI Foundations: Tool Calling**
  - Q1: "What is tool calling in the context of AI?"
    - The ability of AI to invoke external functions or APIs to perform tasks (correct)
    - Making phone calls through AI
    - Training AI models
    - Debugging AI code
  - Q2: "What is a key benefit of tool calling for AI systems?"
    - It extends AI capabilities beyond text generation to interact with external systems (correct)
    - It makes AI responses faster
    - It reduces token usage
    - It improves grammar
  - Q3: "What is required for effective tool calling?"
    - Structured function definitions with clear parameters and descriptions (correct)
    - Faster internet connection
    - More GPU power
    - Larger context windows

  **Module 3: AI Foundations: Hallucinations**
  - Q1: "What are AI hallucinations?"
    - When AI generates confident but incorrect or fabricated information (correct)
    - When AI becomes self-aware
    - When AI refuses to answer
    - When AI runs too slowly
  - Q2: "What is a primary cause of hallucinations in AI models?"
    - Pattern matching from training data leading to plausible but false outputs (correct)
    - Too much electricity
    - User input errors
    - Slow internet connection
  - Q3: "How can hallucinations be mitigated?"
    - Use retrieval-augmented generation and fact-checking mechanisms (correct)
    - Increase model temperature
    - Use shorter prompts
    - Disable safety features

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
