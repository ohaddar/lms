import { useNavigate } from 'react-router-dom'
import { Layout } from '../components'

export const Congratulations = () => {
  const navigate = useNavigate()

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="max-w-3xl w-full text-center animate-scale-in">
          {/* Trophy Icon */}
          <div className="mb-8 relative">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-2xl animate-bounce-slow">
              <svg
                className="w-20 h-20 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            {/* Confetti decorations */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 text-6xl animate-float">
              🎉
            </div>
            <div className="absolute bottom-0 left-0 text-5xl animate-float-delayed">
              ✨
            </div>
            <div className="absolute bottom-0 right-0 text-5xl animate-float-delayed-2">
              🎊
            </div>
          </div>

          {/* Main Message */}
          <div className="bg-white rounded-3xl shadow-2xl p-12 mb-6 border border-gray-100">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Félicitations! 🎓
            </h1>
            <div className="inline-block bg-gradient-to-r from-primary-600 to-primary-800 text-white px-8 py-4 rounded-2xl shadow-large mb-6">
              <p className="text-2xl md:text-3xl font-bold">
                Bravo, tu es maintenant
              </p>
              <p className="text-3xl md:text-4xl font-black mt-2">
                Vibenengineer Certified!
              </p>
            </div>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Vous avez terminé avec succès tous les modules du cours AI
              Foundations. Votre dévouement et votre travail acharné ont porté
              leurs fruits!
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-primary-50 rounded-2xl p-6 border border-blue-200">
                <div className="text-4xl font-bold text-primary-700 mb-2">
                  3/3
                </div>
                <div className="text-sm font-semibold text-gray-700">
                  Modules Complétés
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                <div className="text-4xl font-bold text-green-700 mb-2">
                  100%
                </div>
                <div className="text-sm font-semibold text-gray-700">
                  Taux de Réussite
                </div>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-6 border border-yellow-200">
                <div className="text-4xl font-bold text-yellow-700 mb-2">
                  3/3
                </div>
                <div className="text-sm font-semibold text-gray-700">
                  Quiz Réussis
                </div>
              </div>
            </div>

            {/* Achievement Badge */}
            <div className="bg-gradient-to-br from-primary-100 to-blue-100 rounded-2xl p-8 mb-8 border-2 border-primary-300">
              <div className="flex items-center justify-center gap-4 mb-4">
                <svg
                  className="w-12 h-12 text-primary-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <h3 className="text-2xl font-bold text-primary-900">
                  Certification Obtenue
                </h3>
              </div>
              <p className="text-primary-800 font-medium">
                Vous êtes désormais certifié dans les fondamentaux de l'IA
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/modules')}
                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-200 font-semibold shadow-medium hover:shadow-large transform hover:scale-105"
              >
                Revoir les Modules
              </button>
              <button
                onClick={() => navigate('/')}
                className="px-8 py-4 bg-white text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-200 font-semibold shadow-soft hover:shadow-medium border border-gray-200"
              >
                Retour à l'Accueil
              </button>
            </div>
          </div>

          {/* Footer Message */}
          <p className="text-gray-500 text-lg">
            Continuez votre apprentissage et explorez de nouveaux horizons! 🚀
          </p>
        </div>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }
        
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-5deg);
          }
        }
        
        @keyframes float-delayed-2 {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-12px) rotate(8deg);
          }
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite 0.5s;
        }
        
        .animate-float-delayed-2 {
          animation: float-delayed-2 3s ease-in-out infinite 1s;
        }
      `}</style>
    </Layout>
  )
}
