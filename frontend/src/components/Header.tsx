import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts'

interface HeaderProps {
  showNav?: boolean
}

export const Header: React.FC<HeaderProps> = ({ showNav = true }) => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogout = async () => {
    await logout()
    navigate('/login')
  }

  const navItems = [
    { path: '/', label: 'Dashboard', icon: '🏠' },
    { path: '/modules', label: 'Modules', icon: '📚' },
  ]

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 group"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-medium group-hover:shadow-large transition-all duration-300 group-hover:scale-105">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                Vibe LMS
              </span>
            </button>

            {/* Navigation */}
            {showNav && (
              <nav className="hidden md:flex items-center gap-1">
                {navItems.map(item => (
                  <button
                    key={item.path}
                    onClick={() => navigate(item.path)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                      isActive(item.path)
                        ? 'bg-primary-50 text-primary-700 shadow-soft'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </nav>
            )}
          </div>

          {/* User Menu */}
          <div className="flex items-center gap-4">
            {user && (
              <div className="hidden sm:flex items-center gap-3 px-4 py-2 bg-gray-50 rounded-xl">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {user.firstName?.[0]?.toUpperCase()}
                  </span>
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">
                    {user.firstName}
                  </p>
                  <p className="text-gray-500 text-xs">{user.email}</p>
                </div>
              </div>
            )}
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 font-medium shadow-soft hover:shadow-medium"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {showNav && (
          <nav className="md:hidden flex items-center gap-1 pb-3 overflow-x-auto">
            {navItems.map(item => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 whitespace-nowrap ${
                  isActive(item.path)
                    ? 'bg-primary-50 text-primary-700 shadow-soft'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
