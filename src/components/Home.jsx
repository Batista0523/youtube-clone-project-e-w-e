// Home.jsx
import React, { useState, useEffect } from "react";
import RecommendVideo from "./RecommendVideo";
import { getApiKey } from "../api/API";

const Home = () => {
  const [recommendedVideos, setRecommendedVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const apiKey = getApiKey();

    fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&q=${searchQuery}&maxResults=8`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.items) {
          setRecommendedVideos(data.items);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [searchQuery]);

  return (
    <div>
      <h1>Home Page</h1>
      <input
        type="text"
        placeholder="Search for videos"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div>
        {recommendedVideos.map((video) => (
          <RecommendVideo key={video.id.videoId} video={video} />
        ))}
      </div>
    </div>
  );
};

export default Home;
