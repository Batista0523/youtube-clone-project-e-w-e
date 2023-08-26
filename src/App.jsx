import React, { useState, useEffect } from "react";

const API_KEY = import.meta.env.VITE_BASE_API_URL;
const BASE_URL = "https://youtube.googleapis.com/youtube/v3";

import "./App.css";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import RecommendVideo from "./components/RecommendVideo";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams({
      key: API_KEY,
      part: "snippet",
      type: "video",
    });

    fetch(`${BASE_URL}/search?${params}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.items);
        setVideos(data.items);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="app">
      <NavBar setVideos={setVideos} />
      <div className="app_page">
        <SideBar />
        <div>
          <h1 className="video_header">Recommend Video</h1>
          {videos.length > 0 ? (
            videos.map((video) => (
              <RecommendVideo key={video.id.videoId} video={video} />
            ))
          ) : (
            <p>No videos available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
