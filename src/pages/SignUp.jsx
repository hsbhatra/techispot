import React, { useState } from 'react';
import styles from '../style/AuthForm.module.css';

const SignUp = () => {
  const [user, setUser] = useState({ name: '', email: '', password: '' });

  const handleSignup = (e) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = existing.find((u) => u.email === user.email);
    if (userExists) return alert("User already exists!");

    localStorage.setItem('users', JSON.stringify([...existing, user]));
    alert("Signup successful!");
    setUser({ name: '', email: '', password: '' });
  };

  return (
    <form className={styles.authForm} onSubmit={handleSignup}>
      <h2>🔐 Sign Up</h2>
      <input type="text" placeholder="Full Name" required value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
      <input type="email" placeholder="Email" required value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
      <input type="password" placeholder="Password" required value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
      <button type="submit">Register</button>

      <p>
        Already have an account?{' '}
        <a href="/login" className={styles.link}>Back to Login</a>
      </p>
    </form>
  );
};

export default SignUp;
