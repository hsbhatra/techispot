// ============================================================================
// MAIN ENTRY POINT - React Application Initialization
// ============================================================================
// This file serves as the entry point for our React application
// It sets up the root component, global styles, and routing configuration

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';

// ============================================================================
// GLOBAL STYLES CONFIGURATION
// ============================================================================
// Define global CSS styles that will be applied to the entire application
// These styles ensure consistent theming across all components
const globalStyles = `
  body {
    margin: 0;                    /* Remove default browser margins */
    padding: 0;                   /* Remove default browser padding */
    font-family: 'Poppins', sans-serif;  /* Set custom font for better typography */
    background-color: #000;       /* Dark theme background */
    color: aliceblue;             /* Light text color for contrast */
  }
`;

// ============================================================================
// STYLE INJECTION INTO DOM
// ============================================================================
// Dynamically inject global styles into the document head
// This approach allows us to apply styles before the React app renders
const styleTag = document.createElement('style');
styleTag.innerHTML = globalStyles;
document.head.appendChild(styleTag);

// ============================================================================
// REACT ROOT CREATION AND RENDERING
// ============================================================================
// Create the root element for React 18's concurrent features
// This replaces the older ReactDOM.render() method
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the main App component wrapped in necessary providers
root.render(
  <React.StrictMode>
    {/* Router wrapper enables client-side routing throughout the app */}
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// ============================================================================
// PERFORMANCE MONITORING
// ============================================================================
// Enable web vitals reporting for performance monitoring
// This helps track Core Web Vitals metrics in production
reportWebVitals();
