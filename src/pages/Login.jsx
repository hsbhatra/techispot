import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../style/AuthForm.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const match = users.find((u) => u.email === email && u.password === password);

    if (match) {
      localStorage.setItem('loggedInUser', JSON.stringify(match));
      alert("Login successful!");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
  <form className={styles.authForm} onSubmit={handleLogin}>
    <h2>🔑 Login</h2>
    <input
      type="email"
      placeholder="Email"
      required
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <input
      type="password"
      placeholder="Password"
      required
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <button type="submit">Login</button>

    {/* Links for Signup and Forgot */}
    <div style={{ textAlign: "center", marginTop: "10px" }}>
      <p>
        New user? <Link to="/signup">Sign Up</Link>
      </p>
      <p>
        <Link to="/forgot-pass">Forgot Password?</Link>
      </p>
    </div>
  </form>
);

};

export default Login;
