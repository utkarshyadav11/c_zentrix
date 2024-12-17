
import Form from '../components/Form/Form';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import { defaultTheme } from '../styles/themes';

const FormPage = () => {
  const handleSuccess = (response) => {
    alert(response.message);
  };

  return (
    <ErrorBoundary>
      <div className="p-4">
        <h1 className="mb-4 text-xl">Dynamic Form</h1>
        <Form
          schemaEndpoint="/form-schema"
          onSubmitSuccess={handleSuccess}
          theme={defaultTheme}
        />
      </div>
    </ErrorBoundary>
  );
};

export default FormPage;
