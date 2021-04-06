import React from 'react';

import LoginForm from './loginForm/LoginForm';
import AuthLayout from '../../components/layout/auth/AuthLayout';

const Welcome = () => (
  <AuthLayout>
    <LoginForm />
  </AuthLayout>
);

export default Welcome;
