import { describe, it, expect } from 'vitest'
import { render, screen } from '@/test/test-utils'
import Home from '../Home'

describe('Home Page', () => {
  it('should render the welcome message', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /welcome to vibe lms/i,
    })
    expect(heading).toBeInTheDocument()
  })

  it('should render the tagline', () => {
    render(<Home />)

    const tagline = screen.getByText(/your learning management system/i)
    expect(tagline).toBeInTheDocument()
  })

  it('should render action buttons', () => {
    render(<Home />)

    const getStartedButton = screen.getByRole('button', {
      name: /get started/i,
    })
    const learnMoreButton = screen.getByRole('button', { name: /learn more/i })

    expect(getStartedButton).toBeInTheDocument()
    expect(learnMoreButton).toBeInTheDocument()
  })

  it('should have proper styling on buttons', () => {
    render(<Home />)

    const getStartedButton = screen.getByRole('button', {
      name: /get started/i,
    })

    expect(getStartedButton).toHaveClass('bg-indigo-600')
    expect(getStartedButton).toHaveClass('text-white')
  })
})
