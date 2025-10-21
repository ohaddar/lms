import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { ModuleWithProgress } from '../types'
import { ModuleStatus } from '../types'
import { getMyModules } from '../utils'
import { Layout } from '../components'

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
      setModules(data || [])
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
        <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-700 border border-gray-200">
          Not Started
        </span>
      )
    }
    if (status === ModuleStatus.IN_PROGRESS) {
      return (
        <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 border border-blue-200">
          In Progress
        </span>
      )
    }
    if (status === ModuleStatus.COMPLETED) {
      return (
        <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold bg-green-100 text-green-700 border border-green-200">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          Completed
        </span>
      )
    }
    return null
  }

  const getProgressPercentage = () => {
    if (modules.length === 0) return 0
    const completed = modules.filter(
      m => m.progress?.status === ModuleStatus.COMPLETED
    ).length
    return Math.round((completed / modules.length) * 100)
  }

  const handleModuleClick = (module: ModuleWithProgress) => {
    if (module.isLocked) {
      return // Don't navigate to locked modules
    }
    navigate(`/modules/${module.id}`)
  }

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
            </div>
            <p className="text-lg text-gray-600 font-medium">
              Loading modules...
            </p>
          </div>
        </div>
      </Layout>
    )
  }

  if (error) {
    return (
      <Layout>
        <div className="flex items-center justify-center py-20">
          <div className="bg-white rounded-3xl shadow-large p-8 max-w-md w-full animate-scale-in">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-2xl mb-4">
                <svg
                  className="w-8 h-8 text-red-600"
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
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Error</h3>
              <p className="text-gray-600 mb-6">{error}</p>
              <button
                onClick={fetchModules}
                className="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-200 font-semibold shadow-medium hover:shadow-large"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      {/* Page Header */}
      <div className="mb-8 animate-slide-down">
        <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
          <span className="text-4xl">📚</span>
          Learning Modules
        </h1>
        <p className="text-lg text-gray-600">
          Track your progress through the AI Foundations course
        </p>
      </div>

      {/* Progress Overview */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl shadow-large p-8 mb-8 text-white animate-fade-in">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Course Progress</h2>
            <p className="text-blue-100 text-lg">
              {
                modules.filter(
                  m => m.progress?.status === ModuleStatus.COMPLETED
                ).length
              }{' '}
              of {modules.length} modules completed
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-32 h-32 relative">
              <svg className="transform -rotate-90 w-32 h-32">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  className="text-white/20"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 56}`}
                  strokeDashoffset={`${2 * Math.PI * 56 * (1 - getProgressPercentage() / 100)}`}
                  className="text-white transition-all duration-1000"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold">
                  {getProgressPercentage()}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {modules.length === 0 ? (
        <div className="bg-white rounded-3xl shadow-soft p-12 text-center animate-scale-in">
          <div className="text-6xl mb-4">📚</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No modules available
          </h3>
          <p className="text-gray-600">
            Check back later for new learning content!
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 animate-slide-up">
          {modules.map((module, index) => {
            const isCompleted =
              module.progress?.status === ModuleStatus.COMPLETED
            const isInProgress =
              module.progress?.status === ModuleStatus.IN_PROGRESS
            const isLocked = module.isLocked

            return (
              <div
                key={module.id}
                onClick={() => handleModuleClick(module)}
                className={`group bg-white rounded-2xl shadow-soft transition-all duration-300 overflow-hidden border ${
                  isLocked
                    ? 'cursor-not-allowed opacity-60 border-gray-300'
                    : 'cursor-pointer hover:shadow-large border-gray-100 hover:border-primary-200 hover:scale-[1.02]'
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Card Header */}
                <div
                  className={`p-6 relative ${
                    isLocked
                      ? 'bg-gradient-to-br from-gray-100 to-gray-200'
                      : isCompleted
                        ? 'bg-gradient-to-br from-green-50 to-emerald-50'
                        : isInProgress
                          ? 'bg-gradient-to-br from-blue-50 to-primary-50'
                          : 'bg-gradient-to-br from-gray-50 to-slate-50'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-medium ${
                        isLocked
                          ? 'bg-gray-400'
                          : 'bg-gradient-to-br from-primary-500 to-primary-700 group-hover:scale-110'
                      } transition-transform duration-300`}
                    >
                      {isLocked ? (
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          />
                        </svg>
                      ) : (
                        <span className="text-white font-bold text-lg">
                          {module.order}
                        </span>
                      )}
                    </div>
                    {isLocked ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-gray-300 text-gray-700 border border-gray-400">
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Locked
                      </span>
                    ) : (
                      getStatusBadge(
                        module.progress?.status || ModuleStatus.NOT_STARTED
                      )
                    )}
                  </div>
                  <h3
                    className={`text-xl font-bold mb-2 transition-colors ${
                      isLocked
                        ? 'text-gray-600'
                        : 'text-gray-900 group-hover:text-primary-700'
                    }`}
                  >
                    {module.title}
                  </h3>
                </div>

                {/* Card Body */}
                <div className="p-6 pt-4">
                  {isLocked ? (
                    <div className="space-y-3">
                      <div className="flex items-start gap-2 text-sm text-gray-600">
                        <svg
                          className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>
                          Complete Module {module.order - 1} quiz to unlock
                        </span>
                      </div>
                      <div className="mt-4 flex items-center text-gray-500 font-semibold gap-2">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          />
                        </svg>
                        <span>Locked</span>
                      </div>
                    </div>
                  ) : (
                    <>
                      {module.progress?.startedAt && (
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          Started:{' '}
                          {new Date(
                            module.progress.startedAt
                          ).toLocaleDateString()}
                        </div>
                      )}

                      {module.progress?.completedAt && (
                        <div className="flex items-center gap-2 text-sm text-green-600 font-medium mb-2">
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Completed:{' '}
                          {new Date(
                            module.progress.completedAt
                          ).toLocaleDateString()}
                        </div>
                      )}

                      <div className="mt-4 flex items-center text-primary-600 font-semibold group-hover:gap-3 gap-2 transition-all">
                        <span>View Module</span>
                        <svg
                          className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </Layout>
  )
}
