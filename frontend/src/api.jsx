// src/api.js
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
