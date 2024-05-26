import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const root = document.getElementById('root');
const rootElement = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Create a root and render your app using the new API
const rootInstance = createRoot(root);
rootInstance.render(rootElement);
