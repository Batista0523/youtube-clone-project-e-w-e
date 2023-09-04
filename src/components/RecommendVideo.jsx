// RecommendVideo.jsx
import React from "react";

const RecommendVideo = ({ video }) => {
  return (
    <div>
      <h2>{video.snippet.title}</h2>
      <img src={video.snippet.thumbnails.default.url} alt="Thumbnail" />
      <p>{video.snippet.description}</p>
      <p>{video.snippet.publishTime}</p>
      <p>{video.snippet.channelTitle}</p>
    </div>
  );
};

export default RecommendVideo;
