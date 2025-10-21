import React, { useEffect, useState } from 'react'
import { api } from '../utils/api'

interface ProgressData {
  totalModules: number
  completedModules: number
  percentage: number
}

export const ProgressBar: React.FC = () => {
  const [progress, setProgress] = useState<ProgressData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProgress()
  }, [])

  const fetchProgress = async () => {
    try {
      const response: any = await api.get('/my/progress')
      if (response.data.success) {
        setProgress(response.data.data)
      }
    } catch (error) {
      console.error('Error fetching progress:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading || !progress) {
    return null
  }

  return (
    <div className="w-full bg-white rounded-lg shadow-sm p-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium text-gray-700">Overall Progress</h3>
        <span className="text-sm font-semibold text-primary-600">
          {progress.percentage.toFixed(0)}%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="bg-linear-to-r from-primary-500 to-primary-600 h-3 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress.percentage}%` }}
        />
      </div>
      <p className="mt-2 text-xs text-gray-600">
        {progress.completedModules} of {progress.totalModules} modules completed
      </p>
    </div>
  )
}
