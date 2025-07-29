// ============================================================================
// MAIN APP COMPONENT - Application Routing and Layout
// ============================================================================
// This is the root component that defines the application's routing structure
// It uses React Router to handle navigation between different pages/features

import React from 'react';
import { Routes, Route } from 'react-router-dom';

// ============================================================================
// PAGE COMPONENT IMPORTS
// ============================================================================
// Import all the main page components that will be rendered based on routes
import Home from "./home/Home";              // Main landing page with community features
import News from "./news/News";              // News and articles section
import Meme from "./memes/Meme";             // Meme gallery and sharing
import Notes from "./projects/project/Notes"; // Project notes and workspace

// ============================================================================
// AUTHENTICATION COMPONENT IMPORTS
// ============================================================================
// Import authentication-related components for user management
import Login from './component/Login';           // User login form
import Signup from './component/Signup';         // User registration form
import ForgotPassword from './component/ForgotPassword'; // Password recovery

// ============================================================================
// APP COMPONENT DEFINITION
// ============================================================================
function App() {
  return (
    // Routes component defines all possible navigation paths in the application
    <Routes>
      {/* Home route - Main landing page */}
      <Route path="/" element={<Home/>}/>
      
      {/* News section - For browsing and reading articles */}
      <Route path="/news" element={<News/>}/>
      
      {/* Meme gallery - For sharing and viewing memes */}
      <Route path="/meme" element={<Meme/>}/>
      
      {/* Notes workspace - For project management and note-taking */}
      <Route path="/notes" element={<Notes/>}/>
      
      {/* Authentication routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
}

// Export the App component as the default export
export default App;
