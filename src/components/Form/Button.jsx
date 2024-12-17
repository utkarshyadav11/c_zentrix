import PropTypes from 'prop-types'; // Import PropTypes
import React from 'react'; // Add this import if missing

const Button = ({ label, theme, ...props }) => (
  <button className={`px-4 py-2 rounded ${theme}`} {...props}>
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired, // Ensure label is a required string
  theme: PropTypes.string.isRequired, // theme is a string for styling
};

export default Button;
