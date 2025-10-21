import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts'
import { Layout } from '../components'

const Home: React.FC = () => {
  const { user } = useAuth()
  const navigate = useNavigate()

  const quickActions = [
    {
      icon: '📚',
      title: 'Learning Modules',
      description: 'Continue your AI Foundations course',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-100',
      onClick: () => navigate('/modules'),
    },
    {
      icon: '📝',
      title: 'Assignments',
      description: 'View and submit assignments',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      hoverColor: 'hover:bg-purple-100',
      onClick: () => {},
    },
    {
      icon: '👤',
      title: 'Profile',
      description: 'Update your information',
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50',
      hoverColor: 'hover:bg-emerald-100',
      onClick: () => {},
    },
  ]

  const stats = [
    {
      label: 'Modules Completed',
      value: '0',
      icon: '✓',
      color: 'text-green-600',
    },
    { label: 'Hours Learned', value: '0', icon: '⏱️', color: 'text-blue-600' },
    {
      label: 'Quizzes Passed',
      value: '0',
      icon: '🎯',
      color: 'text-purple-600',
    },
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <div className="mb-8 animate-slide-down">
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl shadow-large p-8 md:p-12 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              Welcome back, {user?.firstName}! 👋
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Ready to continue your learning journey?
            </p>
            <button
              onClick={() => navigate('/modules')}
              className="px-8 py-3 bg-white text-primary-700 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-200 shadow-medium hover:shadow-large hover:scale-105 inline-flex items-center gap-2"
            >
              <span>Start Learning</span>
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
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-fade-in">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-soft p-6 hover:shadow-medium transition-all duration-200 hover:scale-105"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className={`text-4xl ${stat.color}`}>{stat.icon}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mb-8 animate-slide-up">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span className="w-1 h-8 bg-gradient-to-b from-primary-500 to-primary-700 rounded-full"></span>
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={action.onClick}
              className={`${action.bgColor} ${action.hoverColor} rounded-2xl p-8 text-left transition-all duration-200 hover:shadow-medium hover:scale-105 group`}
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-200">
                {action.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {action.title}
              </h3>
              <p className="text-gray-600 mb-4">{action.description}</p>
              <div
                className={`inline-flex items-center gap-2 font-semibold bg-gradient-to-r ${action.color} bg-clip-text text-transparent`}
              >
                <span>Get Started</span>
                <svg
                  className="w-4 h-4 text-gray-900 transform group-hover:translate-x-1 transition-transform"
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
            </button>
          ))}
        </div>
      </div>

      {/* Info Card */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 shadow-soft">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
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
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-green-900 mb-1">
              You're all set!
            </h3>
            <p className="text-green-700">
              Your account is active and you have access to all learning
              modules. Start exploring and enhance your AI knowledge today!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
