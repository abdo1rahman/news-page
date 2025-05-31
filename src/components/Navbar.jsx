import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <img src="/assets/images/logo.svg" alt="logo" className="logo" />

      <button
        className={`menu-button ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? (
          <span className="close-icon">
            <img src="/assets/images/icon-menu-close.svg" alt="" />
          </span>
        ) : (
          <span className="hamburger-icon">
            <img src="/assets/images/icon-menu.svg" alt="" />
          </span>
        )}
      </button>

      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <a href="#home" onClick={toggleMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={toggleMenu}>
            New
          </a>
        </li>
        <li>
          <a href="#contact" onClick={toggleMenu}>
            Popular
          </a>
        </li>
        <li>
          <a href="#trending" onClick={toggleMenu}>
            Trending
          </a>
        </li>
        <li>
          <a href="#categories" onClick={toggleMenu}>
            Categories
          </a>
        </li>
      </ul>
    </nav>
  );
}
