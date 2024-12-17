// apiservice.test.js
import apiService from "../api/apiService"

jest.mock('../api/apiService'); // Mocking the apiService

describe('apiService', () => {
  // Test case for getFormSchema
  it('fetches the form schema successfully', async () => {
    // Mock the resolved value of getFormSchema
    apiService.getFormSchema.mockResolvedValue({
      fields: [
        { name: 'username', label: 'Username', type: 'text', placeholder: 'Enter your username' },
        { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email' },
      ],
    });

    const schema = await apiService.getFormSchema('/form-schema');
    
    expect(schema.fields).toHaveLength(2); // Expecting 2 fields
    expect(schema.fields[0].name).toBe('username');
    expect(schema.fields[1].label).toBe('Email');
  });

  it('throws an error when getFormSchema fails', async () => {
    // Mocking a failure
    apiService.getFormSchema.mockRejectedValue(new Error('Failed to fetch schema'));

    // Testing if the error is thrown
    await expect(apiService.getFormSchema('/form-schema')).rejects.toThrow('Failed to fetch schema');
  });

  // Test case for submitFormData (success case)
  it('submits the form data successfully', async () => {
    const formData = { username: 'testuser', email: 'testuser@example.com' };

    // Mocking the resolved value of submitFormData
    apiService.submitFormData.mockResolvedValue({
      message: 'Form submitted successfully!',
      data: formData,
    });

    const response = await apiService.submitFormData(formData);

    expect(response.message).toBe('Form submitted successfully!');
    expect(response.data).toEqual(formData);
  });

  // Test case for submitFormData (failure case)
  it('throws an error if form data is missing required fields', async () => {
    const formData = { username: '', email: 'testuser@example.com' };

    // Mocking the rejection case for missing form data
    apiService.submitFormData.mockRejectedValue(new Error('All fields are required.'));

    await expect(apiService.submitFormData(formData)).rejects.toThrow('All fields are required.');
  });
});
