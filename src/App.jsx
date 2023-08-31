import React, { useState, useEffect } from "react";
import { getBaseUrl } from "./api/fetch";
import { getApiKey } from "./api/API";
import videoData from "./data/data";


import "./App.css";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import RecommendVideo from "./components/RecommendVideo";
import ShowMore from "./components/ShowMore";

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
       
        setVideos(data.items);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log(videoData)

  return (
    <div>
   <ShowMore selectedVideo={videoData}/>   
      <NavBar setVideos={setVideos} />
      <div className="app_page">

        <SideBar className="side" />
        <div className="recommend">
          <h1>Recommend Video</h1>
          {videoData.length > 0 ? (
            videoData.map((video) => (
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
