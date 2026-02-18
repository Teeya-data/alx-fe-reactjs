import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Please enter a valid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

function FormikForm() {
  const handleSubmit = (values, { setSubmitting, resetForm, setStatus }) => {
    setTimeout(() => {
      console.log('Formik form submitted:', values);
      setStatus({ success: true, username: values.username });
      resetForm();
      setSubmitting(false);
    }, 500);
  };

  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, status }) => (
        status?.success ? (
          <div className="text-center py-8">
            <div className="text-5xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-green-600 mb-2">Registration Successful!</h2>
            <p className="text-gray-600">Welcome, {status.username}!</p>
          </div>
        ) : (
          <Form className="space-y-5">
            <div>
              <label htmlFor="formik-username" className="block text-sm font-semibold text-gray-700 mb-1">
                Username
              </label>
              <Field
                type="text"
                id="formik-username"
                name="username"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter your username"
              />
              <ErrorMessage name="username" component="p" className="mt-1 text-sm text-red-600" />
            </div>

            <div>
              <label htmlFor="formik-email" className="block text-sm font-semibold text-gray-700 mb-1">
                Email Address
              </label>
              <Field
                type="email"
                id="formik-email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter your email"
              />
              <ErrorMessage name="email" component="p" className="mt-1 text-sm text-red-600" />
            </div>

            <div>
              <label htmlFor="formik-password" className="block text-sm font-semibold text-gray-700 mb-1">
                Password
              </label>
              <Field
                type="password"
                id="formik-password"
                name="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter your password"
              />
              <ErrorMessage name="password" component="p" className="mt-1 text-sm text-red-600" />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              {isSubmitting ? 'Registering...' : 'Register with Formik'}
            </button>
          </Form>
        )
      )}
    </Formik>
  );
}

export default FormikForm;
