import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import type { ModuleWithProgress } from '../types'
import { ModuleStatus } from '../types'
import { getMyModules, updateMyModuleProgress } from '../utils'
import { Layout, YouTubePlayer, Quiz } from '../components'

export const ModuleDetail = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [modules, setModules] = useState<ModuleWithProgress[]>([])
  const [currentModule, setCurrentModule] = useState<ModuleWithProgress | null>(
    null
  )
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

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
      } else if (module.isLocked) {
        setError(
          `This module is locked. Please complete Module ${module.order - 1} quiz to unlock.`
        )
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
    }
  }

  const handleQuizComplete = async (passed: boolean) => {
    if (passed) {
      // Quiz automatically updates the module status to COMPLETED
      // We just need to refresh the data
      const updatedModules = await getMyModules()
      setModules(updatedModules)

      // Check if all modules are completed
      const allCompleted = updatedModules.every(
        m => m.progress?.status === ModuleStatus.COMPLETED
      )

      if (allCompleted) {
        // Redirect to congratulations page
        navigate('/congratulations')
      } else {
        // Refresh current module
        const updatedModule = updatedModules.find(m => m.id === id)
        if (updatedModule) {
          setCurrentModule(updatedModule)
        }
      }
    }
  }

  const handleNavigate = (direction: 'prev' | 'next') => {
    if (!currentModule) return

    const currentIndex = modules.findIndex(m => m.id === currentModule.id)
    const targetIndex =
      direction === 'prev' ? currentIndex - 1 : currentIndex + 1

    if (targetIndex >= 0 && targetIndex < modules.length) {
      const targetModule = modules[targetIndex]
      // Don't navigate to locked modules
      if (!targetModule.isLocked) {
        navigate(`/modules/${targetModule.id}`)
      }
    }
  }

  const getStatusBadge = (status: ModuleStatus | null) => {
    if (!status || status === ModuleStatus.NOT_STARTED) {
      return (
        <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gray-100 text-gray-700 border border-gray-200">
          Not Started
        </span>
      )
    }
    if (status === ModuleStatus.IN_PROGRESS) {
      return (
        <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-blue-100 text-blue-700 border border-blue-200">
          In Progress
        </span>
      )
    }
    if (status === ModuleStatus.COMPLETED) {
      return (
        <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold bg-green-100 text-green-700 border border-green-200">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
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

  const currentIndex = currentModule
    ? modules.findIndex(m => m.id === currentModule.id)
    : -1
  const hasPrevious = currentIndex > 0 && !modules[currentIndex - 1]?.isLocked
  const hasNext =
    currentIndex >= 0 &&
    currentIndex < modules.length - 1 &&
    !modules[currentIndex + 1]?.isLocked

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
            </div>
            <p className="text-lg text-gray-600 font-medium">
              Loading module...
            </p>
          </div>
        </div>
      </Layout>
    )
  }

  if (error || !currentModule) {
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
              <p className="text-gray-600 mb-6">
                {error || 'Module not found'}
              </p>
              <button
                onClick={() => navigate('/modules')}
                className="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-200 font-semibold shadow-medium hover:shadow-large"
              >
                Back to Modules
              </button>
            </div>
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout maxWidth="6xl">
      {/* Back Button */}
      <button
        onClick={() => navigate('/modules')}
        className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group animate-slide-down"
      >
        <svg
          className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
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
        <span className="font-medium">Back to Modules</span>
      </button>

      {/* Module Header */}
      <div className="bg-white rounded-3xl shadow-soft p-8 mb-6 animate-fade-in border border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-medium">
                <span className="text-white font-bold text-2xl">
                  {currentModule.order}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                {currentModule.title}
              </h1>
            </div>
            {currentModule.progress?.completedAt && (
              <div className="flex items-center gap-2 text-green-600 font-medium bg-green-50 rounded-xl px-4 py-2 inline-flex">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Completed on{' '}
                {new Date(
                  currentModule.progress.completedAt
                ).toLocaleDateString()}
              </div>
            )}
          </div>
          <div>
            {getStatusBadge(
              currentModule.progress?.status || ModuleStatus.NOT_STARTED
            )}
          </div>
        </div>
      </div>

      {/* Video Player */}
      <div className="bg-white rounded-3xl shadow-soft p-6 md:p-8 mb-6 animate-slide-up">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span className="w-1 h-8 bg-gradient-to-b from-primary-500 to-primary-700 rounded-full"></span>
          Video Lecture
        </h2>
        <YouTubePlayer videoUrl={currentModule.videoUrl} />
      </div>

      {/* Quiz Section */}
      {currentModule.progress?.status !== ModuleStatus.COMPLETED && (
        <div
          className="mb-6 animate-slide-up"
          style={{ animationDelay: '100ms' }}
        >
          <Quiz
            moduleId={currentModule.id}
            onQuizComplete={handleQuizComplete}
          />
        </div>
      )}

      {/* Completion Card */}
      {currentModule.progress?.status === ModuleStatus.COMPLETED && (
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-3xl p-8 mb-6 text-center shadow-soft animate-scale-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-4 shadow-large">
            <svg
              className="w-10 h-10 text-white"
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
          <h3 className="text-2xl font-bold text-green-900 mb-2">
            Module Completed! 🎉
          </h3>
          <p className="text-lg text-green-700">
            Congratulations! You've successfully completed this module.
          </p>
        </div>
      )}

      {/* Navigation */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <button
          onClick={() => handleNavigate('prev')}
          disabled={!hasPrevious}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-soft font-semibold text-gray-700 hover:text-gray-900 disabled:hover:text-gray-700 border border-gray-100"
        >
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span>Previous Module</span>
        </button>

        <button
          onClick={() => handleNavigate('next')}
          disabled={!hasNext}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl shadow-medium hover:shadow-large hover:from-primary-700 hover:to-primary-800 transition-all duration-200 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed disabled:hover:shadow-medium font-semibold"
        >
          <span>Next Module</span>
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
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Module List */}
      <div className="bg-white rounded-3xl shadow-soft p-8 border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span className="w-1 h-8 bg-gradient-to-b from-primary-500 to-primary-700 rounded-full"></span>
          All Modules
        </h2>
        <div className="space-y-3">
          {modules.map((module, index) => {
            const isActive = module.id === currentModule.id
            const isCompleted =
              module.progress?.status === ModuleStatus.COMPLETED

            const isLocked = module.isLocked

            return (
              <button
                key={module.id}
                onClick={() => !isLocked && navigate(`/modules/${module.id}`)}
                disabled={isLocked}
                className={`w-full text-left p-5 rounded-2xl transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-primary-50 to-blue-50 border-2 border-primary-300 shadow-soft'
                    : isLocked
                      ? 'bg-gray-100 border border-gray-300 cursor-not-allowed opacity-60'
                      : 'bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300'
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 flex-1">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold shadow-soft ${
                        isLocked
                          ? 'bg-gray-400 text-white'
                          : isActive
                            ? 'bg-gradient-to-br from-primary-500 to-primary-700 text-white'
                            : 'bg-white text-gray-700'
                      }`}
                    >
                      {isLocked ? (
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
                      ) : (
                        module.order
                      )}
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`font-semibold mb-1 ${
                          isLocked
                            ? 'text-gray-600'
                            : isActive
                              ? 'text-primary-900'
                              : 'text-gray-900'
                        }`}
                      >
                        {module.title}
                      </h3>
                      {isLocked ? (
                        <p className="text-sm text-gray-500">
                          Complete Module {module.order - 1} to unlock
                        </p>
                      ) : (
                        module.progress?.startedAt && (
                          <p className="text-sm text-gray-500">
                            Started:{' '}
                            {new Date(
                              module.progress.startedAt
                            ).toLocaleDateString()}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {isLocked ? (
                      <span className="px-3 py-1 bg-gray-300 text-gray-700 text-xs font-semibold rounded-full flex items-center gap-1">
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
                      <>
                        {isCompleted && (
                          <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                            <svg
                              className="w-5 h-5 text-green-600"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        )}
                        {isActive && (
                          <span className="px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">
                            Current
                          </span>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}
