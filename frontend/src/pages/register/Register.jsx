import React from 'react';

import RegisterForm from './registerForm/RegisterForm';
import AuthLayout from '../../components/layout/auth/AuthLayout';

const Register = () => (
  <AuthLayout>
    <RegisterForm />
  </AuthLayout>
);

export default Register;
