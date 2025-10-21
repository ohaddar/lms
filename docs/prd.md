# Product Requirements Document - Vibe LMS

## 1. Project Overview

### 1.1 Project Name

**Vibe LMS** - Interactive Learning Management System

### 1.2 Objective

Develop a mini interactive learning platform with 3 progressive modules, controlled progression, and quiz-based validation.

### 1.3 Target Users

Students seeking certification through a structured, self-paced learning journey.

### 1.4 Core Value Proposition

- Progressive learning path with locked content until prerequisites are met
- Interactive video-based modules with knowledge validation
- Certification upon completion of all modules

---

## 2. Technical Requirements

### 2.1 Frontend Stack

- **Build Tool**: Vite
- **Framework**: React 18+
- **Language**: TypeScript (strict mode)
- **Styling**: TailwindCSS
- **Testing**: Vitest

### 2.2 Backend Stack

- **Framework**: Express
- **Language**: TypeScript
- **ORM**: Prisma
- **Database**: PostgreSQL (local)
- **Testing**: Jest

### 2.3 Code Quality Standards

- TypeScript best practices enforcement
- Prettier for code formatting
- ESLint for linting
- No pre-commit hooks required

### 2.4 Testing Strategy

- **Scope**: Unit tests only
- **Coverage**: Minimum 80% coverage required for all sprints
- **No Integration/E2E**: Out of scope for this release

### 2.5 Infrastructure

- Local PostgreSQL database
- No external APIs required
- Responsive design (mobile-friendly)

---

## 3. Functional Requirements

### 3.1 User Authentication

#### 3.1.1 Login System

- Email/password authentication
- Form validation:
  - Email: valid format required
  - Password: minimum 5 characters
- Basic authentication mechanism
- Session persistence

#### 3.1.2 User Progress Tracking

- Backend storage of user progression
- Per-user module completion status
- Per-user quiz results

### 3.2 Learning Modules

#### 3.2.1 Module Structure

- 3 sequential modules
- Each module contains:
  - Module title
  - Embedded YouTube video
  - Quiz (3 QCM questions)
  - Status indicator

#### 3.2.2 Module Status

- **En cours** (In Progress): Default state when module is accessible
- **Done**: Set when associated quiz is validated

#### 3.2.3 Module Content

- Module 1: Introduction video
- Module 2: Intermediate video
- Module 3: Advanced video

### 3.3 Quiz System

#### 3.3.1 Quiz Format

- 3 multiple-choice questions per module
- Questions generated/defined for each module
- Single correct answer per question

#### 3.3.2 Quiz Validation

- Pass/fail logic per quiz
- Success: Module status → "Done", next module unlocked
- Failure: Display "Veuillez réessayer" message
- Unlimited retry attempts

### 3.4 Progressive Unlocking

#### 3.4.1 Access Control Logic

| Module   | Accessible When  | Condition to Unlock Next |
| -------- | ---------------- | ------------------------ |
| Module 1 | Upon login       | Quiz 1 validated         |
| Module 2 | Quiz 1 validated | Quiz 2 validated         |
| Module 3 | Quiz 2 validated | Quiz 3 validated         |

#### 3.4.2 Completion Flow

- User logs in → Module 1 accessible
- Complete Quiz 1 → Module 2 unlocked
- Complete Quiz 2 → Module 3 unlocked
- Complete Quiz 3 → Congratulations screen displayed

### 3.5 Certification Screen

#### 3.5.1 Trigger

- Displayed after successful completion of Quiz 3

#### 3.5.2 Content

- Congratulations message
- Certification title: "Vibenengineer Certified!"
- Visual celebration (emoji/graphics)

### 3.6 Bonus Features

#### 3.6.1 Global Progress Bar

- Visual indicator of overall completion
- Displayed across all module pages

#### 3.6.2 Downloadable Certificate

- PDF certificate generation
- User name and completion date
- Download functionality

#### 3.6.3 User Feedback

- Per-module feedback prompt: "Ce module t'a-t-il aidé ?"
- Simple rating or yes/no response
- Data stored for future analytics

---

## 4. Sprint Plan

### Sprint 0: Application Setup

**Objective**: Establish complete development environment and project architecture

**Deliverables**:

- Frontend scaffolding (Vite + React + TypeScript + TailwindCSS)
- Backend scaffolding (Express + TypeScript + Prisma)
- PostgreSQL database setup and connection
- Prettier and ESLint configuration
- Vitest and Jest configuration
- Project folder structure and architecture
- Development and build scripts

