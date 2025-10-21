import React from 'react'
import { Header } from './Header'

interface LayoutProps {
  children: React.ReactNode
  showNav?: boolean
  maxWidth?:
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | 'full'
  className?: string
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  showNav = true,
  maxWidth = '7xl',
  className = '',
}) => {
  const maxWidthClass = maxWidth === 'full' ? 'max-w-full' : `max-w-${maxWidth}`

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-primary-50/20">
      <Header showNav={showNav} />
      <main
        className={`${maxWidthClass} mx-auto px-4 sm:px-6 lg:px-8 py-8 ${className}`}
      >
        {children}
      </main>
    </div>
  )
}
