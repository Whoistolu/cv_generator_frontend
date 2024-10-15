import React from 'react';

const FormInput = ({ label, type, name, value, onChange, placeholder }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="block mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 sm:text-sm"
      />
    </div>
  );
};

export default FormInput;