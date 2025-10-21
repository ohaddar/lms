import React, { useState, useEffect } from 'react'
import { api, ApiError } from '../utils/api'

interface FeedbackResponse {
  success: boolean
  data?: {
    helpful: boolean
  }
}

// Using ApiError from utils/api to check HTTP status when available

interface ModuleFeedbackProps {
  moduleId: string
  onFeedbackSubmitted?: () => void
}

export const ModuleFeedback: React.FC<ModuleFeedbackProps> = ({
  moduleId,
  onFeedbackSubmitted,
}) => {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [existingFeedback, setExistingFeedback] = useState<boolean | null>(null)

  useEffect(() => {
    checkExistingFeedback()
  }, [moduleId])

  const checkExistingFeedback = async () => {
    try {
      const response = await api.get<FeedbackResponse>(
        `/my/modules/${moduleId}/feedback`
      )
      if (response.success && response.data) {
        setExistingFeedback(response.data.helpful)
        setSubmitted(true)
      }
    } catch (error) {
      console.error('Error checking existing feedback:', error)
    }
  }

  const handleFeedback = async (helpful: boolean) => {
    setLoading(true)
    setError(null)

    try {
      const response = await api.post<FeedbackResponse>(
        `/modules/${moduleId}/feedback`,
        { helpful }
      )

      if (response.success) {
        setSubmitted(true)
        setExistingFeedback(helpful)
        if (onFeedbackSubmitted) {
          onFeedbackSubmitted()
        }
      }
    } catch (err: unknown) {
      const error = err as ApiError
      if (error.status === 409) {
        setSubmitted(true)
      } else {
        setError('Failed to submit feedback. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  if (submitted && existingFeedback !== null) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
        <p className="text-green-800 font-medium">
          ✓ Thank you for your feedback!
        </p>
        <p className="text-green-600 text-sm mt-1">
          You found this module {existingFeedback ? 'helpful' : 'not helpful'}
        </p>
      </div>
    )
  }

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">
        Ce module t'a-t-il aidé ?
      </h3>

      {error && (
        <p className="text-red-600 text-sm mb-4 text-center">{error}</p>
      )}

      <div className="flex gap-4 justify-center">
        <button
          onClick={() => handleFeedback(true)}
          disabled={loading}
          className="px-8 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
        >
          👍 Yes
        </button>
        <button
          onClick={() => handleFeedback(false)}
          disabled={loading}
          className="px-8 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
        >
          👎 No
        </button>
      </div>
    </div>
  )
}
