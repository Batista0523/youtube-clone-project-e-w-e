import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Home from "./components/Home";
import VideoDetails from "./components/VideoDetails";

function App() {
  return (
    <Router>
      <div className="body">
        <NavBar />
        <div className="app_page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/video/:videoId" element={<VideoDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
