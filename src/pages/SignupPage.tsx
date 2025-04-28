import { Helmet } from 'react-helmet-async';
import SignupForm from '../components/auth/SignupForm';

const SignupPage = () => {
  return (
    <>
      <Helmet>
        <title>Sign Up | E-Tour</title>
      </Helmet>
      
      <div className="min-h-screen pt-20 pb-12 flex flex-col justify-center sm:px-6 lg:px-8 bg-gray-50">
        <div className="sm:mx-auto sm:w-full sm:max-w-md mb-6">
          <h1 className="text-3xl font-bold text-center text-gray-900">Create an Account</h1>
          <p className="mt-2 text-center text-gray-600">
            Join our community of travelers and start planning your next adventure
          </p>
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <SignupForm />
        </div>
      </div>
    </>
  );
};

export default SignupPage;