import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts'

const Home: React.FC = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">Vibe LMS</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome back, {user?.firstName}!
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-gray-600">
              <div className="bg-indigo-100 rounded-lg p-4">
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-semibold text-gray-900">{user?.email}</p>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800">
                ✓ You are successfully logged in and authenticated!
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Quick Actions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                  onClick={() => navigate('/modules')}
                  className="p-6 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors text-left"
                >
                  <div className="text-2xl mb-2">📚</div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Learning Modules
                  </h4>
                  <p className="text-sm text-gray-600">
                    Continue your AI Foundations course
                  </p>
                </button>
                <button className="p-6 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors text-left">
                  <div className="text-2xl mb-2">📝</div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Assignments
                  </h4>
                  <p className="text-sm text-gray-600">
                    View and submit assignments
                  </p>
                </button>
                <button className="p-6 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors text-left">
                  <div className="text-2xl mb-2">👤</div>
                  <h4 className="font-semibold text-gray-900 mb-1">Profile</h4>
                  <p className="text-sm text-gray-600">
                    Update your information
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
