// src/api.js
import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api'; // Replace with your backend URL

export const fetchProducts = async (category = '', searchQuery = '') => {
  try {
    let url = `${BASE_URL}/products/`;
    if (category) {
      url += `?category=${category}`;
    }
    if (searchQuery) {
      url += `${category ? '&' : '?'}q=${searchQuery}`;
    }
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
