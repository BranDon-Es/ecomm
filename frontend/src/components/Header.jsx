import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {FaUser, FaShoppingCart, FaSearch, FaBars, FaTimes} from 'react-icons/fa';
import '../styles/Header.css';
import logo from '../assets/logo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/products?q=${searchQuery}`);
            setIsSearchOpen(false);
        }
    };

    const handleAccountClick = () => {
        const accessToken = localStorage.getItem('access_token');
        if (accessToken) {
            navigate('/account');
        } else {
            navigate('/login');
        }
    };

    return (
        <header className="header-container">
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="Zero to One"/>
                </Link>
            </div>
            <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
            <div className="icon-container">
                <FaSearch className="header-icon" onClick={toggleSearch}/>
                <FaUser className="header-icon" onClick={handleAccountClick}/>
                <Link to="/cart">
                    <FaShoppingCart className="header-icon"/>
                </Link>
                <FaBars className="header-icon menu-toggle" onClick={toggleMenu}/>
            </div>
            {isSearchOpen && (
                <form className="search-form" onSubmit={handleSearchSubmit}>
                    <FaSearch className="header-icon search-submit-icon" onClick={handleSearchSubmit}/>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <FaTimes className="header-icon close-search" onClick={toggleSearch}/>
                </form>
            )}
        </header>
    );
};

export default Header;
