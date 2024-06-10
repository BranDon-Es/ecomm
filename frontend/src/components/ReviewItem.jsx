// src/components/ReviewItem.jsx
import React from 'react';
import '../styles/ReviewItem.css';

const ReviewItem = ({ review }) => (
  <div className="review">
    <p><strong>{review.reviewer_name}</strong> ({review.rating}/5)</p>
    <p>{review.review_text}</p>
  </div>
);

export default ReviewItem;
