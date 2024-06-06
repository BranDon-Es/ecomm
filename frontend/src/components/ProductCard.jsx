import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const mainImage = product.images.find(image => image.is_main);

  const handleAddToCart = () => {
    // Implement your logic for adding the product to the cart
    console.log('Product added to cart:', product);
  };

  return (
    <div className="product-card">
      <img
        src={mainImage ? mainImage.image : 'placeholder-image-url'}
        alt={product.name}
        className="product-image"
      />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <div className="product-price">${product.price}</div>
      </div>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        <FaCartPlus className="cart-icon" />

      </button>
    </div>
  );
};

export default ProductCard;
