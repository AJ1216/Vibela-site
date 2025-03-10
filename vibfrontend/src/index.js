import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18 and later
import App from './App';
import './index.css'; // If you have any global styles

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
