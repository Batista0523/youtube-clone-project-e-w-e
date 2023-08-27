import React from "react";
import "./Recommend.css";
import VideoCard from "./VideoCard";

const RecommendVideo = ({ video }) => {
  return (
    <div className="video_preview">
        <p>{video.snippet.title}</p>
      <img src={video.snippet.thumbnails.default.url} alt="Thumbnail" />
        <p>{video.snippet.description}</p>
        <p>{video.snippet.publishTime}</p>
        
    </div>
  );
};

export default RecommendVideo;
