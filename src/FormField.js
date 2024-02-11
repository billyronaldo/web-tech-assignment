import React from 'react';

const FormField = ({ label, name, type, value, onChange }) => {
  return (
    <label>
      {label}:
      <input 
        type={type} 
        name={name} 
        value={value} 
        onChange={onChange} 
      />
    </label>
  );
};

export default FormField;
