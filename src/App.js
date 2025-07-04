import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import Sidebar from "./components/Sidebar";
import TechNews from "./components/TechNews";
import MemeGallery from "./components/MemeGallery";
import ProjectSpotlight from "./components/ProjectSpotlight";
import CreatePostModal from "./components/CreatePostModal";
import { useState } from "react";
import postData from "./data/postData";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [allPosts, setAllPosts] = useState([postData]); // initially one post

  const handleAddPost = (newPost) => {
    setAllPosts([newPost, ...allPosts]);
  };

  return (
    <Router>
      <Navbar />
      <div className="app-container">
        <div className="main-feed">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <h2 style={{ textAlign: "center", marginTop: "20px" }}>
                    Techispot Feed
                  </h2>
                  {allPosts.map((p, i) => (
                    <Post key={i} post={p} />
                  ))}
                  <TechNews />
                  <MemeGallery />
                  <ProjectSpotlight />
                </>
              }
            />
            <Route path="/news" element={<TechNews />} />
            <Route path="/memes" element={<MemeGallery />} />
            <Route path="/projects" element={<ProjectSpotlight />} />
            <Route path="/signin" element={<div>Sign In (Coming Soon)</div>} />
          </Routes>
        </div>
        <Sidebar />
      </div>
      <button className="floatingBtn" onClick={() => setShowModal(true)}>
        ➕
      </button>

      {showModal && (
        <CreatePostModal
          onClose={() => setShowModal(false)}
          onPost={handleAddPost}
        />
      )}
    </Router>
  );
}

export default App;
