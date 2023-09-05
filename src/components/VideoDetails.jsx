import React from "react";
import { useParams } from "react-router-dom";

const VideoDetails = () => {
  const { videoId } = useParams();

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
    </div>
  );
};

export default VideoDetails;
