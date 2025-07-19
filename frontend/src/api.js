import axios from 'axios';

const api = axios.create({
  baseURL: 'https://main-ecoglam.onrender.com/',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, 
});

export const signup = async (userData) => {
  try {
    console.log("Sending signup data:", userData);
    const response = await api.post('/signup', userData);
    return response.data;
  } catch (error) {
    // Check if the error response exists and handle accordingly
    if (error.response) {
      // If the backend sent a response with an error status
      console.error("Error response:", error.response.data);
      throw new Error(error.response.data.message || 'An error occurred during signup');
    } else if (error.request) {
      // If no response was received from the backend
      console.error("Error request:", error.request);
      throw new Error('No response received from server');
    } else {
      // Other errors (e.g., network error)
      console.error("Error message:", error.message);
      throw new Error('An unexpected error occurred');
    }
  }
};

export const login = async (userData) => {
  try {
    const response = await api.post('/login', userData);
    return response.data;
  } catch (error) {
    // Check if the error response exists and handle accordingly
    if (error.response) {
      // If the backend sent a response with an error status
      console.error("Error response:", error.response.data);
      throw new Error(error.response.data.message || 'An error occurred during login');
    } else if (error.request) {
      // If no response was received from the backend
      console.error("Error request:", error.request);
      throw new Error('No response received from server');
    } else {
      // Other errors (e.g., network error)
      console.error("Error message:", error.message);
      throw new Error('An unexpected error occurred');
    }
  }
};

export default api;
