import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaShoppingCart, FaSearch } from 'react-icons/fa'; // Importing icons
import { FiMenu } from 'react-icons/fi'; // Importing a more stylish menu icon
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest('.header-container')) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <header className="header-container">
      <div className="logo">
        <Link to="/">Zero to One</Link>
      </div>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/products" onClick={closeMenu}>Products</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
      </nav>
      <div className="icon-container">
        <Link to="/search">
          <FaSearch className="header-icon" />
        </Link>
        <Link to="/account">
          <FaUser className="header-icon" />
        </Link>
        <Link to="/cart">
          <FaShoppingCart className="header-icon" />
        </Link>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <FiMenu />
      </div>
    </header>
  );
};

export default Header;
