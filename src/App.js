import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Post from "./components/Post";
import Sidebar from "./components/Sidebar";
import TechNews from "./components/TechNews";
import MemeGallery from "./components/MemeGallery";
import ProjectSpotlight from "./components/ProjectSpotlight";
import CreatePostModal from "./components/CreatePostModal";

import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";

import postData from "./data/postData";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [allPosts, setAllPosts] = useState([postData]);

  const handleAddPost = (newPost) => {
    setAllPosts([newPost, ...allPosts]);
  };

  return (
    <Router>
      <InnerApp
        showModal={showModal}
        setShowModal={setShowModal}
        allPosts={allPosts}
        handleAddPost={handleAddPost}
      />
    </Router>
  );
}

function InnerApp({ showModal, setShowModal, allPosts, handleAddPost }) {
  const location = useLocation();
  const authRoutes = ["/login", "/signup", "/forgot-pass"];
  const hideSidebar = authRoutes.includes(location.pathname);

  return (
    <>
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
                </>
              }
            />
            <Route path="/news" element={<TechNews />} />
            <Route path="/memes" element={<MemeGallery />} />
            <Route path="/projects" element={<ProjectSpotlight />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-pass" element={<ForgotPassword />} />
          </Routes>
        </div>

        {!hideSidebar && <Sidebar />}
      </div>

      {localStorage.getItem("loggedInUser") && (
        <button className="floatingBtn" onClick={() => setShowModal(true)}>
          ➕
        </button>
      )}

      {showModal && (
        <CreatePostModal
          onClose={() => setShowModal(false)}
          onPost={handleAddPost}
        />
      )}
    </>
  );
}

export default App;
