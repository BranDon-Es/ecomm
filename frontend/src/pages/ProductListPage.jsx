import React from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/ProductListPage.css';

const ProductListPage = () => {
  const products = [
    { id: 1, name: 'Phone', description: 'Smartphone', price: 500 },
    { id: 2, name: 'Tablet', description: 'Tablet device', price: 700 },
    { id: 3, name: 'Gaming Console', description: 'Latest console', price: 300 },
    // Add more products as needed
  ];

  return (
    <div className="product-list-page-container">
      <h1>Products</h1>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
