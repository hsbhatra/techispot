// ============================================================================
// FORGOT PASSWORD COMPONENT - Password Recovery Interface
// ============================================================================
// This component allows users to reset their password by providing
// their email and setting a new password with confirmation

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Auth.module.css';

// ============================================================================
// FORGOT PASSWORD COMPONENT DEFINITION
// ============================================================================
const ForgotPassword = () => {
  // ============================================================================
  // STATE MANAGEMENT
  // ============================================================================
  // Manage form inputs and error states using React hooks
  const [email, setEmail] = useState('');           // Store user's email for verification
  const [newPassword, setNewPassword] = useState(''); // Store new password input
  const [confirmPassword, setConfirmPassword] = useState(''); // Store password confirmation
  const [error, setError] = useState('');           // Store validation error messages
  
  // React Router hook for programmatic navigation
  const navigate = useNavigate();

  // ============================================================================
  // PASSWORD RESET HANDLER FUNCTION
  // ============================================================================
  // Handles password reset form submission and validation
  const handleReset = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    
    // Retrieve user data from localStorage using email
    const user = JSON.parse(localStorage.getItem(email));
    
    // Check if user exists in the system
    if (!user) {
      setError('User not found');
      return; // Exit function if user doesn't exist
    }
    
    // Validate that new password and confirmation match
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return; // Exit function if passwords don't match
    }
    
    // Update user's password in the stored data
    user.password = newPassword;
    
    // Save updated user data back to localStorage
    localStorage.setItem(email, JSON.stringify(user));
    
    // Redirect to login page after successful password reset
    navigate('/login');
  };

  // ============================================================================
  // COMPONENT RENDER
  // ============================================================================
  return (
    <div className={styles['auth-container']}>
      {/* Password reset form with validation */}
      <form className={styles['auth-form']} onSubmit={handleReset}>
        <h2 className={styles['auth-title']}>Forgot Password</h2>
        
        {/* Email input for user verification */}
        <label>Email</label>
        <input 
          type="email" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          required 
        />
        
        {/* New password input field */}
        <label>New Password</label>
        <input 
          type="password" 
          value={newPassword} 
          onChange={e => setNewPassword(e.target.value)} 
          required 
        />
        
        {/* Password confirmation field */}
        <label>Confirm New Password</label>
        <input 
          type="password" 
          value={confirmPassword} 
          onChange={e => setConfirmPassword(e.target.value)} 
          required 
        />
        
        {/* Error message display */}
        {error && <div className={styles['auth-error']}>{error}</div>}
        
        {/* Submit button for password reset */}
        <button className={styles['auth-btn']} type="submit">Reset Password</button>
        
        {/* Cancel button to return to login */}
        <button 
          className={styles['auth-btn'] + ' ' + styles['secondary']} 
          type="button" 
          onClick={() => navigate('/login')}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

// Export the ForgotPassword component as the default export
export default ForgotPassword; 