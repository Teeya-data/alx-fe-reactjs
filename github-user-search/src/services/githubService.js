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

export default githubAPI;
