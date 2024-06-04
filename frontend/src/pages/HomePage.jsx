// HomePage.jsx
import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/HomePage.css';

const HomePage = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  const [topDeals, setTopDeals] = useState([]);

  useEffect(() => {
    // Fetch featured products from the backend API
    fetch('/api/featured-products/')
      .then(response => response.json())
      .then(data => setFeaturedProducts(data))
      .catch(error => console.error('Error fetching featured products:', error));

    // Fetch new products from the backend API
    fetch('/api/new-products/')
      .then(response => response.json())
      .then(data => setNewProducts(data))
      .catch(error => console.error('Error fetching new products:', error));

    // Fetch top deals from the backend API
    fetch('/api/top-deals/')
      .then(response => response.json())
      .then(data => setTopDeals(data))
      .catch(error => console.error('Error fetching top deals:', error));
  }, []);

  return (
    <div className="home-page-container">
      <div className="hero-section-container">
        <section className="hero-section">
          <div className="hero-content">
            <h1>Zero to One</h1>
            <p>Discover the latest gadgets at unbeatable prices</p>
            <button className="hero-cta">Shop Now</button>
          </div>
        </section>
      </div>
      <section className="section-container">
        <h2>Popular Products</h2>
        <div className="product-grid">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <a href="/popular-products" className="view-more">View More</a>
      </section>
      <section className="section-container" style={{ backgroundColor: '#e0f7fa' }}>
        <h2>New Arrivals</h2>
        <div className="product-grid">
          {newProducts.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <a href="/new-arrivals" className="view-more">View More</a>
      </section>
      <section className="section-container" style={{ backgroundColor: '#e1bee7' }}>
        <h2>Top Deals</h2>
        <div className="product-grid">
          {topDeals.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <a href="/top-deals" className="view-more">View More</a>
      </section>
    </div>
  );
};

export default HomePage;
