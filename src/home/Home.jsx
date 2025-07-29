// ============================================================================
// HOME COMPONENT - Main Landing Page Layout
// ============================================================================
// This is the main landing page component that serves as the application's home
// It provides the overall layout structure combining navigation, sidebar, posts, and team sections

import React from 'react'
import NavBar from '../component/NavBar';      // Main navigation bar component
import styles from './Home.module.css';        // CSS modules for styling
import SideBar from '../component/SideBar';    // Community sidebar component
import Post from './post/Post'                 // Posts and content feed component
import Team from './team/Team';                // Team members display component

// ============================================================================
// HOME COMPONENT DEFINITION
// ============================================================================
export default function Home() {
  return (
    <>
      {/* Main Navigation Bar - Fixed at the top */}
      <NavBar />
      
      {/* Main Content Container */}
      <div className={styles.homepage}>
        {/* Left Sidebar - Community management and navigation */}
        <SideBar/>
        
        {/* Center Content - Posts feed and user interactions */}
        <Post/>
        
        {/* Right Sidebar - Team members and contributors */}
        <Team/>
      </div>
    </>
  )
}
