import React, { useState } from "react";
import YouTube from "react-youtube";
import { Link } from "react-router-dom"; // Import Link

const RecommendVideo = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoId = video.id.videoId;

  const handleVideoClick = () => {
    setIsPlaying(true);
  };

  const videoOpts = {
    height: "360",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div>
      {isPlaying ? (
        <YouTube videoId={videoId} opts={videoOpts} />
      ) : (
        <>
          <h2>{video.snippet.title}</h2>
          {/* Use Link to wrap the thumbnail and specify the route */}
          <Link to={`/video/${videoId}`}>
            <img
              src={video.snippet.thumbnails.default.url}
              alt="Thumbnail"
              onClick={handleVideoClick}
              style={{ cursor: "pointer" }}
            />
          </Link>
          <p>{video.snippet.description}</p>
          <p>{video.snippet.publishTime}</p>
          <p>{video.snippet.channelTitle}</p>
        </>
      )}
    </div>
  );
};

export default RecommendVideo;
