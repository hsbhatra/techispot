// ============================================================================
// POST COMPONENT - Social Media Feed and Post Creation
// ============================================================================
// This component handles the main social media feed functionality including
// post creation, media uploads, emoji picker, and displaying existing posts

import React, { useState } from "react";
import styles from "./Post.module.css";
import PostButtons from "./PostButtons";
import { postdata } from "./Posts";
import CloseIcon from "@mui/icons-material/Close";
import EmojiPickerComponent from "./EmojiPickerComponent";
import Upload from "./Upload";
import { Link } from "react-router-dom";

// ============================================================================
// POST COMPONENT DEFINITION
// ============================================================================
export default function Post() {
  // ============================================================================
  // STATE MANAGEMENT
  // ============================================================================
  // Manage component state using React hooks
  const [isCreatingPost, setIsCreatingPost] = useState(false);        // Control post creation modal
  const [isFollowing, setIsFollowing] = useState(false);              // Track follow button state
  const [newPostText, setNewPostText] = useState("");                 // Store new post text content
  const [posts, setPosts] = useState(postdata);                       // Manage posts list
  const [isEmojiPickerVisible, setIsEmojiPickerVisible] = useState(false); // Control emoji picker visibility
  const [isUploadVisible, setIsUploadVisible] = useState(false);      // Control upload modal visibility
  const [image, setImage] = useState("");                             // Store uploaded image URL
  const [video, setVideo] = useState("");                             // Store uploaded video URL
  const [file, setFile] = useState("");                               // Store uploaded file reference

  // ============================================================================
  // EVENT HANDLERS
  // ============================================================================
  // Toggle follow button state
  const handleFollowToggle = () => {
    setIsFollowing((prevState) => !prevState);
  };

  // Handle post creation input click
  const handlePostClick = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setIsCreatingPost(true);
  };

  // Close post creation modal and reset form
  const handlePostClose = () => {
    setIsCreatingPost(false);
    setNewPostText(""); // Clear post text
    if (isEmojiPickerVisible) setIsEmojiPickerVisible(false); // Close emoji picker
    if (isUploadVisible) setIsUploadVisible(false); // Close upload modal
  };

  // Handle emoji picker toggle
  const handleEmojiClick = () => {
    if (isCreatingPost) {
      // Toggle emoji picker if post creation is already open
      setIsEmojiPickerVisible(!isEmojiPickerVisible);
    } else {
      // Open post creation and emoji picker together
      setIsCreatingPost(true);
      setIsEmojiPickerVisible(true);
    }
  };

  // Handle upload modal toggle
  const handleUpload = () => {
    if (isCreatingPost) {
      // Toggle upload modal if post creation is already open
      setIsUploadVisible(!isUploadVisible);
    } else {
      // Open post creation and upload modal together
      setIsCreatingPost(true);
      setIsUploadVisible(true);
    }
  };

  // Handle media file upload (image or video)
  const handleImageUpload = (type, upload) => {
    setFile(upload); // Store file reference
    
    // Determine if uploaded file is image or video
    if (type.startsWith("image")) {
      setImage(upload); // Set image URL
      setVideo("");     // Clear video URL
    } else {
      setVideo(upload); // Set video URL
      setImage("");     // Clear image URL
    }
    setIsUploadVisible(false); // Close upload modal
  };

  // Handle emoji selection from picker
  const handleEmojiSelection = (emoji) => {
    setNewPostText((prevText) => prevText + emoji); // Append emoji to post text
  };

  // Handle final post creation and submission
  const handlePostCreation = () => {
    let mediaURLimg;
    let mediaURLvid;
    
    // Determine which media type is being used
    if (video === "") {
      mediaURLimg = image; // Use image if no video
    } else if (image === "") {
      mediaURLvid = video; // Use video if no image
    }

    // Only create post if there's text content or media
    if (newPostText.trim() !== "" || mediaURLimg || mediaURLvid) {
      // Create new post object with user and post data
      const newPost = {
        userProfile: {
          userImage:
            "https://img.freepik.com/free-psd/3d-nft-icon-developer-male-illustration_629802-6.jpg?ga=GA1.1.490964057.1750763884&semt=ais_hybrid&w=740",
          alt: "User Alt",
          userName: localStorage.getItem("username"), // Get username from localStorage
        },
        userPost: {
          discription: newPostText,
          postImage: mediaURLimg,
          postVideo: mediaURLvid,
          alt: "post",
        },
      };
      
      // Close modals and reset form
      if (isEmojiPickerVisible) setIsEmojiPickerVisible(false);
      if (isUploadVisible) setIsUploadVisible(false);
      
      // Add new post to the beginning of the posts array
      postdata.unshift(newPost);
      
      // Reset all form fields
      setNewPostText("");
      setImage("");
      setVideo("");
      setFile("");
      setIsCreatingPost(false);
      
      // Update posts state to trigger re-render
      setPosts([...posts], postdata);
    }
  };

  // ============================================================================
  // COMPONENT RENDER
  // ============================================================================
  return (
    <>
      {/* Overlay background when creating post */}
      {isCreatingPost && <div className={styles.blank}></div>}

      {/* Main Posts Container */}
      <div className={styles.post}>
        {/* New Post Creation Input */}
        <div className={styles.newPost}>
          {/* User Profile Picture */}
          <img
            src="https://img.freepik.com/free-psd/3d-nft-icon-developer-male-illustration_629802-6.jpg?ga=GA1.1.490964057.1750763884&semt=ais_hybrid&w=740"
            alt="user"
            className={styles.userDP}
          />
          
          {/* Post Creation Input Field */}
          <label htmlFor="userpost">
            <input
              type="text"
              id="userpost"
              placeholder="Create new post"
              className={styles.Input}
              readOnly
              onClick={handlePostClick}
            />
          </label>
        </div>

        <hr />

        {/* Display Existing Posts */}
        {postdata.map((data, idx) => (
          <div className={styles.userpost} key={idx}>
            {/* User Profile Section */}
            <div className={styles.userProfile}>
              {/* User Profile Picture Link */}
              <Link to={`/profile/${data.userProfile.userName}`}>
                <img
                  src={data.userProfile.userImage}
                  alt={data.userProfile.alt}
                  className={styles.profilePic}
                />
              </Link>
              
              {/* User Name Link */}
              <Link
                to={`/profile/${data.userProfile.userName}`}
                className={styles.userName}
              >
                <span>{data.userProfile.userName}</span>
              </Link>
              
              {/* Follow Button */}
              <button
                className={`${styles.followButton} ${
                  isFollowing ? styles.whenclick1 : ""
                }`}
                onClick={handleFollowToggle}
              >
                {isFollowing ? "Following" : "Follow"}
              </button>
            </div>

            {/* Post Content Section */}
            <div className={styles.userpostdata}>
              {/* Post Description */}
              <p className={styles.discription}>{data.userPost.discription}</p>

              {/* Post Image (if exists) */}
              {data.userPost.postImage && (
                <img
                  src={data.userPost.postImage}
                  alt={data.userPost.alt}
                  className={styles.pstimg}
                />
              )}
              
              {/* Post Video (if exists) */}
              {data.userPost.postVideo && (
                <video
                  src={data.userPost.postVideo}
                  alt={data.userPost.alt}
                  className={styles.pstimg}
                  controls
                />
              )}

              {/* Post Action Buttons (like, comment, share) */}
              <PostButtons />
            </div>
          </div>
        ))}
      </div>

      {/* Post Creation Modal */}
      {isCreatingPost && (
        <div className={styles.popup}>
          {/* Modal Header */}
          <div className={styles.popHeader}>
            <h3 className={styles.poptitle}>Create Post</h3>
            <button onClick={handlePostClose}>
              <CloseIcon />
            </button>
          </div>

          {/* Post Content Area */}
          <div>
            {/* Post Text Input */}
            <textarea
              placeholder="What do you want to talk about ?"
              value={newPostText}
              onChange={(e) => setNewPostText(e.target.value)}
            />
            
            {/* Media Preview */}
            {image === "" ? (
              video === "" ? (
                "" // No media
              ) : (
                // Video preview
                <video
                  src={video}
                  controls
                  alt="Uploaded Video"
                  className={styles.postimgvid}
                />
              )
            ) : (
              // Image preview
              <img src={image} alt="Uploaded Pic" className={styles.postimgvid} />
            )}
          </div>

          <hr />

          {/* Post Creation Tools */}
          <div className={styles.emojis}>
            {/* Upload Media Icon */}
            <i className="fa-regular fa-image" onClick={handleUpload}></i>
            
            {/* Emoji Picker Icon */}
            <i className="fa-regular fa-face-smile" onClick={handleEmojiClick}></i>
            
            {/* Calendar Icon */}
            <i className="fa-regular fa-calendar-days"></i>
            
            {/* Post Button */}
            <button className={styles.Postbtn} onClick={handlePostCreation}>
              Post
            </button>
          </div>

          <hr />
        </div>
      )}

      {/* Emoji Picker Component */}
      {isEmojiPickerVisible && (
        <EmojiPickerComponent onSelect={handleEmojiSelection} />
      )}

      {/* Upload Modal */}
      {isUploadVisible && (
        <div className={styles.popup}>
          {/* Upload Modal Header */}
          <div className={styles.popHeader}>
            <h3 className={styles.poptitle}>Upload</h3>
            <button onClick={() => setIsUploadVisible(false)}>
              <CloseIcon />
            </button>
          </div>
          
          {/* Upload Component */}
          <Upload handleImageUpload={handleImageUpload} />
        </div>
      )}
    </>
  );
}
