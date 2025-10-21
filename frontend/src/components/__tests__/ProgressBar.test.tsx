import { render, screen, waitFor } from '@testing-library/react'
import { ProgressBar } from '../ProgressBar'
import { api } from '../../utils/api'

jest.mock('../../utils/api')

describe('ProgressBar', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render progress bar with correct data', async () => {
    const mockProgressData = {
      totalModules: 3,
      completedModules: 2,
      percentage: 66.67,
    }

    ;(api.get as jest.Mock).mockResolvedValue({
      data: {
        success: true,
        data: mockProgressData,
      },
    })

    render(<ProgressBar />)

    await waitFor(() => {
      expect(screen.getByText('Overall Progress')).toBeInTheDocument()
    })

    expect(screen.getByText('67%')).toBeInTheDocument()
    expect(screen.getByText('2 of 3 modules completed')).toBeInTheDocument()
  })

  it('should not render when loading', () => {
    ;(api.get as jest.Mock).mockImplementation(
      () => new Promise(() => {}) // Never resolves
    )

    const { container } = render(<ProgressBar />)
    expect(container.firstChild).toBeNull()
  })

  it('should handle errors gracefully', async () => {
    ;(api.get as jest.Mock).mockRejectedValue(new Error('API Error'))

    const { container } = render(<ProgressBar />)

    await waitFor(() => {
      expect(container.firstChild).toBeNull()
    })
  })

  it('should display 100% when all modules are completed', async () => {
    const mockProgressData = {
      totalModules: 3,
      completedModules: 3,
      percentage: 100,
    }

    ;(api.get as jest.Mock).mockResolvedValue({
      data: {
        success: true,
        data: mockProgressData,
      },
    })

    render(<ProgressBar />)

    await waitFor(() => {
      expect(screen.getByText('100%')).toBeInTheDocument()
    })

    expect(screen.getByText('3 of 3 modules completed')).toBeInTheDocument()
  })

  it('should display 0% when no modules are completed', async () => {
    const mockProgressData = {
      totalModules: 3,
      completedModules: 0,
      percentage: 0,
    }

    ;(api.get as jest.Mock).mockResolvedValue({
      data: {
        success: true,
        data: mockProgressData,
      },
    })

    render(<ProgressBar />)

    await waitFor(() => {
      expect(screen.getByText('0%')).toBeInTheDocument()
    })

    expect(screen.getByText('0 of 3 modules completed')).toBeInTheDocument()
  })
})
