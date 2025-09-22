import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import { initWebVitals } from './reportWebVitals.js';
import ThemeContextProvider from './contexts/ThemeContext.jsx'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Suppress React lifecycle warnings in development
const originalConsoleError = console.error;
console.error = (...args) => {
  if (
    typeof args[0] === 'string' &&
    args[0].includes('componentWillReceiveProps has been renamed')
  ) {
    return;
  }
  originalConsoleError.apply(console, args);
};

ReactDOM.render(
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>,
  document.getElementById('root')
);

// Initialize web vitals tracking
initWebVitals();
