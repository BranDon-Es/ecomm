import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaShoppingCart, FaSearch, FaTimes } from 'react-icons/fa';
import '../styles/Header.css';

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = () => {
    console.log('Search query:', searchQuery);
    // Implement search functionality here
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setSearchOpen(false);
  };

  return (
    <header className="header-container">
      <div className={`header-content ${searchOpen ? 'hidden' : ''}`}>
        <div className="logo">
          <Link to="/">Zero to One</Link>
        </div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="icon-container">
          <Link to="/search">
            <FaSearch className="header-icon" onClick={handleSearchToggle} />
          </Link>
          <Link to="/account">
            <FaUser className="header-icon" />
          </Link>
          <Link to="/cart">
            <FaShoppingCart className="header-icon" />
          </Link>
        </div>
      </div>
      {searchOpen && (
        <div className="search-container">
          <button className="clear-search" onClick={handleClearSearch}>
            <FaTimes className="header-icon" />
          </button>
          <input
            type="text"
            className="search-input"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
          />
          <button className="search-submit" onClick={handleSearchSubmit}>
            <FaSearch className="header-icon" />
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
