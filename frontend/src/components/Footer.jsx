// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importing social media icons
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="social-media">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="footer-icon" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="footer-icon" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="footer-icon" />
        </a>
      </div>
      <div className="rights-reserved">
        &copy; {new Date().getFullYear()} Zero to One. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
