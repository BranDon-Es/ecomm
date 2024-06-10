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
    localStorage.setItem('access', access);
    localStorage.setItem('refresh', refresh);

    return response.data;
  } catch (error) {
    console.error('Error during login:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const logout = () => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    window.location.href = '/login';
};


export const getAccountDetails = async () => {
  const token = localStorage.getItem('access'); // Ensure this is the correct token
  try {
    const response = await axios.get(`${BASE_URL}/users/account/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching account details:', error.response ? error.response.data : error.message);
    throw error;
  }
};
