import React, { useState } from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import RecommendVideo from "./components/RecommendVideo";

import "./App.css";

function App() {
  return (
    <div className="app">
      <NavBar etag={videos.etag}/>
      <div className="app_page">
        <SideBar />
        <RecommendVideo />
      </div>
    </div>
  );
}

export default App;
