import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { ModuleFeedback } from '../ModuleFeedback'
import { api } from '../../utils/api'

jest.mock('../../utils/api')

describe('ModuleFeedback', () => {
  const mockModuleId = 'module-123'
  const mockOnFeedbackSubmitted = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render feedback prompt when no feedback exists', async () => {
    ;(api.get as jest.Mock).mockResolvedValue({
      data: {
        success: true,
        data: null,
      },
    })

    render(<ModuleFeedback moduleId={mockModuleId} />)

    await waitFor(() => {
      expect(screen.getByText("Ce module t'a-t-il aidé ?")).toBeInTheDocument()
    })

    expect(screen.getByText('👍 Yes')).toBeInTheDocument()
    expect(screen.getByText('👎 No')).toBeInTheDocument()
  })

  it('should submit positive feedback', async () => {
    ;(api.get as jest.Mock).mockResolvedValue({
      data: {
        success: true,
        data: null,
      },
    })
    ;(api.post as jest.Mock).mockResolvedValue({
      data: {
        success: true,
        data: {
          id: 'feedback-123',
          moduleId: mockModuleId,
          helpful: true,
        },
      },
    })

    render(
      <ModuleFeedback
        moduleId={mockModuleId}
        onFeedbackSubmitted={mockOnFeedbackSubmitted}
      />
    )

    await waitFor(() => {
      expect(screen.getByText('👍 Yes')).toBeInTheDocument()
    })

    fireEvent.click(screen.getByText('👍 Yes'))

    await waitFor(() => {
      expect(api.post).toHaveBeenCalledWith(
        `/modules/${mockModuleId}/feedback`,
        {
          helpful: true,
        }
      )
    })

    await waitFor(() => {
      expect(
        screen.getByText('✓ Thank you for your feedback!')
      ).toBeInTheDocument()
    })

    expect(mockOnFeedbackSubmitted).toHaveBeenCalled()
  })

  it('should submit negative feedback', async () => {
    ;(api.get as jest.Mock).mockResolvedValue({
      data: {
        success: true,
        data: null,
      },
    })
    ;(api.post as jest.Mock).mockResolvedValue({
      data: {
        success: true,
        data: {
          id: 'feedback-123',
          moduleId: mockModuleId,
          helpful: false,
        },
      },
    })

    render(<ModuleFeedback moduleId={mockModuleId} />)

    await waitFor(() => {
      expect(screen.getByText('👎 No')).toBeInTheDocument()
    })

    fireEvent.click(screen.getByText('👎 No'))

    await waitFor(() => {
      expect(api.post).toHaveBeenCalledWith(
        `/modules/${mockModuleId}/feedback`,
        {
          helpful: false,
        }
      )
    })

    await waitFor(() => {
      expect(
        screen.getByText('✓ Thank you for your feedback!')
      ).toBeInTheDocument()
    })
  })

  it('should display existing feedback', async () => {
    ;(api.get as jest.Mock).mockResolvedValue({
      data: {
        success: true,
        data: {
          id: 'feedback-123',
          moduleId: mockModuleId,
          helpful: true,
        },
      },
    })

    render(<ModuleFeedback moduleId={mockModuleId} />)

    await waitFor(() => {
      expect(
        screen.getByText('✓ Thank you for your feedback!')
      ).toBeInTheDocument()
    })

    expect(
      screen.getByText('You found this module helpful')
    ).toBeInTheDocument()
    expect(screen.queryByText('👍 Yes')).not.toBeInTheDocument()
  })

  it('should handle API errors', async () => {
    ;(api.get as jest.Mock).mockResolvedValue({
      data: {
        success: true,
        data: null,
      },
    })
    ;(api.post as jest.Mock).mockRejectedValue({
      response: {
        status: 500,
        data: { message: 'Server error' },
      },
    })

    render(<ModuleFeedback moduleId={mockModuleId} />)

    await waitFor(() => {
      expect(screen.getByText('👍 Yes')).toBeInTheDocument()
    })

    fireEvent.click(screen.getByText('👍 Yes'))

    await waitFor(() => {
      expect(
        screen.getByText('Failed to submit feedback. Please try again.')
      ).toBeInTheDocument()
    })
  })

  it('should handle duplicate feedback submission', async () => {
    ;(api.get as jest.Mock).mockResolvedValue({
      data: {
        success: true,
        data: null,
      },
    })
    ;(api.post as jest.Mock).mockRejectedValue({
      response: {
        status: 409,
        data: { message: 'Feedback already submitted' },
      },
    })

    render(<ModuleFeedback moduleId={mockModuleId} />)

    await waitFor(() => {
      expect(screen.getByText('👍 Yes')).toBeInTheDocument()
    })

    fireEvent.click(screen.getByText('👍 Yes'))

    await waitFor(() => {
      expect(
        screen.getByText('✓ Thank you for your feedback!')
      ).toBeInTheDocument()
    })
  })

  it('should disable buttons while submitting', async () => {
    ;(api.get as jest.Mock).mockResolvedValue({
      data: {
        success: true,
        data: null,
      },
    })
    ;(api.post as jest.Mock).mockImplementation(
      () => new Promise(resolve => setTimeout(resolve, 1000))
    )

    render(<ModuleFeedback moduleId={mockModuleId} />)

    await waitFor(() => {
      expect(screen.getByText('👍 Yes')).toBeInTheDocument()
    })

    const yesButton = screen.getByText('👍 Yes')
    const noButton = screen.getByText('👎 No')

    fireEvent.click(yesButton)

    // Buttons should be disabled while submitting
    expect(yesButton).toBeDisabled()
    expect(noButton).toBeDisabled()
  })
})
