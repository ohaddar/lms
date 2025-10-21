import React, { useState, useEffect } from 'react'
import type { Quiz as QuizType, QuizQuestion, UserAnswer, QuizSubmissionResult } from '../types'
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
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    )
  }

  if (error && !quiz) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
        <p className="text-red-600">{error}</p>
        <button
          onClick={fetchQuiz}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Retry
        </button>
      </div>
    )
  }

  if (!quiz) return null

  // Show results screen
  if (showResults && result) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Quiz Results</h2>
        
        <div className={`p-6 rounded-lg mb-6 ${
          result.passed ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
        }`}>
          <div className="text-center">
            <div className={`text-6xl font-bold mb-4 ${
              result.passed ? 'text-green-600' : 'text-red-600'
            }`}>
              {result.score}%
            </div>
            <p className={`text-xl font-semibold mb-2 ${
              result.passed ? 'text-green-800' : 'text-red-800'
            }`}>
              {result.message}
            </p>
            <p className="text-gray-600">
              {result.correctAnswers} out of {result.totalQuestions} questions correct
            </p>
          </div>
        </div>

        <div className="space-y-6 mb-6">
          {quiz.questions.map((question, index) => {
            const answerDetail = result.answerDetails.find(
              ad => ad.questionId === question.id
            )
            const userAnswerId = answerDetail?.answerId
            const isCorrect = answerDetail?.isCorrect
            const correctAnswerId = answerDetail?.correctAnswerId

            return (
              <div key={question.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start gap-2 mb-3">
                  <span className="font-semibold text-gray-700">Q{index + 1}.</span>
                  <p className="font-medium text-gray-900">{question.questionText}</p>
                </div>
                <div className="space-y-2 ml-6">
                  {question.answers.map(answer => {
                    const isUserAnswer = answer.id === userAnswerId
                    const isCorrectAnswer = answer.id === correctAnswerId
                    
                    let bgColor = 'bg-gray-50'
                    let textColor = 'text-gray-700'
                    let borderColor = 'border-gray-200'
                    
                    if (isCorrectAnswer) {
                      bgColor = 'bg-green-50'
                      textColor = 'text-green-800'
                      borderColor = 'border-green-300'
                    } else if (isUserAnswer && !isCorrect) {
                      bgColor = 'bg-red-50'
                      textColor = 'text-red-800'
                      borderColor = 'border-red-300'
                    }

                    return (
                      <div
                        key={answer.id}
                        className={`p-3 rounded border ${bgColor} ${borderColor}`}
                      >
                        <div className="flex items-center justify-between">
                          <span className={textColor}>{answer.answerText}</span>
                          {isCorrectAnswer && (
                            <span className="text-green-600 font-semibold">✓ Correct</span>
                          )}
                          {isUserAnswer && !isCorrect && (
                            <span className="text-red-600 font-semibold">✗ Your answer</span>
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
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-semibold"
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
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-2">{quiz.moduleTitle} - Quiz</h2>
      <p className="text-gray-600 mb-6">
        Answer all {quiz.questions.length} questions to complete this module.
      </p>

      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="space-y-8 mb-8">
          {quiz.questions.map((question: QuizQuestion, index: number) => (
            <div key={question.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start gap-2 mb-4">
                <span className="font-semibold text-gray-700">Q{index + 1}.</span>
                <p className="font-medium text-gray-900">{question.questionText}</p>
              </div>
              <div className="space-y-2 ml-6">
                {question.answers.map(answer => (
                  <label
                    key={answer.id}
                    className={`flex items-center p-3 rounded-lg border cursor-pointer transition-colors ${
                      userAnswers.get(question.id) === answer.id
                        ? 'bg-indigo-50 border-indigo-300'
                        : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={answer.id}
                      checked={userAnswers.get(question.id) === answer.id}
                      onChange={() => handleAnswerSelect(question.id, answer.id)}
                      className="mr-3 h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span className="text-gray-700">{answer.answerText}</span>
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
            className={`px-8 py-3 rounded-lg font-semibold text-white transition-colors ${
              submitting || userAnswers.size !== quiz.questions.length
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-indigo-600 hover:bg-indigo-700'
            }`}
          >
            {submitting ? 'Submitting...' : 'Submit Quiz'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Quiz

