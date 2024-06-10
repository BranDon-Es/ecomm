// src/components/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const mainImage = product.images.find(image => image.is_main);

  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`} className="product-link">
        <img
          src={mainImage ? mainImage.image : 'placeholder-image-url'}
          alt={product.name}
          className="product-image"
        />
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <div className="product-price">${product.price}</div>
        </div>
      </Link>
      <button className="add-to-cart-btn" onClick={() => console.log('Add to cart:', product)}>
        <FaCartPlus className="cart-icon" />
      </button>
    </div>
  );
};

export default ProductCard;
