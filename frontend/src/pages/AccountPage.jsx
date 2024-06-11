import React, { useEffect, useState } from 'react';
import { getAccountDetails, logout } from '../api';
import { useNavigate } from 'react-router-dom';

const AccountPage = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getAccountDetails();
        setUserData(data);
      } catch (error) {
        setError('Failed to fetch account details. Please try again.');
        console.error('Error details:', error); // Log full error details for debugging
      }
    };
    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login'); // Redirect to the login page after successful logout
    } catch (error) {
      setError('Failed to logout. Please try again.');
    }
  };

  return (
    <div>
      <h1>Account Page</h1>
      {error && <p>{error}</p>}
      {userData ? (
        <div>
          <p>Username: {userData.username}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AccountPage;
