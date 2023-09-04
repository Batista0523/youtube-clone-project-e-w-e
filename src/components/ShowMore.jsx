import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getApiKey } from "../api/API";

const ShowMore = () => {
  const { videoId = "" } = useParams();
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const apiKey = getApiKey(); // Replace with your API key

    // Fetch the video details using the videoId from the URL
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&part=snippet&id=${videoId}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.items && data.items.length > 0) {
          setSelectedVideo(data.items[0]);
        }
      })
      .catch((error) => {
        console.error("Error fetching video data:", error);
      });
  }, [videoId]);

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
