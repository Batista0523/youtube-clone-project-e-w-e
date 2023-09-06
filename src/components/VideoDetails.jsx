import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./videoDetails.css";

const VideoDetails = () => {
  const { videoId } = useParams();
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (name.trim() === "" || comment.trim() === "") {
      alert("Name and comment cannot be empty!");
      return;
    }

    const newComment = { name, comment };
    setComments([...comments, newComment]);
    setName("");
    setComment("");
  };

  return (
    <div className="video-details">
      <div className="video-container">
        <iframe
          className="video-iframe"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="Selected Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      <div className="comments-container">
        <h2>Add a Comment</h2>
        <input
          className="comment-input"
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          className="comment-input"
          type="text"
          placeholder="Your Comment"
          value={comment}
          onChange={handleCommentChange}
        />
        <button className="comment-button" onClick={handleCommentSubmit}>
          Submit
        </button>
      </div>

      <div className="comments-container">
        <h2>Comments</h2>
        <ul className="comments-list">
          {comments.map((comment, index) => (
            <li key={index} className="comment-item">
              <strong>{comment.name}:</strong> {comment.comment}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VideoDetails;
