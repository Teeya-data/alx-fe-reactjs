import './App.css'
import Search from './components/Search'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">GitHub User Search Application</h1>
        <p className="text-lg text-gray-600">Search for GitHub users and view their profiles</p>
      </header>
      <main>
        <Search />
      </main>
    </div>
  )
}

export default App
