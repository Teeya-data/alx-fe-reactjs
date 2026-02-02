import { useState } from 'react';
import { fetchUserData, fetchAdvancedUserData } from '../services/githubService';

function Search() {
  // Form inputs
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  
  // Results and state
  const [userData, setUserData] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isAdvancedSearch, setIsAdvancedSearch] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setError(false);
    setUserData(null);
    setUsers([]);
    
    if (!username.trim() && !location.trim() && !minRepos) {
      return;
    }

    setLoading(true);

    try {
      // Check if using advanced search (location or minRepos specified)
      if (location || minRepos) {
        setIsAdvancedSearch(true);
        const data = await fetchAdvancedUserData({ 
          username, 
          location, 
          minRepos: minRepos ? parseInt(minRepos) : null 
        });
        setUsers(data.items || []);
      } else {
        // Simple username search
        setIsAdvancedSearch(false);
        const data = await fetchUserData(username);
        setUserData(data);
      }
      setError(false);
    } catch (err) {
      setError(true);
      setUserData(null);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Search Form */}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* Username Input */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="e.g., octocat"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Location Input */}
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <input
              id="location"
              type="text"
              placeholder="e.g., San Francisco"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Min Repositories Input */}
          <div>
            <label htmlFor="minRepos" className="block text-sm font-medium text-gray-700 mb-2">
              Min Repositories
            </label>
            <input
              id="minRepos"
              type="number"
              placeholder="e.g., 10"
              value={minRepos}
              onChange={(e) => setMinRepos(e.target.value)}
              min="0"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
        >
          Search
        </button>
      </form>

      {/* Loading State */}
      {loading && (
        <div className="text-center py-8">
          <p className="text-gray-600 text-lg">Loading...</p>
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="text-red-700 text-center">Looks like we cant find the user</p>
        </div>
      )}

      {/* Single User Result (Simple Search) */}
      {userData && !loading && !error && !isAdvancedSearch && (
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-200">
          <div className="flex flex-col md:flex-row gap-6">
            <img 
              src={userData.avatar_url} 
              alt={`${userData.login}'s avatar`}
              className="w-32 h-32 rounded-full border-4 border-gray-200"
            />
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {userData.name || userData.login}
              </h2>
              <p className="text-gray-600 mb-2">@{userData.login}</p>
              {userData.bio && (
                <p className="text-gray-700 mb-3">{userData.bio}</p>
              )}
              {userData.location && (
                <p className="text-gray-600 mb-2">📍 {userData.location}</p>
              )}
              <p className="text-gray-600 mb-4">📚 {userData.public_repos} repositories</p>
              <a 
                href={userData.html_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-md transition duration-200"
              >
                View GitHub Profile
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Multiple Users Results (Advanced Search) */}
      {users.length > 0 && !loading && !error && isAdvancedSearch && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Found {users.length} user{users.length !== 1 ? 's' : ''}
          </h3>
          {users.map((user) => (
            <div 
              key={user.id} 
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-200"
            >
              <div className="flex items-center gap-4">
                <img 
                  src={user.avatar_url} 
                  alt={`${user.login}'s avatar`}
                  className="w-16 h-16 rounded-full border-2 border-gray-200"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{user.login}</h3>
                  <a 
                    href={user.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    View Profile →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
