import React from 'react';
import styles from '../style/Post.module.css';

const Post = ({ post }) => {
  const { userProfile, userPost, comments, timestamp, likes, tags, location, likedBy } = post;

  return (
    <div className={styles.post}>
      <div className={styles.postHeader}>
        <img src={userProfile.userImage} alt={userProfile.alt} className={styles.profileImg} />
        <div>
          <h4>{userProfile.userName}</h4>
          <p>{location} · {new Date(timestamp).toLocaleString()}</p>
        </div>
        {userProfile.followBtn && <button className={styles.followBtn}>Follow</button>}
      </div>

      <div className={styles.postContent}>
        <p>{userPost.discription}</p>
        <img src={userPost.postImage} alt={userPost.alt} className={styles.postImg} />
      </div>

      <div className={styles.postTags}>
        {tags.map((tag, index) => (
          <span key={index} className={styles.tag}>#{tag}</span>
        ))}
      </div>

      <div className={styles.postActions}>
        <p>❤️ {likes} Likes</p>
        <div className={styles.likedBy}>
          {likedBy.map((user, i) => (
            <img key={i} src={user.userImage} alt={user.alt} className={styles.likedAvatar} />
          ))}
        </div>
      </div>

      <div className={styles.postComments}>
        <h5>Comments</h5>
        {comments.map((comment, index) => (
          <div key={index} className={styles.comment}>
            <img src={comment.user.userImage} alt={comment.user.alt} />
            <div>
              <p><strong>{comment.user.userName}</strong>: {comment.commentText}</p>
              <small>{new Date(comment.timestamp).toLocaleString()} · ❤️ {comment.likes}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
