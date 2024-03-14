import React, { createContext, useState, useContext } from 'react';

const ContextData = createContext();

// Create a provider component
export const ContextProvider = ({ children }) => {
  const [value, setValue] = useState('default value');

  return (
    <ContextData.Provider value={{ value, setValue }}>
      {children}
    </ContextData.Provider>
  );
};

// Custom hook to use the context value
export const useMyContext = () => {
  return useContext(ContextData);
};