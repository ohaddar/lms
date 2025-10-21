import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Modules } from '../Modules'
import * as moduleUtils from '../../utils/modules'
import { ModuleStatus } from '../../types'

vi.mock('../../utils/modules')

const mockNavigate = vi.fn()
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  }
})

describe('Modules Page', () => {
  const mockModules = [
    {
      id: '1',
      title: 'AI Foundations: Introduction',
      videoUrl: 'https://www.youtube.com/watch?v=IccjZDV93lw',
      order: 1,
      createdAt: '2024-01-01T00:00:00.000Z',
      updatedAt: '2024-01-01T00:00:00.000Z',
      progress: {
        id: 'progress1',
        userId: 'user1',
        moduleId: '1',
        status: ModuleStatus.IN_PROGRESS,
        startedAt: '2024-01-01T00:00:00.000Z',
        completedAt: null,
        createdAt: '2024-01-01T00:00:00.000Z',
        updatedAt: '2024-01-01T00:00:00.000Z',
      },
    },
    {
      id: '2',
      title: 'AI Foundations: Tool Calling',
      videoUrl: 'https://www.youtube.com/watch?v=byR5YVesMeg',
      order: 2,
      createdAt: '2024-01-01T00:00:00.000Z',
      updatedAt: '2024-01-01T00:00:00.000Z',
      progress: null,
    },
    {
      id: '3',
      title: 'AI Foundations: Hallucinations',
      videoUrl: 'https://www.youtube.com/watch?v=JJDAaxxhF74',
      order: 3,
      createdAt: '2024-01-01T00:00:00.000Z',
      updatedAt: '2024-01-01T00:00:00.000Z',
      progress: {
        id: 'progress3',
        userId: 'user1',
        moduleId: '3',
        status: ModuleStatus.COMPLETED,
        startedAt: '2024-01-01T00:00:00.000Z',
        completedAt: '2024-01-02T00:00:00.000Z',
        createdAt: '2024-01-01T00:00:00.000Z',
        updatedAt: '2024-01-02T00:00:00.000Z',
      },
    },
  ]

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders loading state initially', () => {
    vi.spyOn(moduleUtils, 'getMyModules').mockImplementation(
      () => new Promise(() => {}) // Never resolves
    )

    render(
      <BrowserRouter>
        <Modules />
      </BrowserRouter>
    )

    expect(screen.getByText('Loading modules...')).toBeInTheDocument()
  })

  it('renders modules list after loading', async () => {
    vi.spyOn(moduleUtils, 'getMyModules').mockResolvedValue(mockModules)

    render(
      <BrowserRouter>
        <Modules />
      </BrowserRouter>
    )

    await waitFor(() => {
      expect(
        screen.getByText('AI Foundations: Introduction')
      ).toBeInTheDocument()
      expect(
        screen.getByText('AI Foundations: Tool Calling')
      ).toBeInTheDocument()
      expect(
        screen.getByText('AI Foundations: Hallucinations')
      ).toBeInTheDocument()
    })
  })

  it('displays correct status badges', async () => {
    vi.spyOn(moduleUtils, 'getMyModules').mockResolvedValue(mockModules)

    render(
      <BrowserRouter>
        <Modules />
      </BrowserRouter>
    )

    await waitFor(() => {
      expect(screen.getByText('En cours')).toBeInTheDocument()
      expect(screen.getByText('Not Started')).toBeInTheDocument()
      expect(screen.getByText('✓ Done')).toBeInTheDocument()
    })
  })

  it('handles error state', async () => {
    vi.spyOn(moduleUtils, 'getMyModules').mockRejectedValue(
      new Error('Failed to fetch')
    )

    render(
      <BrowserRouter>
        <Modules />
      </BrowserRouter>
    )

    await waitFor(() => {
      expect(
        screen.getByText('Failed to load modules. Please try again.')
      ).toBeInTheDocument()
    })
  })

  it('displays empty state when no modules', async () => {
    vi.spyOn(moduleUtils, 'getMyModules').mockResolvedValue([])

    render(
      <BrowserRouter>
        <Modules />
      </BrowserRouter>
    )

    await waitFor(() => {
      expect(screen.getByText('No modules available yet.')).toBeInTheDocument()
    })
  })

  it('displays module order numbers', async () => {
    vi.spyOn(moduleUtils, 'getMyModules').mockResolvedValue(mockModules)

    render(
      <BrowserRouter>
        <Modules />
      </BrowserRouter>
    )

    await waitFor(() => {
      expect(screen.getByText('1')).toBeInTheDocument()
      expect(screen.getByText('2')).toBeInTheDocument()
      expect(screen.getByText('3')).toBeInTheDocument()
    })
  })
})
