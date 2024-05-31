import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaShoppingCart, FaSearch, FaBars, FaTimes } from 'react-icons/fa'; // Importing icons
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle the search logic here
  };

  return (
    <header className="header-container">
      <div className="logo">
        <Link to="/">Zero to One</Link>
      </div>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="icon-container">
        <FaSearch className="header-icon" onClick={toggleSearch} />
        <Link to="/account">
          <FaUser className="header-icon" />
        </Link>
        <Link to="/cart">
          <FaShoppingCart className="header-icon" />
        </Link>
        <FaBars className="header-icon menu-toggle" onClick={toggleMenu} />
      </div>
      {isSearchOpen && (
        <form className="search-form" onSubmit={handleSearchSubmit}>
          <FaSearch className="header-icon search-submit-icon" onClick={handleSearchSubmit} />
          <input type="text" placeholder="Search..." />
          <FaTimes className="header-icon close-search" onClick={toggleSearch} />
        </form>
      )}
    </header>
  );
};

export default Header;
