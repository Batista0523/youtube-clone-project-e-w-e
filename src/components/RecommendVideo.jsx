import React from "react";
import { Link } from "react-router-dom";
const RecommendVideo = ({video, onClick}) => {
  return (
    <div>
      <div className="video_preview">
        <Link to="/showmore" onClick={onClick}>
          <p className="video-title">{video.snippet.title}</p>
        </Link>
        <img src={video.snippet.thumbnails.default.url} alt="Thumbnail" />
        <p className="video-description">{video.snippet.description}</p>
        <p className="video-publishTime">{video.snippet.publishTime}</p>
        <p className="channelTitle">{video.snippet.channelTitle}</p>
      </div>
    </div>
  );
};

export default RecommendVideo;
