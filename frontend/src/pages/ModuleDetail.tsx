import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import type { ModuleWithProgress } from '../types'
import { ModuleStatus } from '../types'
import { getMyModules, updateMyModuleProgress } from '../utils'
import { YouTubePlayer, Quiz } from '../components'

export const ModuleDetail = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [modules, setModules] = useState<ModuleWithProgress[]>([])
  const [currentModule, setCurrentModule] = useState<ModuleWithProgress | null>(
    null
  )
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [updating, setUpdating] = useState(false)

  useEffect(() => {
    fetchModules()
  }, [id])

  const fetchModules = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await getMyModules()
      setModules(data)

      const module = data.find(m => m.id === id)
      if (!module) {
        setError('Module not found')
      } else {
        setCurrentModule(module)
        // Mark as in progress if not started
        if (
          !module.progress ||
          module.progress.status === ModuleStatus.NOT_STARTED
        ) {
          await updateProgress(ModuleStatus.IN_PROGRESS)
        }
      }
    } catch (err) {
      console.error('Failed to fetch module:', err)
      setError('Failed to load module. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const updateProgress = async (status: ModuleStatus) => {
    if (!id) return

    try {
      setUpdating(true)
      await updateMyModuleProgress(id, status)
      // Refresh modules to get updated progress
      const data = await getMyModules()
      setModules(data)
      const updatedModule = data.find(m => m.id === id)
      if (updatedModule) {
        setCurrentModule(updatedModule)
      }
    } catch (err) {
      console.error('Failed to update progress:', err)
      setError('Failed to update progress. Please try again.')
    } finally {
      setUpdating(false)
    }
  }

  const handleMarkComplete = async () => {
    await updateProgress(ModuleStatus.COMPLETED)
  }

  const handleQuizComplete = async (passed: boolean) => {
    if (passed) {
      // Quiz automatically updates the module status to COMPLETED
      // We just need to refresh the data
      await fetchModules()
    }
  }

  const handleNavigate = (direction: 'prev' | 'next') => {
    if (!currentModule) return

    const currentIndex = modules.findIndex(m => m.id === currentModule.id)
    const targetIndex =
      direction === 'prev' ? currentIndex - 1 : currentIndex + 1

    if (targetIndex >= 0 && targetIndex < modules.length) {
      navigate(`/modules/${modules[targetIndex].id}`)
    }
  }

  const getStatusBadge = (status: ModuleStatus | null) => {
    if (!status || status === ModuleStatus.NOT_STARTED) {
      return (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
          Not Started
        </span>
      )
    }
    if (status === ModuleStatus.IN_PROGRESS) {
      return (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
          En cours
        </span>
      )
    }
    if (status === ModuleStatus.COMPLETED) {
      return (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
          ✓ Done
        </span>
      )
    }
    return null
  }

  const currentIndex = currentModule
    ? modules.findIndex(m => m.id === currentModule.id)
    : -1
  const hasPrevious = currentIndex > 0
  const hasNext = currentIndex >= 0 && currentIndex < modules.length - 1

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading module...</p>
        </div>
      </div>
    )
  }

  if (error || !currentModule) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
          <div className="text-red-600 text-center">
            <svg
              className="mx-auto h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-4 text-lg font-medium">Error</h3>
            <p className="mt-2 text-sm">{error || 'Module not found'}</p>
            <button
              onClick={() => navigate('/modules')}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Back to Modules
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/modules')}
          className="mb-6 flex items-center text-gray-600 hover:text-gray-900 transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Modules
        </button>

        {/* Module Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 font-semibold">
                  {currentModule.order}
                </span>
                <h1 className="text-2xl font-bold text-gray-900">
                  {currentModule.title}
                </h1>
              </div>
            </div>
            <div>
              {getStatusBadge(
                currentModule.progress?.status || ModuleStatus.NOT_STARTED
              )}
            </div>
          </div>

          {currentModule.progress?.status === ModuleStatus.COMPLETED && (
            <p className="mt-4 text-green-600 font-medium">
              ✓ You completed this module on {new Date(currentModule.progress.completedAt || '').toLocaleDateString()}
            </p>
          )}
        </div>

        {/* Video Player */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <YouTubePlayer videoUrl={currentModule.videoUrl} />
        </div>

        {/* Quiz Section */}
        {currentModule.progress?.status !== ModuleStatus.COMPLETED && (
          <div className="mb-6">
            <Quiz moduleId={currentModule.id} onQuizComplete={handleQuizComplete} />
          </div>
        )}

        {currentModule.progress?.status === ModuleStatus.COMPLETED && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6 text-center">
            <div className="text-green-600 mb-2">
              <svg
                className="mx-auto h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-green-800">
              Module Completed!
            </h3>
            <p className="text-green-700 mt-2">
              Congratulations! You've successfully completed this module.
            </p>
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleNavigate('prev')}
            disabled={!hasPrevious}
            className="flex items-center px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-md"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Previous Module
          </button>

          <button
            onClick={() => handleNavigate('next')}
            disabled={!hasNext}
            className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600 disabled:hover:shadow-md"
          >
            Next Module
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Module List */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            All Modules
          </h2>
          <div className="space-y-2">
            {modules.map(module => (
              <button
                key={module.id}
                onClick={() => navigate(`/modules/${module.id}`)}
                className={`w-full text-left p-4 rounded-lg transition-colors ${
                  module.id === currentModule.id
                    ? 'bg-blue-50 border-2 border-blue-600'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm">
                      {module.order}
                    </span>
                    <span className="font-medium text-gray-900">
                      {module.title}
                    </span>
                  </div>
                  {getStatusBadge(
                    module.progress?.status || ModuleStatus.NOT_STARTED
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
