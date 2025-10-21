import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import Quiz from '../Quiz'
import * as quizUtils from '../../utils/quiz'

// Mock quiz utilities
vi.mock('../../utils/quiz')

const mockQuizData = {
  moduleId: 'module-123',
  moduleTitle: 'Test Module',
  questions: [
    {
      id: 'q1',
      questionText: 'What is 2+2?',
      order: 1,
      answers: [
        { id: 'a1', answerText: '3', order: 1 },
        { id: 'a2', answerText: '4', order: 2 },
        { id: 'a3', answerText: '5', order: 3 },
        { id: 'a4', answerText: '6', order: 4 },
      ],
    },
    {
      id: 'q2',
      questionText: 'What is 3+3?',
      order: 2,
      answers: [
        { id: 'a5', answerText: '5', order: 1 },
        { id: 'a6', answerText: '6', order: 2 },
        { id: 'a7', answerText: '7', order: 3 },
        { id: 'a8', answerText: '8', order: 4 },
      ],
    },
    {
      id: 'q3',
      questionText: 'What is 4+4?',
      order: 3,
      answers: [
        { id: 'a9', answerText: '6', order: 1 },
        { id: 'a10', answerText: '7', order: 2 },
        { id: 'a11', answerText: '8', order: 3 },
        { id: 'a12', answerText: '9', order: 4 },
      ],
    },
  ],
}

const mockSubmissionResultPassed = {
  attemptId: 'attempt-123',
  score: 100,
  correctAnswers: 3,
  totalQuestions: 3,
  passed: true,
  answerDetails: [
    { questionId: 'q1', answerId: 'a2', isCorrect: true, correctAnswerId: 'a2' },
    { questionId: 'q2', answerId: 'a6', isCorrect: true, correctAnswerId: 'a6' },
    { questionId: 'q3', answerId: 'a11', isCorrect: true, correctAnswerId: 'a11' },
  ],
  message: 'Félicitations! Module terminé.',
}

const mockSubmissionResultFailed = {
  attemptId: 'attempt-124',
  score: 33,
  correctAnswers: 1,
  totalQuestions: 3,
  passed: false,
  answerDetails: [
    { questionId: 'q1', answerId: 'a2', isCorrect: true, correctAnswerId: 'a2' },
    { questionId: 'q2', answerId: 'a5', isCorrect: false, correctAnswerId: 'a6' },
    { questionId: 'q3', answerId: 'a9', isCorrect: false, correctAnswerId: 'a11' },
  ],
  message: 'Veuillez réessayer',
}

