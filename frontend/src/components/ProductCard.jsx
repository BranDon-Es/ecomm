import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const mainImage = product.images.find(image => image.is_main);
  const { addItemToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    addItemToCart(product, 1);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000); // Show message for 2 seconds
  };

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
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        <FaCartPlus className="cart-icon" />
      </button>
      {addedToCart && <div className="added-to-cart-message">Added to Cart</div>}
    </div>
  );
};

export default ProductCard;
