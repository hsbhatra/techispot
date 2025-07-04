import React, { useState } from 'react';
import styles from '../style/CreatePostModal.module.css';

const CreatePostModal = ({ onClose, onPost }) => {
  const [postText, setPostText] = useState("");
  const [postImage, setPostImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!postText.trim()) return;

    const newPost = {
      userProfile: {
        userName: 'TechiSpot',
        userImage: 'https://i.pinimg.com/474x/bd/26/b7/bd26b704fca0c5e3fe68f10322bf65c0.jpg',
        alt: 'profileimage',
        followBtn: true
      },
      userPost: {
        discription: postText,
        postImage: postImage || "",
        alt: 'userPost'
      },
      comments: [],
      timestamp: new Date().toISOString(),
      likes: 0,
      tags: [],
      location: 'India',
      likedBy: []
    };

    onPost(newPost);
    onClose();
  };

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <h3>Create a Post</h3>
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="What's on your mind?"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Image URL (optional)"
            value={postImage}
            onChange={(e) => setPostImage(e.target.value)}
          />
          <div className={styles.actions}>
            <button type="submit">Post</button>
            <button onClick={onClose} type="button">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePostModal;
