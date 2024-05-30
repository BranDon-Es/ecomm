import React from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/HomePage.css';

const HomePage = () => {
  const featuredProducts = [
    { id: 1, name: 'Phone', description: 'Smartphone', price: 500 },
    { id: 2, name: 'Tablet', description: 'Tablet device', price: 700 },
    // Add more products as needed
  ];

  const newProducts = [
    { id: 3, name: 'New Phone', description: 'Latest smartphone', price: 800 },
    { id: 4, name: 'New Tablet', description: 'Newest tablet', price: 900 },
    // Add more products as needed
  ];

  const topDeals = [
    { id: 5, name: 'Deal Phone', description: 'Discounted smartphone', price: 300 },
    { id: 6, name: 'Deal Tablet', description: 'Discounted tablet', price: 500 },
    // Add more products as needed
  ];

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
          {newProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <a href="/new-arrivals" className="view-more">View More</a>
      </section>
      <section className="section-container" style={{ backgroundColor: '#e1bee7' }}>
        <h2>Top Deals</h2>
        <div className="product-grid">
          {topDeals.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <a href="/top-deals" className="view-more">View More</a>
      </section>
    </div>
  );
};

export default HomePage;
