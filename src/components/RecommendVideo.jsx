import React from "react";
import { Link } from "react-router-dom";
import "./Recommend.css"
const RecommendVideo = ({ video }) => {
  return (
    <div className="recommend2">
      <div className="video_preview">
          <p className="video-title">{video.snippet.title}</p>
      
        <img src={video.snippet.thumbnails.default.url} alt="Thumbnail" />
        <p className="video-description">{video.snippet.description}</p>
        <p className="video-publishTime">{video.snippet.publishTime}</p>
        <p className="channelTitle">{video.snippet.channelTitle}</p>
      </div>
    </div>
  );
};

export default RecommendVideo;
