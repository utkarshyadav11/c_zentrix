import apiService from '../api/apiService';

const useAPIHandler = () => {
  const fetchSchema = async (endpoint) => {
    return await apiService.getFormSchema(endpoint);
  };

  const submitForm = async (formData) => {
    return await apiService.submitFormData(formData);
  };

  return { fetchSchema, submitForm };
};

export default useAPIHandler;
