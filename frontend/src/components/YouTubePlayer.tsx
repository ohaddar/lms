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
        className={`bg-red-50 border border-red-200 rounded-lg p-8 text-center ${className}`}
      >
        <p className="text-red-600 font-medium">{error}</p>
      </div>
    )
  }

  if (!videoId) {
    return (
      <div
        className={`bg-gray-50 border border-gray-200 rounded-lg p-8 text-center ${className}`}
      >
        <p className="text-gray-600">No video URL provided</p>
      </div>
    )
  }

  return (
    <div className={`relative w-full ${className}`}>
      {/* 16:9 Aspect Ratio Container */}
      <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
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
