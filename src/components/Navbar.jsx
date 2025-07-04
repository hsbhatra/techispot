import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from '../style/Navbar.module.css';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('loggedInUser');
    setIsLoggedIn(!!user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setIsLoggedIn(false);
    navigate('/login');
    setIsMenuOpen(false);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>🧠 Techispot</div>

      {/* Hamburger */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        ☰
      </div>

      {/* Nav Links */}
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.showMenu : ''}`}>
        <li><NavLink to="/" onClick={() => setIsMenuOpen(false)}>🏠 Home</NavLink></li>
        <li><NavLink to="/news" onClick={() => setIsMenuOpen(false)}>📰 Tech News</NavLink></li>
        <li><NavLink to="/memes" onClick={() => setIsMenuOpen(false)}>😂 Memes</NavLink></li>
        <li><NavLink to="/projects" onClick={() => setIsMenuOpen(false)}>🚀 Projects</NavLink></li>
        <li>
          {isLoggedIn ? (
            <button className={styles.logoutBtn} onClick={handleLogout}>🚪 Logout</button>
          ) : (
            <NavLink to="/login" onClick={() => setIsMenuOpen(false)}>🔐 Login</NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
