const apiService = {
    getFormSchema: async (endpoint) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            fields: [
              { name: 'username', label: 'Username', type: 'text', placeholder: 'Enter your username' },
              { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email' },
            ],
          });
        }, 300);
      });
    },
  
    submitFormData: async (formData) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (!formData.username || !formData.email) {
            reject(new Error('All fields are required.'));
          } else {
            resolve({ message: 'Form submitted successfully!', data: formData });
          }
        }, 300);
      });
    },
  };
  
  export default apiService;
  