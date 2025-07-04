import React, { useState } from 'react';
import styles from '../style/AuthForm.module.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [recoveredPassword, setRecoveredPassword] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((u) => u.email === email);

    if (user) {
      setRecoveredPassword(user.password);
    } else {
      setRecoveredPassword('notfound');
    }
  };

  return (
    <form className={styles.authForm} onSubmit={handleSubmit}>
      <h2>🔐 Forgot Password</h2>
      <input
        type="email"
        placeholder="Enter your registered email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Recover Password</button>

      {recoveredPassword && (
        <p style={{ marginTop: "10px", color: recoveredPassword === 'notfound' ? 'red' : 'green' }}>
          {recoveredPassword === 'notfound'
            ? '❌ User not found!'
            : `✅ Your password: ${recoveredPassword}`}
        </p>
      )}

      <p>
        Remembered your password?{' '}
        <a href="/login" className={styles.link}>Back to Login</a>
      </p>
    </form>
  );
};

export default ForgotPassword;
