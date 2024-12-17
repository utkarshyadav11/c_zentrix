import React from 'react';
import { useState, useEffect } from 'react';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (event) => {
      setHasError(true); // Set the error state to true when an error occurs
    };

    // Add event listener for uncaught errors
    window.addEventListener('error', handleError);

    // Clean up the event listener
    return () => {
      window.removeEventListener('error', handleError);
    };
  }, []);

  if (hasError) {
    return <h2>Code has problem fix it.</h2>;
  }

  return children;
};


export default ErrorBoundary;
