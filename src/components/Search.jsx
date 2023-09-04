import React from "react";
import { Link } from "react-router-dom"; 
import RecommendVideo from "./RecommendVideo";

const Search = ({ searchResults }) => {
  return (
    <div className="search-results">
      <h2>Search Results</h2>
      <div className="video-list">
        {searchResults.map((video) => (
          <Link key={video.id.videoId} to={`/video/${video.id.videoId}`}>
            {/* Wrap RecommendVideo with Link */}
            <RecommendVideo video={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Search;
