// src/components/ProductReviews.jsx
import React from 'react';
import '../styles/ProductReviews.css';

const ProductReviews = ({ reviews }) => {
  if (!reviews || reviews.length === 0) {
    return <p>No reviews yet.</p>;
  }

  return (
    <div className="product-reviews">
      <h2>Reviews</h2>
      {reviews.map((review, index) => (
        <div key={index} className="review">
          <h4>{review.reviewer_name}</h4>
          <p>{review.review_text}</p>
          <div>Rating: {review.rating}</div>
        </div>
      ))}
    </div>
  );
};

export default ProductReviews;
