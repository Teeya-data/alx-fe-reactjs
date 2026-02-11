import { useState } from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 to-red-500">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            🍳 Recipe Sharing Platform
          </h1>
          <p className="text-xl text-white opacity-90">
            Discover and share amazing recipes from around the world
          </p>
        </header>

        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-2xl p-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              ✅ Tailwind CSS Integration Successful!
            </h2>
            <p className="text-gray-600">
              Your Recipe Sharing Platform is ready for development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">📖</div>
              <h3 className="font-semibold text-blue-800">Browse Recipes</h3>
              <p className="text-sm text-blue-600">Explore collection</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">➕</div>
              <h3 className="font-semibold text-green-800">Add Recipe</h3>
              <p className="text-sm text-green-600">Share your creation</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">👥</div>
              <h3 className="font-semibold text-purple-800">Community</h3>
              <p className="text-sm text-purple-600">Connect with chefs</p>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              Start Cooking 🍽️
            </button>
          </div>

          <div className="mt-8 space-y-2">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="text-green-700 font-medium">✓ React</span>
              <span className="text-green-600 text-sm">Configured</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="text-green-700 font-medium">✓ Vite</span>
              <span className="text-green-600 text-sm">Ready</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="text-green-700 font-medium">✓ Tailwind CSS</span>
              <span className="text-green-600 text-sm">Working!</span>
            </div>
          </div>
        </div>

        <footer className="text-center mt-12">
          <p className="text-white text-sm opacity-75">
            Recipe Sharing Platform • Built with React & Tailwind CSS
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App
