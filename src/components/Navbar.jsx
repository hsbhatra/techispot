import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from '../style/Navbar.module.css';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check login state on load
  useEffect(() => {
    const user = localStorage.getItem('loggedInUser');
    setIsLoggedIn(!!user);
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setIsLoggedIn(false);
    navigate('/login'); // redirect to login
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>🧠 Techispot</div>
      <ul className={styles.navLinks}>
        <li><NavLink to="/" activeclassname={styles.active}>🏠 Home</NavLink></li>
        <li><NavLink to="/news" activeclassname={styles.active}>📰 Tech News</NavLink></li>
        <li><NavLink to="/memes" activeclassname={styles.active}>😂 Memes</NavLink></li>
        <li><NavLink to="/projects" activeclassname={styles.active}>🚀 Projects</NavLink></li>

        {/* Show Login or Logout based on state */}
        <li>
          {isLoggedIn ? (
            <button className={styles.logoutBtn} onClick={handleLogout}>🚪 Logout</button>
          ) : (
            <NavLink to="/login" activeclassname={styles.active}>🔐 Login</NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
