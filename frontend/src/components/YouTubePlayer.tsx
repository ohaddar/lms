import { useEffect, useRef, useState } from 'react'

interface YouTubePlayerProps {
  videoUrl: string
  className?: string
}

/**
 * Extract YouTube video ID from various URL formats
 */
const getYouTubeVideoId = (url: string): string | null => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)
  return match && match[2].length === 11 ? match[2] : null
}

/**
 * YouTube Player Component
 * Embeds a YouTube video using iframe with responsive design
 */
export const YouTubePlayer = ({
  videoUrl,
  className = '',
}: YouTubePlayerProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const videoId = getYouTubeVideoId(videoUrl)

  useEffect(() => {
    if (!videoId) {
      setError('Invalid YouTube URL')
      setIsLoading(false)
    }
  }, [videoId])

  const handleLoad = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    setError('Failed to load video')
    setIsLoading(false)
  }

  if (error) {
    return (
      <div
        className={`bg-gradient-to-br from-red-50 to-rose-50 border-2 border-red-200 rounded-2xl p-8 text-center ${className}`}
      >
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
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </div>
        <p className="text-red-700 font-semibold text-lg">{error}</p>
      </div>
    )
  }

  if (!videoId) {
    return (
      <div
        className={`bg-gradient-to-br from-gray-50 to-slate-50 border-2 border-gray-200 rounded-2xl p-8 text-center ${className}`}
      >
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-2xl mb-4">
          <svg
            className="w-8 h-8 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </div>
        <p className="text-gray-600 font-medium">No video URL provided</p>
      </div>
    )
  }

  return (
    <div className={`relative w-full ${className}`}>
      {/* 16:9 Aspect Ratio Container */}
      <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-2xl shadow-large border-2 border-gray-200">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
              </div>
              <p className="text-gray-600 font-medium">Loading video...</p>
            </div>
          </div>
        )}
        <iframe
          ref={iframeRef}
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={handleLoad}
          onError={handleError}
        />
      </div>
    </div>
  )
}
