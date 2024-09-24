import React, { createContext, useContext, useState } from 'react';

// Create context
const ActiveSectionContext = createContext();

// Create a provider component
export const ActiveSectionProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState(''); // Store the active section state

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

// Custom hook to use the context in components
export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);
  if (!context) {
    throw new Error('useActiveSection must be used within an ActiveSectionProvider');
  }
  return context;
};
