import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/formikForm';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Form Handling in React
          </h1>
          <p className="text-gray-600 text-lg">
            Comparing Controlled Components vs Formik
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Controlled Components Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-blue-600 mb-2">
                Controlled Components
              </h2>
              <p className="text-gray-500 text-sm">
                Manual form state management with useState
              </p>
            </div>
            <RegistrationForm />
          </div>

          {/* Formik Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-purple-600 mb-2">
                Formik + Yup
              </h2>
              <p className="text-gray-500 text-sm">
                Advanced form handling with Formik and Yup validation
              </p>
            </div>
            <FormikForm />
          </div>
        </div>

        {/* Comparison Section */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Comparison: Controlled Components vs Formik
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-semibold text-blue-700 mb-2">Controlled Components</h4>
              <ul className="space-y-1 text-sm text-blue-600">
                <li>✓ Manual state management</li>
                <li>✓ Full control over form</li>
                <li>✓ No extra dependencies</li>
                <li>✓ Good for simple forms</li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <h4 className="font-semibold text-purple-700 mb-2">Formik + Yup</h4>
              <ul className="space-y-1 text-sm text-purple-600">
                <li>✓ Built-in state management</li>
                <li>✓ Schema-based validation</li>
                <li>✓ Less boilerplate code</li>
                <li>✓ Great for complex forms</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
