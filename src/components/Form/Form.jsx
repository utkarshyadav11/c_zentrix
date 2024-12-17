import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Button from './Button';

const Form = ({ schema, onSubmitSuccess, theme }) => {
  const initialFormData = schema.reduce((acc, field) => {
    acc[field.name] = '';
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialFormData);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const missingFields = schema.filter(field => !formData[field.name]);
    if (missingFields.length > 0) {
      setErrorMessage('All fields are required.');
      return;
    }
    
    onSubmitSuccess(formData);
    setSuccessMessage('Form submitted successfully!');
  };

  return (
    <form role="form" onSubmit={handleSubmit} className={`p-4 border rounded-lg ${theme?.form}`}>
      {Array.isArray(schema) &&
        schema.map((field) => (
          <Input
            key={field.name}
            {...field}
            value={formData[field.name] || ''}
            onChange={handleChange}
            theme={theme?.input}
          />
        ))}
      <Button label="Submit" type="submit" theme={theme?.button} />
      {errorMessage && <div role="alert">{errorMessage}</div>}
      {successMessage && <div>{successMessage}</div>}
    </form>
  );
};

Form.propTypes = {
  schema: PropTypes.array.isRequired,
  onSubmitSuccess: PropTypes.func.isRequired,
  theme: PropTypes.shape({
    form: PropTypes.string,
    input: PropTypes.string,
    button: PropTypes.string,
  }).isRequired,
};

export default Form;
