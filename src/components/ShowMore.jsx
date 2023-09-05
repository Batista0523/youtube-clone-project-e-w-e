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
          const videoSnippet = data.items[0].snippet;
          setSelectedVideo({
            title: videoSnippet.title || "Video Title Not Available",
            description: videoSnippet.description || "Description Not Available",
            publishTime: videoSnippet.publishedAt || "Publish Time Not Available",
            channelTitle: videoSnippet.channelTitle || "Channel Title Not Available",
          });
        } else {
          // Handle the case where no video details are found
          setSelectedVideo(null);
        }
      })
      .catch((error) => {
        console.error("Error fetching video data:", error);
        // Handle the error and set selectedVideo to null
        setSelectedVideo(null);
      });
  }, [videoId]);

  return (
    <div>
      {selectedVideo ? (
        <div>
          <h2>{selectedVideo.title}</h2>
          <p>{selectedVideo.description}</p>
          <p>{selectedVideo.publishTime}</p>
          <p>{selectedVideo.channelTitle}</p>
        </div>
      ) : (
        <p>Video not found</p>
      )}
    </div>
  );
};

export default ShowMore;
