import React from 'react';
import { logout } from '../api';
import Profile from '../components/Profile';

const AccountPage = () => {
  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h1>Account Page</h1>
      <Profile />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AccountPage;
