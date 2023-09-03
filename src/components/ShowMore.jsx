import React from "react";
import { useParams } from "react-router-dom";

const ShowMore = ({ recommendedVideos }) => {
  // Initialize videoId with a default value
  const { videoId = "" } = useParams();

  // Find the selected video in the recommendedVideos array
  const selectedVideo = recommendedVideos.find(
    (video) => video.id.videoId === videoId
  );

  // Render video details
  return (
    <div>
      {selectedVideo ? (
        <div>
          <h2>{selectedVideo.snippet.title}</h2>
          <p>{selectedVideo.snippet.description}</p>
          <p>{selectedVideo.snippet.publishTime}</p>
          <p>{selectedVideo.snippet.channelTitle}</p>
          {/* Add more details as needed */}
        </div>
      ) : (
        <p>Video not found</p>
      )}
    </div>
  );
};

export default ShowMore;
