import { useState } from "react";
import formSchema from "./components/Form/formSchema.json";
import Modal from "./components/Form/Modal";
import Form from "./components/Form/Form"; 
import { defaultTheme } from "./styles/themes"

const App = () => {
  const [formData, setFormData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (data) => {
    console.log("Form Submitted:", data);
    setFormData(data);
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="mb-4 text-4xl font-bold">Form details</h1>

      <Form
        schema={formSchema} 
        onSubmitSuccess={handleSubmit}
        theme={defaultTheme}
        
      />
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
