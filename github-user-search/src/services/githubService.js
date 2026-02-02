import axios from 'axios';

const BASE_URL = import.meta.env.VITE_GITHUB_API_URL || 'https://api.github.com';
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

// Create axios instance with base configuration
const githubAPI = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // Add authorization header if API key is available
    ...(API_KEY && { Authorization: `token ${API_KEY}` }),
  },
});

/**
 * Search for GitHub users
 * @param {string} username - The username to search for
 * @returns {Promise} - Promise with user data
 */
export const searchUsers = async (username) => {
  try {
    const response = await githubAPI.get(`/search/users?q=${username}`);
    return response.data;
  } catch (error) {
    console.error('Error searching users:', error);
    throw error;
  }
};

/**
 * Get detailed information about a specific user
 * @param {string} username - The username to get details for
 * @returns {Promise} - Promise with user details
 */
export const getUserDetails = async (username) => {
  try {
    const response = await githubAPI.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw error;
  }
};

/**
 * Fetch user data from GitHub API
 * @param {string} username - The username to fetch
 * @returns {Promise} - Promise with user data
 */
export const fetchUserData = async (username) => {
  try {
    const response = await githubAPI.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

/**
 * Advanced search for GitHub users with multiple criteria
 * @param {Object} params - Search parameters
 * @param {string} params.username - Username to search for
 * @param {string} params.location - Location filter
 * @param {number} params.minRepos - Minimum number of repositories
 * @returns {Promise} - Promise with search results
 */
export const fetchAdvancedUserData = async ({ username, location, minRepos }) => {
  try {
    // Build query string with multiple parameters
    let query = '';
    
    if (username) {
      query += username;
    }
    
    if (location) {
      query += `+location:${location}`;
    }
    
    if (minRepos) {
      query += `+repos:>=${minRepos}`;
    }
    
    const response = await githubAPI.get(`/search/users?q=${query}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching advanced user data:', error);
    throw error;
  }
};

export default githubAPI;
