import React from "react";
import "./Recommend.css";
import VideoCard from "./VideoCard";

const RecommendVideo = ({ video }) => {
  return (
    <div>
        <VideoCard video={video}/>
        <VideoCard video={video}/>
        <VideoCard video={video}/>
        <VideoCard video={video}/>
        <VideoCard video={video}/>
        <VideoCard video={video}/>
        <VideoCard video={video}/>
        <VideoCard video={video}/>
    </div>
  );
};

export default RecommendVideo;
