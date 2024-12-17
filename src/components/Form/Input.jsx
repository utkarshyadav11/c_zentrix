import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ name, label, type, placeholder, value, onChange, theme }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium">
        {label}
      </label>
      <input
        type={type}
        id={name}
        required
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={theme}
      />
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};

export default Input;
