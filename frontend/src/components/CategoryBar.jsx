// src/components/CategoryBar.jsx
import React from 'react';
import '../styles/CategoryBar.css';

const CategoryBar = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="category-bar">
      <button
        className={selectedCategory === '' ? 'active' : ''}
        onClick={() => setSelectedCategory('')}
      >
        All Categories
      </button>
      {categories.map(category => (
        <button
          key={category.id}
          className={selectedCategory === category.id ? 'active' : ''}
          onClick={() => setSelectedCategory(category.id)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryBar;
