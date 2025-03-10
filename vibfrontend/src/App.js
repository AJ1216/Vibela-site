import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Import Navbar and Breadcrumb components
import Navbar from './components/Navbar/Navbar'; 
import Breadcrumb from './components/otherComponents/Breadcrumb/Breadcrumb'; 

// Create a QueryClient instance
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router basename={process.env.PUBLIC_URL} future={{ v7: true }}>
        <div className="app">
          <Navbar />
          <Breadcrumb />
        </div>
      </Router>
    </QueryClientProvider>
  );
};

export default App;