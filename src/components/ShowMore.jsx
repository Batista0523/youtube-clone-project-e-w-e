import React from "react";
import { useParams } from "react-router-dom";

const ShowMore = ({ recommendedVideos }) => {
  const { videoId = "" } = useParams();

  const selectedVideo = recommendedVideos.find(
    (video) => video.id.videoId === videoId
  );

  return (
    <div>
      {selectedVideo ? (
        <div>
          <h2>{selectedVideo.snippet.title}</h2>
          <p>{selectedVideo.snippet.description}</p>
          <p>{selectedVideo.snippet.publishTime}</p>
          <p>{selectedVideo.snippet.channelTitle}</p>
        </div>
      ) : (
        <p>Video not found</p>
      )}
    </div>
  );
};

export default ShowMore;
