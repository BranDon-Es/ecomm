// src/components/CategoryBar.jsx

import React from 'react';
import '../styles/CategoryBar.css';

const CategoryBar = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="category-bar">
      {categories.map(category => (
        <div
          key={category.id}
          className={`category ${selectedCategory === category.id ? 'active' : ''}`}
          onClick={() => setSelectedCategory(category.id)}
        >
          {category.image && (
            <img
              src={category.image} // Assuming the image URL is stored directly in the category object
              alt={category.name}
              className="category-image"
            />
          )}
          <span className="category-name">{category.name}</span>
        </div>
      ))}
    </div>
  );
};

export default CategoryBar;
