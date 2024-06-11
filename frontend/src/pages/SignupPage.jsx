import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signup } from '../api';
import styles from '../styles/Auth.module.css';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous error
    try {
      const response = await signup(formData);
      console.log('Signup successful:', response);
      navigate('/login'); // Redirect to the login page after successful signup
    } catch (error) {
      console.error('Error during signup:', error);
      setError(
        error.response?.data?.email?.join(' ') ||
        error.response?.data?.username?.join(' ') ||
        error.response?.data?.password?.join(' ') ||
        'An error occurred during signup.'
      );
    }
  };

  return (
    <div className={styles.authContainer}>
      <h2>Signup</h2>
      {error && <p className={styles.error}>{error}</p>}
      <form className={styles.authForm} onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={styles.authInput}
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          className={styles.authInput}
          value={formData.username}
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
        <button type="submit" className={styles.authButton}>Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p> {/* Add prompt to log in */}
    </div>
  );
};

export default SignupPage;
