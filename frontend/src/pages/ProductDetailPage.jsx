import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ProductDetailPage.css';

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = {
    id: 1,
    name: 'Phone',
    description: 'Latest smartphone with all the features you need.',
    price: 500,
    details: 'This smartphone comes with a 6.5-inch display, 128GB storage, and a 48MP camera.',
  };

  return (
    <div className="product-detail-page-container">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p className="product-price">${product.price}</p>
      <p>{product.details}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetailPage;
