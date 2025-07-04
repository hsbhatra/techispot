import React from 'react';
import Post from './components/Post';
import postData from './data/postData';

function App() {
  return (
    <div className="App">
      <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Techispot Feed</h2>
      <Post post={postData} />
    </div>
  );
}

export default App;
