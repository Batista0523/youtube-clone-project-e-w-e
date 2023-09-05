import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import RecommendVideo from "./components/RecommendVideo";
import ShowMore from "./components/ShowMore";
import { getApiKey } from "./api/API";
import "./App.css";

function App() {
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
    <Router>
      <div className="body">
        <NavBar setSearchQuery={setSearchQuery} initialSearchQuery={searchQuery} />
        <div className="app_page">
          <SideBar className="side" />
          <div className="recommend">
            <h1 className="h1_recommend">Recommend Video</h1>
            <section className="videos">
              {recommendedVideos.length > 0 ? (
                recommendedVideos.map((video) => (
                  <Link
                    key={video.id.videoId}
                    to={`/video/${video.id.videoId}`} // Navigate to video detail page
                    className="video-link" // Add a class for styling
                  >
                    <RecommendVideo video={video} />
                  </Link>
                ))
              ) : (
                <p>No videos available</p>
              )}
            </section>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/video/:videoId" element={<ShowMore />} />
      </Routes>
    </Router>
  );
}

export default App;
