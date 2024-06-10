// src/components/AddToCartButton.jsx
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import '../styles/AddToCartButton.css';

const AddToCartButton = () => {
  const handleAddToCart = () => {
    // Add to cart logic
  };

  return (
    <button className="add-to-cart-btn" onClick={handleAddToCart}>
      <FaShoppingCart className="cart-icon" />
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
