import React from 'react';
import { AuthProvider } from '../firebase/auth';
import Router from './Router';

const Providers = () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default Providers;