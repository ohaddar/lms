import React, { useState, useEffect } from 'react'
import type {
  Quiz as QuizType,
  QuizQuestion,
  UserAnswer,
  QuizSubmissionResult,
} from '../types'
import { getModuleQuiz, submitQuiz } from '../utils'

interface QuizProps {
  moduleId: string
  onQuizComplete?: (passed: boolean) => void
}

const Quiz: React.FC<QuizProps> = ({ moduleId, onQuizComplete }) => {
  const [quiz, setQuiz] = useState<QuizType | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [userAnswers, setUserAnswers] = useState<Map<string, string>>(new Map())
  const [submitting, setSubmitting] = useState(false)
  const [result, setResult] = useState<QuizSubmissionResult | null>(null)
  const [showResults, setShowResults] = useState(false)

  useEffect(() => {
    fetchQuiz()
  }, [moduleId])

  const fetchQuiz = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await getModuleQuiz(moduleId)
      setQuiz(data)
    } catch (err) {
      setError('Failed to load quiz. Please try again.')
      console.error('Error fetching quiz:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleAnswerSelect = (questionId: string, answerId: string) => {
    setUserAnswers(prev => new Map(prev).set(questionId, answerId))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!quiz) return

    // Check if all questions are answered
    if (userAnswers.size !== quiz.questions.length) {
      setError('Please answer all questions before submitting.')
      return
    }

    try {
      setSubmitting(true)
      setError(null)

      const answers: UserAnswer[] = Array.from(userAnswers.entries()).map(
        ([questionId, answerId]) => ({
          questionId,
          answerId,
        })
      )

      const submissionResult = await submitQuiz(moduleId, answers)
      setResult(submissionResult)
      setShowResults(true)

      if (onQuizComplete) {
        onQuizComplete(submissionResult.passed)
      }
    } catch (err) {
      setError('Failed to submit quiz. Please try again.')
      console.error('Error submitting quiz:', err)
    } finally {
      setSubmitting(false)
    }
  }

  const handleRetry = () => {
    setUserAnswers(new Map())
    setResult(null)
    setShowResults(false)
    setError(null)
  }

  if (loading) {
    return (
      <div className="bg-white rounded-3xl shadow-soft p-12 flex justify-center items-center">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
          </div>
          <p className="text-gray-600 font-medium">Loading quiz...</p>
        </div>
      </div>
    )
  }

  if (error && !quiz) {
    return (
      <div className="bg-white rounded-3xl shadow-soft p-8 border border-red-200">
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
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={fetchQuiz}
            className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl hover:from-red-700 hover:to-red-800 transition-all font-semibold shadow-medium hover:shadow-large"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  if (!quiz) return null

  // Show results screen
  if (showResults && result) {
    return (
      <div className="bg-white rounded-3xl shadow-soft p-8 border border-gray-100">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <span className="w-1 h-8 bg-gradient-to-b from-primary-500 to-primary-700 rounded-full"></span>
          Quiz Results
        </h2>

        <div
          className={`p-8 rounded-2xl mb-8 ${
            result.passed
              ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200'
              : 'bg-gradient-to-br from-red-50 to-rose-50 border-2 border-red-200'
          }`}
        >
          <div className="text-center">
            <div
              className={`inline-flex items-center justify-center w-28 h-28 rounded-3xl mb-6 ${
                result.passed
                  ? 'bg-gradient-to-br from-green-500 to-emerald-600 shadow-large'
                  : 'bg-gradient-to-br from-red-500 to-rose-600 shadow-large'
              }`}
            >
              <span className="text-5xl font-bold text-white">
                {result.score}%
              </span>
            </div>
            <p
              className={`text-2xl font-bold mb-3 ${
                result.passed ? 'text-green-900' : 'text-red-900'
              }`}
            >
              {result.message}
            </p>
            <p
              className={`text-lg ${
                result.passed ? 'text-green-700' : 'text-red-700'
              }`}
            >
              {result.correctAnswers} out of {result.totalQuestions} questions
              correct
            </p>
          </div>
        </div>

        <div className="space-y-6 mb-8">
          {quiz.questions.map((question, index) => {
            const answerDetail = result.answerDetails.find(
              ad => ad.questionId === question.id
            )
            const userAnswerId = answerDetail?.answerId
            const isCorrect = answerDetail?.isCorrect
            const correctAnswerId = answerDetail?.correctAnswerId

            return (
              <div
                key={question.id}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-6"
              >
                <div className="flex items-start gap-3 mb-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-100 text-primary-700 rounded-lg flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </span>
                  <p className="font-semibold text-gray-900 text-lg">
                    {question.questionText}
                  </p>
                </div>
                <div className="space-y-3 ml-11">
                  {question.answers.map(answer => {
                    const isUserAnswer = answer.id === userAnswerId
                    const isCorrectAnswer = answer.id === correctAnswerId

                    let bgColor = 'bg-white'
                    let textColor = 'text-gray-700'
                    let borderColor = 'border-gray-200'

                    if (isCorrectAnswer) {
                      bgColor = 'bg-green-50'
                      textColor = 'text-green-900'
                      borderColor = 'border-green-300'
                    } else if (isUserAnswer && !isCorrect) {
                      bgColor = 'bg-red-50'
                      textColor = 'text-red-900'
                      borderColor = 'border-red-300'
                    }

                    return (
                      <div
                        key={answer.id}
                        className={`p-4 rounded-xl border-2 ${bgColor} ${borderColor}`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className={`${textColor} font-medium`}>
                            {answer.answerText}
                          </span>
                          {isCorrectAnswer && (
                            <span className="flex items-center gap-1 text-green-600 font-semibold text-sm whitespace-nowrap">
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
                              Correct
                            </span>
                          )}
                          {isUserAnswer && !isCorrect && (
                            <span className="text-red-600 font-semibold text-sm whitespace-nowrap">
                              ✗ Your answer
                            </span>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        {!result.passed && (
          <div className="flex justify-center">
            <button
              onClick={handleRetry}
              className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl hover:from-primary-700 hover:to-primary-800 font-semibold shadow-medium hover:shadow-large transition-all duration-200"
            >
              Retry Quiz
            </button>
          </div>
        )}
      </div>
    )
  }

  // Show quiz form
  return (
    <div className="bg-white rounded-3xl shadow-soft p-8 border border-gray-100">
      <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
        <span className="w-1 h-8 bg-gradient-to-b from-primary-500 to-primary-700 rounded-full"></span>
        {quiz.moduleTitle} - Quiz
      </h2>
      <p className="text-gray-600 mb-8 text-lg ml-3">
        Answer all {quiz.questions.length} questions to complete this module.
      </p>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-xl flex items-start gap-3">
          <svg
            className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
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
          <span className="text-red-600 font-medium">{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="space-y-6 mb-8">
          {quiz.questions.map((question: QuizQuestion, index: number) => (
            <div
              key={question.id}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-6"
            >
              <div className="flex items-start gap-3 mb-5">
                <span className="flex-shrink-0 w-8 h-8 bg-primary-100 text-primary-700 rounded-lg flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </span>
                <p className="font-semibold text-gray-900 text-lg">
                  {question.questionText}
                </p>
              </div>
              <div className="space-y-3 ml-11">
                {question.answers.map(answer => (
                  <label
                    key={answer.id}
                    className={`flex items-start p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                      userAnswers.get(question.id) === answer.id
                        ? 'bg-primary-50 border-primary-300 shadow-soft'
                        : 'bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={answer.id}
                      checked={userAnswers.get(question.id) === answer.id}
                      onChange={() =>
                        handleAnswerSelect(question.id, answer.id)
                      }
                      className="mt-0.5 h-5 w-5 text-primary-600 focus:ring-primary-500 cursor-pointer"
                    />
                    <span
                      className={`ml-3 font-medium ${
                        userAnswers.get(question.id) === answer.id
                          ? 'text-primary-900'
                          : 'text-gray-700'
                      }`}
                    >
                      {answer.answerText}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={submitting || userAnswers.size !== quiz.questions.length}
            className={`px-10 py-4 rounded-xl font-semibold text-white transition-all duration-200 ${
              submitting || userAnswers.size !== quiz.questions.length
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 shadow-medium hover:shadow-large transform hover:scale-105'
            }`}
          >
            {submitting ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Submitting...
              </span>
            ) : (
              'Submit Quiz'
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Quiz
