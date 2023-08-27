import React from "react";
import "./Recommend.css";
import VideoCard from "./VideoCard";

const RecommendVideo = ({ video }) => {
  return (
    <div className="video_preview">
        <p>{video.snippet.title}</p>
        <p>{video.snippet.publishTime}</p>
      <img src={video.snippet.thumbnails.default.url} alt="Thumbnail" />
    </div>
  );
};

export default RecommendVideo;
