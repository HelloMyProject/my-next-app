// components/ProviderWrapper.tsx
"use client"; // Ensures this file is treated as a client component

import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/store'; // Adjust the path to your store

const ProviderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ProviderWrapper;
