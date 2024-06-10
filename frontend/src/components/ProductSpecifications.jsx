// src/components/ProductSpecifications.jsx
import React from 'react';
import '../styles/ProductSpecifications.css';

const ProductSpecifications = ({ specifications }) => {
  if (!specifications || specifications.length === 0) {
    return null; // Avoid rendering if there are no specifications
  }

  return (
    <div className="product-specifications">
      <h3>Specifications</h3>
      <ul>
        {specifications.map(spec => (
          <li key={spec.id}>
            <strong>{spec.specification}: </strong>
            {spec.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductSpecifications;
