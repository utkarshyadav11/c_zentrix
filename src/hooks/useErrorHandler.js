const useErrorHandler = () => {
    const handleError = (error, customMessage) => {
      console.error(error.message);
      alert(customMessage || 'Something went wrong!');
    };
  
    return handleError;
  };
  
  export default useErrorHandler;
  