// ============================================================================
// SIGNUP COMPONENT - User Registration Interface
// ============================================================================
// This component handles new user registration with form validation
// and stores user data in localStorage for authentication

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './Auth.module.css';

// ============================================================================
// SIGNUP COMPONENT DEFINITION
// ============================================================================
const Signup = () => {
  // ============================================================================
  // STATE MANAGEMENT
  // ============================================================================
  // Manage form inputs and error states using React hooks
  const [name, setName] = useState('');         // Store user's full name
  const [email, setEmail] = useState('');       // Store user's email address
  const [password, setPassword] = useState(''); // Store user's password
  const [error, setError] = useState('');       // Store validation error messages
  
  // React Router hook for programmatic navigation
  const navigate = useNavigate();

  // ============================================================================
  // SIGNUP HANDLER FUNCTION
  // ============================================================================
  // Handles form submission and user registration
  const handleSignup = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    
    // Check if user already exists in localStorage
    if (localStorage.getItem(email)) {
      setError('User already exists');
      return; // Exit function if user already exists
    }
    
    // Store new user data in localStorage
    // Using email as the key for easy retrieval during login
    localStorage.setItem(email, JSON.stringify({ name, email, password }));
    
    // Redirect to login page after successful registration
    navigate('/login');
  };

  // ============================================================================
  // COMPONENT RENDER
  // ============================================================================
  return (
    <div className={styles['auth-container']}>
      {/* Registration form with controlled inputs and validation */}
      <form className={styles['auth-form']} onSubmit={handleSignup}>
        <h2 className={styles['auth-title']}>Sign Up</h2>
        
        {/* Full name input field */}
        <label>Name</label>
        <input 
          type="text" 
          value={name} 
          onChange={e => setName(e.target.value)} 
          required 
        />
        
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
        <button className={styles['auth-btn']} type="submit">Sign Up</button>
        
        {/* Navigation link to login page */}
        <div className={styles['auth-links']}>
          <Link to="/login">Already have an account? Login</Link>
        </div>
      </form>
    </div>
  );
};

// Export the Signup component as the default export
export default Signup; 