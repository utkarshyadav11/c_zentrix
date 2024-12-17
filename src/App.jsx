import { useState } from "react";
import formSchema from "./components/Form/formSchema.json";
import Modal from "./components/Form/Modal";
import Form from "./components/Form/Form"; 
import { defaultTheme } from "./styles/themes"

const App = () => {
  const [formData, setFormData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  // This is the function that will be passed to Form and called on form submission
  const handleSubmit = (data) => {
    console.log("Form Submitted:", data);
    setFormData(data); // Update formData state with the submitted data
    setIsModalOpen(true); // Open modal on successful form submission
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="mb-4 text-4xl font-bold">Form details</h1>

      {/* Pass the formSchema to Form component for dynamic rendering */}
      <Form
        schema={formSchema} // Pass schema for dynamic form fields
        onSubmitSuccess={handleSubmit} // Pass the onSubmit function to Form
        theme={defaultTheme} // Pass defaultTheme as styles
        
      />

      {/* Modal component for form submission success */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Form Submission Successful"
      >
        <p>Form submitted successfully!</p>
        <p><strong>Submitted Data:</strong></p>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </Modal>
    </div>
  );
};

export default App;
