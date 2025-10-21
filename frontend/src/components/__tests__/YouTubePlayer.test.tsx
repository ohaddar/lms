import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { YouTubePlayer } from '../YouTubePlayer'

describe('YouTubePlayer', () => {
  it('renders YouTube iframe with correct video ID', () => {
    const videoUrl = 'https://www.youtube.com/watch?v=IccjZDV93lw'
    render(<YouTubePlayer videoUrl={videoUrl} />)

    const iframe = screen.getByTitle('YouTube video player')
    expect(iframe).toBeInTheDocument()
    expect(iframe).toHaveAttribute(
      'src',
      expect.stringContaining('IccjZDV93lw')
    )
  })

  it('handles youtu.be short URLs', () => {
    const videoUrl = 'https://youtu.be/IccjZDV93lw'
    render(<YouTubePlayer videoUrl={videoUrl} />)

    const iframe = screen.getByTitle('YouTube video player')
    expect(iframe).toBeInTheDocument()
    expect(iframe).toHaveAttribute(
      'src',
      expect.stringContaining('IccjZDV93lw')
    )
  })

  it('displays error for invalid URL', () => {
    const invalidUrl = 'https://invalid-url.com'
    render(<YouTubePlayer videoUrl={invalidUrl} />)

    expect(screen.getByText('Invalid YouTube URL')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const videoUrl = 'https://www.youtube.com/watch?v=IccjZDV93lw'
    const { container } = render(
      <YouTubePlayer videoUrl={videoUrl} className="custom-class" />
    )

    const wrapper = container.querySelector('.custom-class')
    expect(wrapper).toBeInTheDocument()
  })

  it('renders with responsive aspect ratio', () => {
    const videoUrl = 'https://www.youtube.com/watch?v=IccjZDV93lw'
    const { container } = render(<YouTubePlayer videoUrl={videoUrl} />)

    // Check for aspect ratio container (16:9 = 56.25%)
    const aspectRatioContainer = container.querySelector('.pb-\\[56\\.25\\%\\]')
    expect(aspectRatioContainer).toBeInTheDocument()
  })
})
