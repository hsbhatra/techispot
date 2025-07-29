// ============================================================================
// NAVBAR COMPONENT - Main Navigation Bar
// ============================================================================
// This component provides the main navigation interface for the application
// It includes responsive design, authentication state management, and navigation links

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

// ============================================================================
// NAVBAR COMPONENT DEFINITION
// ============================================================================
export default function NavBar() {
  // ============================================================================
  // STATE MANAGEMENT
  // ============================================================================
  // Manage component state using React hooks
  const [menuOpen, setMenuOpen] = useState(false);        // Control mobile menu visibility
  const [isLoggedIn, setIsLoggedIn] = useState(false);   // Track user authentication status
  const [profileImage, setProfileImage] = useState("");  // Store user's profile image URL

  // ============================================================================
  // EFFECT HOOK - INITIALIZATION
  // ============================================================================
  // Run once on component mount to initialize authentication state
  useEffect(() => {
    // Check if user is logged in from localStorage
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    
    // Get user's profile image from localStorage or use default
    const storedProfile = localStorage.getItem("profileImage");

    // Update component state
    setIsLoggedIn(loggedIn);
    setProfileImage(
      storedProfile ||
        "https://cdn-icons-png.flaticon.com/512/747/747545.png" // Default profile image
    );
  }, []); // Empty dependency array means this runs only once on mount

  // ============================================================================
  // NAVIGATION ITEMS CONFIGURATION
  // ============================================================================
  // Define all navigation links with their icons and paths
  const navItems = [
    {
      name: "Home",
      path: "/",
      icon: "https://img.icons8.com/?size=100&id=42814&format=png&color=000000", // Home icon
    },
    {
      name: "Tech News",
      path: "/news",
      icon: "https://img.icons8.com/?size=100&id=42835&format=png&color=000000", // News icon
    },
    {
      name: "Tech Memes",
      path: "/meme",
      icon: "https://img.icons8.com/?size=100&id=b707MDsAkIoy&format=png&color=000000", // Meme icon
    },
    {
      name: "Tech Projects",
      path: "/notes",
      icon: "https://img.icons8.com/?size=100&id=b707MDsAkIoy&format=png&color=000000", // Projects icon
    },
  ];

  // ============================================================================
  // STYLING CONFIGURATION
  // ============================================================================
  // Define active link styling for current page indication
  const activeStyle = {
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#1a73e8",
    padding: "10px",
    borderRadius: "12px",
  };

  // ============================================================================
  // EVENT HANDLERS
  // ============================================================================
  // Handle user logout functionality
  const handleLogout = () => {
    // Remove user data from localStorage
    localStorage.removeItem("loggedInUser");
    localStorage.setItem("isLoggedIn", "false");
    
    // Update component state to reflect logout
    setIsLoggedIn(false);
  };

  // ============================================================================
  // COMPONENT RENDER
  // ============================================================================
  return (
    <nav className={styles.navbar}>
      {/* Brand/Logo Section */}
      <div className={styles.brand}>
        {/* Application Logo */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
          alt="TechiSpot Logo"
          className={styles.logoIcon}
        />
        
        {/* Application Title */}
        <span className={styles.siteTitle}>TechiSpot</span>
        
        {/* Mobile Menu Toggle Button */}
        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Navigation Links List */}
      <ul className={`${styles.navList} ${menuOpen ? styles.showMenu : ""}`}>
        {/* Map through navigation items to create links */}
        {navItems.map((item) => (
          <li key={item.path} className={styles.navItem}>
            <NavLink
              exact
              to={item.path}
              className={styles.navLink}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={() => setMenuOpen(false)} // Close mobile menu when link is clicked
            >
              {/* Navigation Item Icon */}
              <img
                src={item.icon}
                alt={`${item.name} Icon`}
                className={styles.navIcon}
              />
              {/* Navigation Item Text */}
              {item.name}
            </NavLink>
          </li>
        ))}

        {/* Authentication Section */}
        <li className={styles.navItem}>
          {isLoggedIn ? (
            // Logged in user display with logout option
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              {/* User Profile Picture */}
              <img
                src={profileImage}
                alt="Profile"
                className={styles.profilePic}
              />
              
              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className={styles.navLink}
                style={{
                  background: "none",
                  border: "none",
                  color: "#fff",
                  cursor: "pointer",
                  fontWeight: 600,
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            // Sign in link for non-authenticated users
            <NavLink
              exact
              to="/signup"
              className={styles.navLink}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={() => setMenuOpen(false)}
            >
              {/* Sign In Icon */}
              <img
                src="https://cdn-icons-png.flaticon.com/512/1828/1828479.png"
                alt="Sign In Icon"
                className={styles.navIcon}
              />
              Sign In
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
}
