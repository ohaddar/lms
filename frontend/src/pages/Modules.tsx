import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { ModuleWithProgress } from '../types'
import { ModuleStatus } from '../types'
import { getMyModules } from '../utils'

export const Modules = () => {
  const [modules, setModules] = useState<ModuleWithProgress[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    fetchModules()
  }, [])

  const fetchModules = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await getMyModules()
      setModules(data)
    } catch (err) {
      console.error('Failed to fetch modules:', err)
      setError('Failed to load modules. Please try again.')
    } finally {
      setLoading(false)
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

  const handleModuleClick = (moduleId: string) => {
    navigate(`/modules/${moduleId}`)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading modules...</p>
        </div>
      </div>
    )
  }

  if (error) {
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
            <p className="mt-2 text-sm">{error}</p>
            <button
              onClick={fetchModules}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Learning Modules</h1>
          <p className="mt-2 text-gray-600">
            Track your progress through the AI Foundations course
          </p>
        </div>

        {modules.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-600">No modules available yet.</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {modules.map(module => (
              <div
                key={module.id}
                onClick={() => handleModuleClick(module.id)}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm">
                          {module.order}
                        </span>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {module.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    {getStatusBadge(
                      module.progress?.status || ModuleStatus.NOT_STARTED
                    )}
                  </div>

                  {module.progress?.startedAt && (
                    <div className="mt-3 text-xs text-gray-500">
                      Started:{' '}
                      {new Date(module.progress.startedAt).toLocaleDateString()}
                    </div>
                  )}

                  {module.progress?.completedAt && (
                    <div className="mt-1 text-xs text-gray-500">
                      Completed:{' '}
                      {new Date(
                        module.progress.completedAt
                      ).toLocaleDateString()}
                    </div>
                  )}

                  <div className="mt-4 flex items-center text-blue-600 text-sm font-medium">
                    <span>View Module</span>
                    <svg
                      className="ml-2 w-4 h-4"
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