describe('Quiz Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should render loading state initially', () => {
    vi.mocked(quizUtils.getModuleQuiz).mockImplementation(
      () => new Promise(() => {}) // Never resolves
    )

    const { container } = render(<Quiz moduleId="module-123" />)

    // Check for loading spinner
    expect(container.querySelector('.animate-spin')).toBeInTheDocument()
  })

  it('should display quiz questions after loading', async () => {
    vi.mocked(quizUtils.getModuleQuiz).mockResolvedValue(mockQuizData)

    render(<Quiz moduleId="module-123" />)

    await waitFor(() => {
      expect(screen.getByText('Test Module - Quiz')).toBeInTheDocument()
    })

    expect(screen.getByText(/What is 2\+2\?/)).toBeInTheDocument()
    expect(screen.getByText(/What is 3\+3\?/)).toBeInTheDocument()
    expect(screen.getByText(/What is 4\+4\?/)).toBeInTheDocument()
  })

  it('should display all answer options', async () => {
    vi.mocked(quizUtils.getModuleQuiz).mockResolvedValue(mockQuizData)

    render(<Quiz moduleId="module-123" />)

    await waitFor(() => {
      expect(screen.getByText('4')).toBeInTheDocument()
    })

    // Check first question's answers
    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.getByText('4')).toBeInTheDocument()
  })

  it('should allow selecting answers', async () => {
    vi.mocked(quizUtils.getModuleQuiz).mockResolvedValue(mockQuizData)

    render(<Quiz moduleId="module-123" />)

    await waitFor(() => {
      expect(screen.getByText('Test Module - Quiz')).toBeInTheDocument()
    })

    const radioButtons = screen.getAllByRole('radio')
    
    // Select an answer for the first question
    fireEvent.click(radioButtons[1]) // Select '4' for first question
    
    expect(radioButtons[1]).toBeChecked()
  })

  it('should keep submit button disabled when not all questions are answered', async () => {
    vi.mocked(quizUtils.getModuleQuiz).mockResolvedValue(mockQuizData)

    render(<Quiz moduleId="module-123" />)

    await waitFor(() => {
      expect(screen.getByText('Test Module - Quiz')).toBeInTheDocument()
    })

    const radioButtons = screen.getAllByRole('radio')
    
    // Select only one answer (out of 3 questions)
    fireEvent.click(radioButtons[1])

    const submitButton = screen.getByRole('button', { name: /Submit Quiz/i })
    
    // Button should remain disabled since not all questions are answered
    expect(submitButton).toBeDisabled()
    
    // Select second question
    fireEvent.click(radioButtons[5])
    
    // Still disabled
    expect(submitButton).toBeDisabled()
  })

  it('should submit quiz and show success results', async () => {
    vi.mocked(quizUtils.getModuleQuiz).mockResolvedValue(mockQuizData)
    vi.mocked(quizUtils.submitQuiz).mockResolvedValue(mockSubmissionResultPassed)

    const onQuizComplete = vi.fn()

    render(<Quiz moduleId="module-123" onQuizComplete={onQuizComplete} />)

    await waitFor(() => {
      expect(screen.getByText('Test Module - Quiz')).toBeInTheDocument()
    })

    const radioButtons = screen.getAllByRole('radio')
    
    // Answer all questions
    fireEvent.click(radioButtons[1]) // Q1: Answer '4'
    fireEvent.click(radioButtons[5]) // Q2: Answer '6'
    fireEvent.click(radioButtons[10]) // Q3: Answer '8'

    const submitButton = screen.getByRole('button', { name: /Submit Quiz/i })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText('Quiz Results')).toBeInTheDocument()
    })

    expect(screen.getByText('100%')).toBeInTheDocument()
    expect(screen.getByText('Félicitations! Module terminé.')).toBeInTheDocument()
    expect(screen.getByText('3 out of 3 questions correct')).toBeInTheDocument()
    expect(onQuizComplete).toHaveBeenCalledWith(true)
  })

  it('should submit quiz and show failure results with retry button', async () => {
    vi.mocked(quizUtils.getModuleQuiz).mockResolvedValue(mockQuizData)
    vi.mocked(quizUtils.submitQuiz).mockResolvedValue(mockSubmissionResultFailed)

    const onQuizComplete = vi.fn()

    render(<Quiz moduleId="module-123" onQuizComplete={onQuizComplete} />)

    await waitFor(() => {
      expect(screen.getByText('Test Module - Quiz')).toBeInTheDocument()
    })

    const radioButtons = screen.getAllByRole('radio')
    
    // Answer all questions (some incorrectly)
    fireEvent.click(radioButtons[1]) // Q1: Answer '4' (correct)
    fireEvent.click(radioButtons[4]) // Q2: Answer '5' (incorrect)
    fireEvent.click(radioButtons[8]) // Q3: Answer '6' (incorrect)

    const submitButton = screen.getByRole('button', { name: /Submit Quiz/i })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText('Quiz Results')).toBeInTheDocument()
    })

    expect(screen.getByText('33%')).toBeInTheDocument()
    expect(screen.getByText('Veuillez réessayer')).toBeInTheDocument()
    expect(screen.getByText('1 out of 3 questions correct')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Retry Quiz/i })).toBeInTheDocument()
    expect(onQuizComplete).toHaveBeenCalledWith(false)
  })

  it('should reset quiz when retry button is clicked', async () => {
    vi.mocked(quizUtils.getModuleQuiz).mockResolvedValue(mockQuizData)
    vi.mocked(quizUtils.submitQuiz).mockResolvedValue(mockSubmissionResultFailed)

    render(<Quiz moduleId="module-123" />)

    await waitFor(() => {
      expect(screen.getByText('Test Module - Quiz')).toBeInTheDocument()
    })

    const radioButtons = screen.getAllByRole('radio')
    
    // Answer all questions
    fireEvent.click(radioButtons[1])
    fireEvent.click(radioButtons[4])
    fireEvent.click(radioButtons[8])

    const submitButton = screen.getByRole('button', { name: /Submit Quiz/i })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText('Quiz Results')).toBeInTheDocument()
    })

    const retryButton = screen.getByRole('button', { name: /Retry Quiz/i })
    fireEvent.click(retryButton)

    // Should show quiz form again
    await waitFor(() => {
      expect(screen.getByText('Test Module - Quiz')).toBeInTheDocument()
      expect(screen.queryByText('Quiz Results')).not.toBeInTheDocument()
    })
  })

  it('should handle quiz loading error', async () => {
    vi.mocked(quizUtils.getModuleQuiz).mockRejectedValue(new Error('Network error'))

    render(<Quiz moduleId="module-123" />)

    await waitFor(() => {
      expect(screen.getByText(/Failed to load quiz/i)).toBeInTheDocument()
    })

    expect(screen.getByRole('button', { name: /Retry/i })).toBeInTheDocument()
  })

  it('should handle quiz submission error', async () => {
    vi.mocked(quizUtils.getModuleQuiz).mockResolvedValue(mockQuizData)
    vi.mocked(quizUtils.submitQuiz).mockRejectedValue(new Error('Submission error'))

    render(<Quiz moduleId="module-123" />)

    await waitFor(() => {
      expect(screen.getByText('Test Module - Quiz')).toBeInTheDocument()
    })

    const radioButtons = screen.getAllByRole('radio')
    
    // Answer all questions
    fireEvent.click(radioButtons[1])
    fireEvent.click(radioButtons[5])
    fireEvent.click(radioButtons[10])

    const submitButton = screen.getByRole('button', { name: /Submit Quiz/i })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText(/Failed to submit quiz/i)).toBeInTheDocument()
    })
  })

  it('should disable submit button when not all questions are answered', async () => {
    vi.mocked(quizUtils.getModuleQuiz).mockResolvedValue(mockQuizData)

    render(<Quiz moduleId="module-123" />)

    await waitFor(() => {
      expect(screen.getByText('Test Module - Quiz')).toBeInTheDocument()
    })

    const submitButton = screen.getByRole('button', { name: /Submit Quiz/i })
    
    // Button should be disabled initially
    expect(submitButton).toBeDisabled()

    const radioButtons = screen.getAllByRole('radio')
    
    // Answer only 2 out of 3 questions
    fireEvent.click(radioButtons[1])
    fireEvent.click(radioButtons[5])

    // Should still be disabled
    expect(submitButton).toBeDisabled()

    // Answer the third question
    fireEvent.click(radioButtons[10])

    // Now it should be enabled
    expect(submitButton).not.toBeDisabled()
  })

  it('should show correct and incorrect answers in results', async () => {
    vi.mocked(quizUtils.getModuleQuiz).mockResolvedValue(mockQuizData)
    vi.mocked(quizUtils.submitQuiz).mockResolvedValue(mockSubmissionResultFailed)

    render(<Quiz moduleId="module-123" />)

    await waitFor(() => {
      expect(screen.getByText('Test Module - Quiz')).toBeInTheDocument()
    })

    const radioButtons = screen.getAllByRole('radio')
    fireEvent.click(radioButtons[1])
    fireEvent.click(radioButtons[4])
    fireEvent.click(radioButtons[8])

    const submitButton = screen.getByRole('button', { name: /Submit Quiz/i })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText('Quiz Results')).toBeInTheDocument()
    })

    // Check for correct answer indicators
    expect(screen.getAllByText(/✓ Correct/i).length).toBeGreaterThan(0)
    
    // Check for incorrect answer indicators
    expect(screen.getAllByText(/✗ Your answer/i).length).toBeGreaterThan(0)
  })
})

