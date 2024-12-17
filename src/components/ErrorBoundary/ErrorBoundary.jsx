import React from 'react';
import { useState, useEffect } from 'react';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (event) => {
      setHasError(true);
    };

    window.addEventListener('error', handleError);


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
