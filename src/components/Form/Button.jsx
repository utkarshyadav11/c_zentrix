import PropTypes from 'prop-types';
import React from 'react'; 

const Button = ({ label, theme, ...props }) => (
  <button className={`px-4 py-2 rounded ${theme}`} {...props}>
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired, 
  theme: PropTypes.string.isRequired, 
};

export default Button;
