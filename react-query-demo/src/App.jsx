import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';
import PostsComponent from './components/PostsComponent';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function App() {
  const [showPosts, setShowPosts] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 shadow-lg">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-4">
              React Query Demo
            </h1>
            <p className="text-center text-lg opacity-90">
              Advanced Data Handling with React Query
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          {/* Demo Controls */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              React Query Features Demo
            </h2>
            <div className="flex gap-4">
              <button
                onClick={() => setShowPosts(!showPosts)}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
              >
                {showPosts ? 'Hide Posts (Unmount)' : 'Show Posts (Mount)'}
              </button>
              {!showPosts && (
                <p className="text-gray-600 py-2">
                  💡 Toggle back to see cached data load instantly!
                </p>
              )}
            </div>
            <div className="mt-4 text-sm text-gray-600">
              <p className="mb-2">
                <strong>Caching:</strong> Data is cached for 5 minutes
              </p>
              <p className="mb-2">
                <strong>Fresh Time:</strong> Data stays fresh for 60 seconds
              </p>
              <p>
                <strong>Try:</strong> Hide/show posts to see caching in action!
              </p>
            </div>
          </div>

          {/* Posts Component */}
          {showPosts ? (
            <div className="bg-gray-100 rounded-lg p-6">
              <PostsComponent />
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-12 text-center">
              <p className="text-gray-500 text-lg">Posts component unmounted</p>
              <p className="text-gray-400 text-sm mt-2">
                Click "Show Posts" to remount and see cached data
              </p>
            </div>
          )}
        </main>

        {/* Info Section */}
        <div className="container mx-auto px-4 pb-8">
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-blue-900 mb-3">
              🔍 React Query Features Demonstrated
            </h3>
            <ul className="space-y-2 text-blue-800 text-sm">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span><strong>Automatic Caching:</strong> Data is cached and reused across component mounts</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span><strong>Loading States:</strong> Built-in loading and error states</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span><strong>Manual Refetch:</strong> Click "Refetch Data" to update data on demand</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span><strong>DevTools:</strong> Open React Query DevTools (bottom-right) to inspect cache</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* React Query DevTools */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
