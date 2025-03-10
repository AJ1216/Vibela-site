import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './MobileMenu.css';

const MobileMenu = ({ navLinks, logo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const toggleDropdown = useCallback((index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  }, [openDropdown]);

  return (
    <nav className="mobile-navbar">
      <div className="mobile-container">
        <button
          className="hamburger-menu"
          aria-label="Open Menu"
          onClick={toggleMenu}
        >
          ☰
        </button>
        {logo && (
          <Link to="/">
            <img src={logo} alt="Vibela Logo" className="mobile-logo" />
          </Link>
        )}
        <div className="mobile-search-container">
          <input
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
      </div>
      {isMenuOpen && (
        <div className="mobile-menu">
          <button
            className="close-menu"
            aria-label="Close Menu"
            onClick={closeMenu}
          >
            ✖
          </button>
          <div className="mobile-search-bar">
            <input
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
          <ul className="mobile-nav-list">
            {navLinks &&
              navLinks.map((link, index) => (
                <li key={index} className="mobile-menu-item">
                  <div className="menu-link">
                    <Link to={link.path} onClick={closeMenu}>
                      {link.name}
                    </Link>
                    {link.subLinks && (
                      <button
                        className="dropdown-toggle"
                        onClick={() => toggleDropdown(index)}
                        aria-haspopup="true"
                        aria-expanded={openDropdown === index}
                      >
                        {openDropdown === index ? '▲' : '▼'}
                      </button>
                    )}
                  </div>
                  {link.subLinks && openDropdown === index && (
                    <ul className="mobile-dropdown">
                      {link.subLinks.map((subLink, subIndex) => (
                        <li key={subIndex} className="mobile-dropdown-item">
                          <Link to={subLink.path} onClick={closeMenu}>
                            {subLink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default MobileMenu;
