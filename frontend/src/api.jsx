import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api';

export const fetchProducts = async (category = '') => {
  try {
    const url = category ? `${BASE_URL}/products/?category=${category}` : `${BASE_URL}/products/`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/categories/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export const fetchProductDetail = async (productId) => {
  try {
    const response = await axios.get(`${BASE_URL}/products/${productId}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product detail:', error);
    throw error;
  }
};

const getAuthHeader = () => {
  const token = localStorage.getItem('access_token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const getAccountDetails = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users/account/`, {
      headers: getAuthHeader(),
    });
    return response.data; // Assuming response.data contains user details
  } catch (error) {
    console.error('Error fetching account details:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const signup = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/signup/`, userData);
    return response.data;
  } catch (error) {
    console.error('Error during signup:', error.response);
    throw error.response.data;
  }
};

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/login/`, credentials);
    const { access, refresh } = response.data;

    // Save tokens to localStorage
    localStorage.setItem('access_token', access);
    localStorage.setItem('refresh_token', refresh);

    return response.data;
  } catch (error) {
    console.error('Error during login:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const logout = async () => {
  try {
    const refresh_token = localStorage.getItem('refresh_token');
    await axios.post(`${BASE_URL}/users/logout/`, { refresh_token });
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    window.location.href = '/login'; // Redirect to the login page
  } catch (error) {
    console.error('Error during logout:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const updateProfile = async (userData) => {
  const token = localStorage.getItem('access_token');
  try {
    const response = await axios.put(`${BASE_URL}/users/account/`, userData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error updating profile:', error.response ? error.response.data : error.message);
    throw error.response ? error.response.data : error.message;
  }
};

export const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem('refresh_token');
  if (!refreshToken) {
    throw new Error('No refresh token available');
  }

  try {
    const response = await axios.post(`${BASE_URL}/users/token/refresh/`, { refresh: refreshToken });
    localStorage.setItem('access_token', response.data.access);
    return response.data.access;
  } catch (error) {
    console.error('Error refreshing access token:', error);
    throw error;
  }
};

// Add a request interceptor
axios.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const newAccessToken = await refreshAccessToken();
        axios.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        return axios(originalRequest);
      } catch (e) {
        // If refresh token is invalid, logout the user
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        window.location.href = '/login';
        return Promise.reject(e);
      }
    }
    return Promise.reject(error);
  }
);


export const createOrder = async (orderData) => {
  try {
    const response = await axios.post(`${BASE_URL}/orders/`, orderData, {
      headers: getAuthHeader(),
    });
    return response.data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};