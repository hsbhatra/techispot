import React, { useState } from "react";
import styles from "../style/Post.module.css";

const Post = ({ post }) => {
  const {
    userProfile,
    userPost,
    comments,
    timestamp,
    likes,
    tags,
    location,
    likedBy,
  } = post;

  // State for like, follow, comments toggle
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [following, setFollowing] = useState(false);
  const [showAllComments, setShowAllComments] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [commentList, setCommentList] = useState(comments);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  const handleFollow = () => {
    setFollowing(!following);
  };

  const toggleComments = () => {
    setShowAllComments((prev) => !prev);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      const newEntry = {
        user: {
          userName: "You",
          userImage:
            "https://i.pinimg.com/474x/bd/26/b7/bd26b704fca0c5e3fe68f10322bf65c0.jpg",
          alt: "yourProfile",
          followBtn: false,
        },
        commentText: newComment,
        timestamp: new Date().toISOString(),
        likes: 0,
      };
      setCommentList([...commentList, newEntry]);
      setNewComment("");
      setShowAllComments(true); // expand if collapsed
    }
  };

  const displayedComments = showAllComments
    ? commentList
    : commentList.slice(0, 1);

  return (
    <div className={styles.post}>
      {/* Post Header */}
      <div className={styles.postHeader}>
        <img
          src={userProfile.userImage}
          alt={userProfile.alt}
          className={styles.profileImg}
        />
        <div>
          <h4>{userProfile.userName}</h4>
          <p>
            {location} · {new Date(timestamp).toLocaleString()}
          </p>
        </div>
        {userProfile.followBtn && (
          <button className={styles.followBtn} onClick={handleFollow}>
            {following ? "Following" : "Follow"}
          </button>
        )}
      </div>

      {/* Post Content */}
      <div className={styles.postContent}>
        <p>{userPost.discription}</p>
        <img
          src={userPost.postImage}
          alt={userPost.alt}
          className={styles.postImg}
        />
      </div>

      {/* Tags */}
      <div className={styles.postTags}>
        {tags.map((tag, index) => (
          <span key={index} className={styles.tag}>
            #{tag}
          </span>
        ))}
      </div>

      {/* Like Section */}
      <div className={styles.postActions}>
        <button onClick={handleLike} className={styles.likeBtn}>
          {liked ? "❤️ Liked" : "🤍 Like"}
        </button>
        <p>{likeCount} Likes</p>
        {/* <div className={styles.likedBy}>
          {likedBy.map((user, i) => (
            <img
              key={i}
              src={user.userImage}
              alt={user.alt}
              className={styles.likedAvatar}
            />
          ))}
        </div> */}
      </div>

      {/* Comments Section */}
      <div className={styles.postComments}>
        <h5>Comments</h5>
        {displayedComments.map((comment, index) => (
          <div key={index} className={styles.comment}>
            {/* <img src={comment.user.userImage} alt={comment.user.alt} /> */}
            <div>
              <p>
                <strong>{comment.user.userName}</strong>: {comment.commentText}
              </p>
              <small>
                {new Date(comment.timestamp).toLocaleString()} · ❤️{" "}
                {comment.likes}
              </small>
            </div>
          </div>
        ))}
        {commentList.length > 1 && (
          <button onClick={toggleComments} className={styles.showMoreBtn}>
            {showAllComments ? "Show Less" : "View More Comments"}
          </button>
        )}

        {/* 🆕 Comment Input Box */}
        <div className={styles.commentInput}>
          <input
            type="text"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button onClick={handleAddComment}>Post</button>
        </div>
      </div>
    </div>
  );
};

export default Post;
