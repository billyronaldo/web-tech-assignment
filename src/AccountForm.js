import React, { useState, useEffect } from 'react';
import './AccountStyles.css';

const AccountForm = ({ initialUserInfo, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: initialUserInfo.name || '',
    email: initialUserInfo.email || '',
    shippingAddress: initialUserInfo.shippingAddress || ''
  });

  useEffect(() => {
    setFormData({
      name: initialUserInfo.name || '',
      email: initialUserInfo.email || '',
      shippingAddress: initialUserInfo.shippingAddress || ''
    });
  }, [initialUserInfo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    

    setFormData({
      name: '',
      email: '',
      shippingAddress: ''
    });
  };

  const inputFields = [
    { label: 'Name', name: 'name', type: 'text' },
    { label: 'Email', name: 'email', type: 'text' },
    { label: 'Shipping Address', name: 'shippingAddress', type: 'text' }
  ];

  return (
    <form className="account-form" onSubmit={handleSubmit}>
      {inputFields.map((field, index) => (
        <label key={index}>
          {field.label}:
          <input 
            type={field.type} 
            name={field.name} 
            value={formData[field.name]} 
            onChange={handleChange} 
          />
        </label>
      ))}
      <button type="submit">Save</button>
    </form>
  );
};

export default AccountForm;
