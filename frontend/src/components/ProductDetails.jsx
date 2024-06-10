// src/components/ProductDetails.jsx
import React from 'react';
import '../styles/ProductDetails.css';

const ProductDetails = ({ product }) => {
  return (
    <div className="product-details">
      <h1 className="product-name">{product.name}</h1>
      <p className="product-description">{product.description}</p>
      <div className="product-price">${product.price}</div>
      <button className="add-to-cart-btn">Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
