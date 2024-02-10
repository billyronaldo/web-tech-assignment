import React, { useState, useEffect } from 'react';
import './AccountStyles.css';

const AccountForm = ({ initialUserInfo, onSubmit }) => {
  const [name, setName] = useState(initialUserInfo.name || '');
  const [email, setEmail] = useState(initialUserInfo.email || '');
  const [shippingAddress, setShippingAddress] = useState(initialUserInfo.shippingAddress || '');

  useEffect(() => {
    setName(initialUserInfo.name || '');
    setEmail(initialUserInfo.email || '');
    setShippingAddress(initialUserInfo.shippingAddress || '');
  }, [initialUserInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...initialUserInfo, name, email, shippingAddress });
  };

  return (
    <form className="account-form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Shipping Address:
        <input type="text" value={shippingAddress} onChange={(e) => setShippingAddress(e.target.value)} />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

export default AccountForm;
