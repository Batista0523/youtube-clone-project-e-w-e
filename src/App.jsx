import React, { useState } from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import RecommendVideo from "./components/RecommendVideo";
import React from "react";

import "./App.css";

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const params = new URLSearchParams({
      key: API_KEY,
      part: "snippet",
      q: "coding",
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
    <div>
      <NavBar etag={videos.etag} />
      <div>
        <SideBar />
        <RecommendVideo />
      </div>
    </div>
  );
}

export default App;