**Acceptance Criteria**:

- `npm run dev` starts frontend development server
- `npm run dev:api` starts backend server
- Database migrations can be run successfully
- Prettier formats code on save
- ESLint checks pass

---

### Sprint 1: Authentication System

**Objective**: Implement user login and session management

**Deliverables**:

- User database schema (Prisma model)
- Login page UI with form validation
- Authentication API endpoints
- Session management
- Protected route handling

**Acceptance Criteria**:

- User can register/login with email and password
- Email format validation enforced
- Password minimum 5 characters enforced
- Invalid credentials display error message
- Session persists on page refresh
- Unauthenticated users redirected to login

**Testing**:

- Unit test coverage ≥80%

---

### Sprint 2: Module Structure & Content

**Objective**: Build module data model and display system

**Deliverables**:

- Module database schema
- Module listing page
- YouTube video embedding component
- Module status display (En cours, Done)
- Module navigation

**Acceptance Criteria**:

- 3 modules displayed with titles
- YouTube videos embedded and playable
- Module status correctly displayed
- Module data persisted in database
- Users can navigate between accessible modules

**Testing**:

- Unit test coverage ≥80%

---

### Sprint 3: Quiz System

**Objective**: Implement quiz functionality with validation logic

**Deliverables**:

- Quiz database schema (questions, answers, user responses)
- Quiz UI component (3 QCM questions)
- Quiz submission and scoring logic
- Retry mechanism
- Success/failure feedback

**Acceptance Criteria**:

- Each module has 3 QCM questions
- User can select answers and submit quiz
- Correct answers validated against database
- Pass: Module marked as "Done"
- Fail: "Veuillez réessayer" message displayed
- User can retake failed quizzes

**Testing**:

- Unit test coverage ≥80%

---

### Sprint 4: Progressive Unlocking Logic

**Objective**: Implement module access control and progression tracking

**Deliverables**:

- Module access control logic
- User progress tracking in database
- Module locking/unlocking mechanism
- Congratulations screen (final)
- Progress persistence

**Acceptance Criteria**:

- Module 1 accessible on login
- Module 2 locked until Quiz 1 validated
- Module 3 locked until Quiz 2 validated
- Locked modules display appropriate messaging
- Congratulations screen shown after Quiz 3 completion
- User progress saved and restored on login

**Testing**:

- Unit test coverage ≥80%

---

### Sprint 5: UI/UX & Responsive Design

**Objective**: Polish user interface and ensure mobile responsiveness

**Deliverables**:

- Responsive layouts (mobile, tablet, desktop)
- Design system implementation (colors, typography, spacing)
- Error states and loading indicators
- Smooth transitions and animations
- Accessibility improvements

**Acceptance Criteria**:

- Application fully responsive on mobile devices
- Design follows "minimaliste, futur vibes" aesthetic
- All user interactions provide visual feedback
- Error messages clear and helpful
- Loading states displayed during async operations

**Testing**:

- Unit test coverage ≥80%

---

### Sprint 6: Bonus Features

**Objective**: Enhance user experience with additional features

**Deliverables**:

- Global progress bar component
- Certificate generation and download functionality
- User feedback module
- Feedback data storage

**Acceptance Criteria**:

- Progress bar shows completion percentage across all modules
- Certificate PDF can be downloaded with user name and date
- Feedback prompt displayed after each module
- User feedback captured and stored in database
- Bonus features integrate seamlessly with existing UI

**Testing**:

- Unit test coverage ≥80%

---

## 5. Design Guidelines

### 5.1 Visual Style

- Minimalist and clean interface
- Futuristic aesthetic ("future vibes")
- Consistent color palette
- Clear typography hierarchy

### 5.2 User Experience

- Intuitive navigation
- Clear feedback on all actions
- Smooth transitions between states
- Mobile-first responsive design

### 5.3 Accessibility

- Semantic HTML
- Keyboard navigation support
- Sufficient color contrast
- Screen reader compatibility

---

## 6. Success Metrics

- All 3 modules functional and accessible
- Quiz validation working correctly
- Progressive unlocking enforced
- User progression persisted across sessions
- 80%+ unit test coverage across codebase
- Mobile-responsive on common devices
- Zero critical bugs in production
