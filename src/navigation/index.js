import React from 'react';
import { AppProvider } from '../store';
import Router from './Router';

const Providers = () => {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
}

export default Providers;