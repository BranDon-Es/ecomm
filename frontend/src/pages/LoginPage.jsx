import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link
import { login } from '../api';
import styles from '../styles/Auth.module.css';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    emailOrUsername: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');  // Clear previous errors
    let payload = {};
    if (formData.emailOrUsername.includes('@')) {
      payload.email = formData.emailOrUsername;
    } else {
      payload.username = formData.emailOrUsername;
    }
    payload.password = formData.password;

    try {
      const response = await login(payload);
      console.log('Login successful:', response);
      // Save tokens in local storage or context
      localStorage.setItem('access_token', response.access);
      localStorage.setItem('refresh_token', response.refresh);
      // Redirect to homepage or dashboard
      navigate('/');
    } catch (error) {
      console.error('Error during login:', error);
      setError(error.response.data.detail || 'Invalid email or password.');
    }
  };

  return (
    <div className={styles.authContainer}>
      <h2>Login</h2>
      {error && <p className={styles.error}>{error}</p>}
      <form className={styles.authForm} onSubmit={handleSubmit}>
        <input
          type="text"
          name="emailOrUsername"
          placeholder="Email or Username"
          className={styles.authInput}
          value={formData.emailOrUsername}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className={styles.authInput}
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className={styles.authButton}>Login</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p> {/* Add prompt to sign up */}
    </div>
  );
};

export default LoginPage;
