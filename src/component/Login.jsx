// ============================================================================
// LOGIN COMPONENT - User Authentication Interface
// ============================================================================
// This component handles user login functionality with form validation
// and local storage-based authentication system

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './Auth.module.css';

// ============================================================================
// LOGIN COMPONENT DEFINITION
// ============================================================================
const Login = () => {
  // ============================================================================
  // STATE MANAGEMENT
  // ============================================================================
  // Manage form inputs and error states using React hooks
  const [email, setEmail] = useState('');        // Store user's email input
  const [password, setPassword] = useState('');  // Store user's password input
  const [error, setError] = useState('');        // Store authentication error messages
  
  // React Router hook for programmatic navigation
  const navigate = useNavigate();

  // ============================================================================
  // LOGIN HANDLER FUNCTION
  // ============================================================================
  // Handles form submission and user authentication
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    
    // Retrieve user data from localStorage using email as key
    const user = JSON.parse(localStorage.getItem(email));
    
    // Validate user credentials
    if (user && user.password === password) {
      // Authentication successful - store login state
      localStorage.setItem('loggedInUser', email);  // Store current user's email
      localStorage.setItem('isLoggedIn', 'true');   // Set login status flag
      navigate('/'); // Redirect to home page after successful login
    } else {
      // Authentication failed - display error message
      setError('Invalid email or password');
    }
  };

  // ============================================================================
  // COMPONENT RENDER
  // ============================================================================
  return (
    <div className={styles['auth-container']}>
      {/* Login form with controlled inputs and validation */}
      <form className={styles['auth-form']} onSubmit={handleLogin}>
        <h2 className={styles['auth-title']}>Login</h2>
        
        {/* Email input field */}
        <label>Email</label>
        <input 
          type="email" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          required 
        />
        
        {/* Password input field */}
        <label>Password</label>
        <input 
          type="password" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
          required 
        />
        
        {/* Error message display */}
        {error && <div className={styles['auth-error']}>{error}</div>}
        
        {/* Submit button */}
        <button className={styles['auth-btn']} type="submit">Login</button>
        
        {/* Navigation links for signup and password recovery */}
        <div className={styles['auth-links']}>
          <Link to="/signup">Sign Up</Link>
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
      </form>
    </div>
  );
};

// Export the Login component as the default export
export default Login; 