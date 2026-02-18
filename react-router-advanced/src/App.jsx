import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider, useAuth } from './hooks/useAuth.jsx';
import Home from './components/Home';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import BlogPost from './components/BlogPost';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';

function Navigation() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-xl font-bold text-blue-600">
            React Router Advanced
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link to="/profile" className="text-gray-700 hover:text-blue-600">
              Profile
            </Link>
            <Link to="/blog/1" className="text-gray-700 hover:text-blue-600">
              Blog
            </Link>
            {isAuthenticated ? (
              <button
                onClick={logout}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navigation />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              >
                <Route index element={<ProfileDetails />} />
                <Route path="settings" element={<ProfileSettings />} />
              </Route>

              <Route path="/blog/:id" element={<BlogPost />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
