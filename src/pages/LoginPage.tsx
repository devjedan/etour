import { Helmet } from 'react-helmet-async';
import LoginForm from '../components/auth/LoginForm';

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Login | E-Tour</title>
      </Helmet>
      
      <div className="min-h-screen pt-20 pb-12 flex flex-col justify-center sm:px-6 lg:px-8 bg-gray-50">
        <div className="sm:mx-auto sm:w-full sm:max-w-md mb-6">
          <h1 className="text-3xl font-bold text-center text-gray-900">Sign in to E-Tour</h1>
          <p className="mt-2 text-center text-gray-600">
            Access your account to manage bookings and explore new adventures
          </p>
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default LoginPage;