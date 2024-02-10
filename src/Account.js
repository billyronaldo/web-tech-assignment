import React, { useState } from 'react';
import AccountForm from './AccountForm';

const Account = ({ userInfo, updateUserInfo }) => {
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (newUserInfo) => {
    updateUserInfo(newUserInfo);
    setSuccessMessage('Account information updated successfully!');

    setTimeout(() => setSuccessMessage(''), 1000);
  };

  return (
    <div>
      <h2>Account</h2>
      <div>
        <h3>Account Information:</h3>
        <p>Name: {userInfo.name}</p>
        <p>Email: {userInfo.email}</p>
        <p>Shipping Address: {userInfo.shippingAddress}</p>
      </div>
      <AccountForm onSubmit={handleSubmit} initialUserInfo={userInfo} />
      {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
  );
};

export default Account;
