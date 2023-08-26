import React, { useState, useEffect } from "react";
import { getBaseUrl } from "./api/fetch";
import { getApiKey } from "./api/API";

import "./App.css";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import RecommendVideo from "./components/RecommendVideo";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams({
      key: getApiKey(),
      part: "snippet",
      type: "video",
    });

    fetch(`${getBaseUrl()}/search?${params}`)
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
          {videos.map((video) => (
            <RecommendVideo key={video.id.videoId} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
