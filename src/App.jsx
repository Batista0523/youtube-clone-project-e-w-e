import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import ShowMore from "./components/ShowMore";
import { getApiKey } from "./api/API";
import RecommendVideo from "./components/RecommendVideo"
import "./App.css";

function App() {
  const [recommendedVideos, setRecommendedVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVideoId, setSelectedVideoId] = useState(null);

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

  const handleVideoClick = (videoId) => {
    setSelectedVideoId(videoId);
  };

  return (
    <div className="body">
      <NavBar className="header" setSearchQuery={setSearchQuery} initialSearchQuery={searchQuery} />
      <div className="app_page">
        <SideBar className="side" />
        <div className="recommend">
          <h1>Recommend Video</h1>
          <section className="videos">
            {recommendedVideos.length > 0 ? (
              recommendedVideos.map((video) => (
                <RecommendVideo
                  key={video.id.videoId}
                  video={video}
                  onClick={() => handleVideoClick(video.id.videoId)}
                />
              ))
            ) : (
              <p>No videos available</p>
            )}
          </section>
        </div>
      </div>
      {selectedVideoId && <ShowMore videoId={selectedVideoId} />}
    </div>
  );
}



export default App;
