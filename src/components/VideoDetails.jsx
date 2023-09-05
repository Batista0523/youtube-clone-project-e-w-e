import React, { useState } from "react";
import { useParams } from "react-router-dom";

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
    <div>
      <h1>Video Details Page</h1>
      <iframe
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="Selected Video"
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <div>
        <h2>Add a Comment</h2>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="text"
          placeholder="Your Comment"
          value={comment}
          onChange={handleCommentChange}
        />
        <button onClick={handleCommentSubmit}>Submit</button>
      </div>

      <div>
        <h2>Comments</h2>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              <strong>{comment.name}:</strong> {comment.comment}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VideoDetails;
