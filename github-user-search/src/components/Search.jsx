import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setError(false);
    setUserData(null);
    
    if (!username.trim()) {
      return;
    }

    setLoading(true);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
      setError(false);
    } catch (err) {
      setError(true);
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {loading && <p className="loading-message">Loading...</p>}

      {error && !loading && (
        <p className="error-message">Looks like we cant find the user</p>
      )}

      {userData && !loading && !error && (
        <div className="user-card">
          <img 
            src={userData.avatar_url} 
            alt={`${userData.login}'s avatar`}
            className="user-avatar"
          />
          <div className="user-info">
            <h2 className="user-name">{userData.name || userData.login}</h2>
            <p className="user-login">@{userData.login}</p>
            {userData.bio && <p className="user-bio">{userData.bio}</p>}
            <a 
              href={userData.html_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="profile-link"
            >
              View GitHub Profile
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
