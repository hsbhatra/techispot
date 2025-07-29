// ============================================================================
// POST BUTTONS COMPONENT - Social Media Interaction Features
// ============================================================================
// This component provides interactive features for posts including likes, comments,
// sharing, and social media integration with authentication checks

import React, { useState, useEffect, useRef } from "react";
import styles from "./Post.module.css";
import Heart from "react-animated-heart"; // Animated heart component for likes
import { useCopyToClipboard } from "usehooks-ts"; // Hook for copying to clipboard
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share"; // Social media sharing components

// ============================================================================
// POST BUTTONS COMPONENT DEFINITION
// ============================================================================
export default function PostButtons() {
  // ============================================================================
  // STATE MANAGEMENT
  // ============================================================================
  // Manage component state using React hooks
  const [click, setClick] = useState(false);                    // Track like button state
  const [likeCount, setLikeCount] = useState(0);               // Track number of likes
  const [isCommentsPost, setIsCommentsPost] = useState(false); // Control comments modal visibility
  const [newComment, setNewComment] = useState("");            // Store new comment text
  const [comments, setComments] = useState([]);                // Store all comments for the post
  const [isLoggedIn, setIsLoggedIn] = useState(false);         // Track user authentication status
  const [share, setShare] = useState(false);                   // Control share modal visibility
  const [urlLink, setUrlLink] = useState("");                  // Store URL for sharing
  const [value, copy] = useCopyToClipboard();                  // Hook for copying to clipboard
  const containerReference = useRef();                         // Reference for share container

  // ============================================================================
  // EFFECT HOOK - INITIALIZATION
  // ============================================================================
  // Check authentication status on component mount
  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
  }, []);

  // ============================================================================
  // EVENT HANDLERS
  // ============================================================================
  // Handle like button toggle with authentication check
  const handleLikeToggle = () => {
    if (isLoggedIn) {
      setClick(!click); // Toggle like state
      setLikeCount(likeCount + (click ? -1 : 1)); // Update like count
    } else {
      alert("Please log in to like the post."); // Show authentication prompt
    }
  };

  // Handle comment button click with authentication check
  const handleCommentClick = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    if (isLoggedIn) {
      setIsCommentsPost(true); // Open comments modal
    } else {
      alert("Please log in to comment."); // Show authentication prompt
    }
  };

  // Close comments modal
  const handleCommentClose = () => {
    setIsCommentsPost(false);
  };

  // Handle adding new comment
  const handleComments = () => {
    if (newComment.trim() !== "") { // Only add non-empty comments
      setComments([...comments, newComment]); // Add comment to list
      setNewComment(""); // Clear comment input
    }
  };

  // Handle share button toggle
  const handleShare = () => {
    setShare((prevShare) => !prevShare); // Toggle share modal
    setUrlLink(window.location.href); // Set current page URL for sharing
  };

  // ============================================================================
  // COMPONENT RENDER
  // ============================================================================
  return (
    <div className={styles.reactions}>
      {/* Like Button Section */}
      <div className={styles.likeContainer}>
        {/* Animated Heart Component */}
        <Heart onClick={handleLikeToggle} filled={click} />
        {/* Like Count Display */}
        <span className={styles.likeCount}>{likeCount}</span>
      </div>

      {/* Comment Button */}
      <i onClick={handleCommentClick} className="fa-regular fa-comments"></i>
      
      {/* Share Button */}
      <i onClick={handleShare} className="fa-regular fa-share-from-square"></i>
      
      {/* Bookmark Button (placeholder) */}
      <i className="fa-regular fa-bookmark"></i>

      {/* Comments Modal */}
      {isCommentsPost && (
        <div className={styles.commentPopup}>
          {/* Comments Modal Header */}
          <div className={styles.commentPopupHeader}>
            <h3 className={styles.commentPopupTitle}>Comments</h3>
            <button className={styles.commentPopupCloseBtn} onClick={handleCommentClose}>×</button>
          </div>
          
          {/* Comments List */}
          <div className={styles.commentList}>
            {/* No Comments Message */}
            {comments.length === 0 && (
              <div style={{ color: '#aaa', textAlign: 'center', marginBottom: '1rem' }}>No comments yet.</div>
            )}
            
            {/* Display Existing Comments */}
            {comments.map((value, index) => (
              <div className={styles.commentItem} key={index}>
                {/* Commenter Profile Image */}
                <img
                  className={styles.commentProfileImg}
                  src="https://media.istockphoto.com/id/1322220448/photo/abstract-digital-futuristic-eye.jpg?s=612x612&w=0&k=20&c=oAMmGJxyTTNW0XcttULhkp5IxfW9ZTaoVdVwI2KwK5s="
                  alt="profile"
                  height="40"
                  width="40"
                />
                
                {/* Comment Content */}
                <div className={styles.commentContent}>
                  {/* Commenter Username */}
                  <div className={styles.commentUser}>{localStorage.getItem('loggedInUser') || 'User'}</div>
                  {/* Comment Text */}
                  <div className={styles.commentText}>{value}</div>
                </div>
              </div>
            ))}
          </div>
          
          {/* New Comment Input Section */}
          <div className={styles.commentInputRow}>
            {/* Comment Input Field */}
            <input
              placeholder="Add a comment"
              className={styles.commentInput}
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            {/* Post Comment Button */}
            <button className={styles.commentPostBtn} onClick={handleComments}>
              Post
            </button>
          </div>
        </div>
      )}

      {/* Share Modal */}
      {share && (
        <div onClick={handleShare} className={styles.share_overlay}>
          <div
            className={styles.share_container}
            onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
          >
            {/* Share Modal Close Button */}
            <div className={styles.close_share_btn}>
              <i onClick={handleShare} className="fa-solid fa-xmark"></i>
            </div>

            {/* Share Modal Header */}
            <h2 className={styles.share_heading}>Share</h2>
            <hr className={styles.line} />

            {/* Social Media Sharing Buttons */}
            <div className={styles.socials} ref={containerReference}>
              {/* Email Share */}
              <EmailShareButton url={urlLink}>
                <EmailIcon size={65} round />
                Email
              </EmailShareButton>
              
              {/* WhatsApp Share */}
              <WhatsappShareButton url={urlLink}>
                <WhatsappIcon size={65} round />
                Whatsapp
              </WhatsappShareButton>
              
              {/* Facebook Share */}
              <FacebookShareButton url={urlLink}>
                <FacebookIcon size={65} round />
                Facebook
              </FacebookShareButton>
              
              {/* LinkedIn Share */}
              <LinkedinShareButton url={urlLink}>
                <LinkedinIcon size={65} round />
                LinkedIn
              </LinkedinShareButton>
            </div>

            <hr className={styles.line} />

            {/* Copy Link Section */}
            <div className={styles.copy_link}>
              {/* URL Display Input */}
              <input
                type="text"
                className={styles.link}
                value={urlLink}
                disabled
              />
              {/* Copy Button */}
              <button className={styles.copy_btn} onClick={() => copy(urlLink)}>
                Copy
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
