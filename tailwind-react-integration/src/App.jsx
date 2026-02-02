import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
          Tailwind CSS Integration
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          Successfully integrated Tailwind CSS with React + Vite
        </p>
        
        <div className="bg-blue-50 rounded-lg p-6 mb-6">
          <div className="text-center mb-4">
            <span className="text-6xl font-bold text-blue-600">{count}</span>
          </div>
          <button
            onClick={() => setCount((count) => count + 1)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
          >
            Click me: {count}
          </button>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
            <span className="text-green-700 font-medium">✓ React</span>
            <span className="text-green-600 text-sm">Installed</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
            <span className="text-green-700 font-medium">✓ Vite</span>
            <span className="text-green-600 text-sm">Configured</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
            <span className="text-green-700 font-medium">✓ Tailwind CSS</span>
            <span className="text-green-600 text-sm">Working!</span>
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          Edit <code className="bg-gray-100 px-2 py-1 rounded text-xs">src/App.jsx</code> to start building
        </p>
      </div>
    </div>
  )
}

export default App
