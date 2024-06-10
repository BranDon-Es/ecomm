import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api'; // Replace with your backend URL

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
    return response.data;
  } catch (error) {
    console.error('Error during login:', error.response);
    throw error;
  }
};