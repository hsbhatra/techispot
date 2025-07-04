import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../style/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>🧠 Techispot</div>
      <ul className={styles.navLinks}>
        <li><NavLink to="/" activeclassname={styles.active}>🏠 Home</NavLink></li>
        <li><NavLink to="/news" activeclassname={styles.active}>📰 Tech News</NavLink></li>
        <li><NavLink to="/memes" activeclassname={styles.active}>😂 Memes</NavLink></li>
        <li><NavLink to="/projects" activeclassname={styles.active}>🚀 Projects</NavLink></li>
        <li><NavLink to="/signin" activeclassname={styles.active}>🔐 Sign In</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
