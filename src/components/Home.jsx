import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link
import { getApiKey } from "../api/API";
import "./Home.css"

const Home = () => {
  const [recommendedVideos, setRecommendedVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    setSearchTerm(searchQuery);
  };

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setRecommendedVideos([]);
      return;
    }

    const apiKey = getApiKey();

    setLoading(true);

    fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&q=${searchTerm}&maxResults=8`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.items) {
          setRecommendedVideos(data.items);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search for videos"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="results">
          {recommendedVideos.length > 0 ? (
            recommendedVideos.map((video) => (
              <div key={video.id.videoId}>
                <h2 className="title">{video.snippet.title}</h2>
                <Link to={`/video/${video.id.videoId}`}>
                  <img className="img"
                    src={video.snippet.thumbnails.default.url}
                    alt={video.snippet.title}
                  />
                </Link>
              </div>
            ))
          ) : (
            <p>No Search Result Yet! Please submit a search above!</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
