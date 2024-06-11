import React, { useState, useEffect } from 'react';
import { getAccountDetails, updateProfile } from '../api';

const Profile = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    phone_number: '',
    address: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getAccountDetails();
        setFormData({
          username: data.username,
          email: data.email,
          phone_number: data.phone_number || '',
          address: data.address || '',
        });
      } catch (error) {
        setError('Failed to fetch account details. Please try again.');
        console.error('Error details:', error);
      }
    };
    fetchUserData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      await updateProfile(formData);
      setMessage('Profile updated successfully');
      setIsEditing(false);
    } catch (error) {
      setError('Failed to update profile. Please try again.');
    }
  };

  return (
    <div>
      <h2>Profile</h2>
      {message && <p>{message}</p>}
      {error && <p>{error}</p>}
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              type="text"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Save</button>
          <button type="button" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </form>
      ) : (
        <div>
          <p>Username: {formData.username}</p>
          <p>Email: {formData.email}</p>
          <p>Phone Number: {formData.phone_number}</p>
          <p>Address: {formData.address}</p>
          <button onClick={() => setIsEditing(true)}>Edit Profile</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
