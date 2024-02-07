// Account.js
import React, { useState } from 'react';
import './AccountStyles.css';

const Account = ({ userInfo, updateUserInfo }) => {
  const [shippingAddress, setShippingAddress] = useState(userInfo.shippingAddress);

  const handleAddressChange = (e) => {
    setShippingAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserInfo({ ...userInfo, shippingAddress });
  };

  return (
    <div>
      <h2>Account</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Shipping Address:
          <input type="text" value={shippingAddress} onChange={handleAddressChange} />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Account;
