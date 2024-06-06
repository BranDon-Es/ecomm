// src/pages/ProductListPage.jsx
import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import CategoryBar from '../components/CategoryBar';
import { fetchProducts, fetchCategories } from '../api';
import '../styles/ProductListPage.css';
import { useLocation } from 'react-router-dom';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const query = useQuery();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const category = selectedCategory;
        const searchQuery = query.get('q') || '';
        const data = await fetchProducts(category, searchQuery);
        setProducts(data);
      } catch (error) {
        console.error('Error loading products:', error);
      }
    };

    loadProducts();
  }, [selectedCategory, query]);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (error) {
        console.error('Error loading categories:', error);
      }
    };

    loadCategories();
  }, []);

  return (
    <div className="products-page-container">
      <h1>Products</h1>
      <CategoryBar
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
