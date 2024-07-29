// src/components/Header.jsx
import '../styles/Styles.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <button 
        className="menu-toggle" 
        onClick={toggleMenu} 
        aria-expanded={menuOpen} 
        aria-label="Toggle menu"
      >
        ☰
      </button>
      <nav>
        <ul className={menuOpen ? 'show' : ''}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/login" onClick={closeMenu}>Login</Link></li>
          <li><Link to="/register" onClick={closeMenu}>Register</Link></li>
          <li><Link to="/profile" onClick={closeMenu}>Profile</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
