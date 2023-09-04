// VideoShow.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";

function VideoShow() {
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

  const handleSubmit = () => {
    if (name.trim() === "" || comment.trim() === "") {
      alert("Please fill in both name and comment fields.");
      return;
    }

    const newComment = {
      name,
      comment,
    };

    setComments([...comments, newComment]);
    setName("");
    setComment("");
  };

  return (
    <div>
      <h2>Video Show Page</h2>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube Video Player"
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <div>
        <h3>Add a Comment</h3>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={handleNameChange}
        />
        <br />
        <textarea
          placeholder="Your Comment"
          value={comment}
          onChange={handleCommentChange}
        ></textarea>
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </div>

      <div>
        <h3>Comments</h3>
        <ul>
          {comments.map((c, index) => (
            <li key={index}>
              <strong>{c.name}:</strong> {c.comment}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default VideoShow;
