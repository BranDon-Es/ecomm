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
    return response.data;
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


