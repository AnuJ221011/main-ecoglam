import axios from 'axios';

const api = axios.create({
  baseURL: 'https://main-ecoglam-72dt.vercel.app',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// Add request interceptor to include auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const signup = async (userData) => {
  try {
    console.log("Sending signup data:", userData);
    const response = await api.post('/signup', userData);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Error response:", error.response.data);
      throw new Error(error.response.data.message || 'An error occurred during signup');
    } else if (error.request) {
      console.error("Error request:", error.request);
      throw new Error('No response received from server');
    } else {
      console.error("Error message:", error.message);
      throw new Error('An unexpected error occurred');
    }
  }
};

export const login = async (userData) => {
  try {
    const response = await api.post('/login', userData);
    // Store token in localStorage after successful login
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Error response:", error.response.data);
      throw new Error(error.response.data.message || 'An error occurred during login');
    } else if (error.request) {
      console.error("Error request:", error.request);
      throw new Error('No response received from server');
    } else {
      console.error("Error message:", error.message);
      throw new Error('An unexpected error occurred');
    }
  }
};

// Function to make authenticated requests
export const makeAuthenticatedRequest = async (url, method = 'GET', data = null) => {
  try {
    const config = {
      method,
      url,
      data,
    };
    
    const response = await api(config);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || 'An error occurred');
    } else if (error.request) {
      throw new Error('No response received from server');
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

export default api;