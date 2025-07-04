import React from 'react';
import Post from './components/Post';
import Sidebar from './components/Sidebar';
import postData from './data/postData';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="main-feed">
        <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Techispot Feed</h2>
        <Post post={postData} />
      </div>
      <Sidebar />
    </div>
  );
}

export default App;
