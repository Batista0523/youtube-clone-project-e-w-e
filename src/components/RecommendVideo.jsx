import React from 'react';

const RecommendVideo = ({videos, setVideos}) => {
    return (
        <div>
            <ul>{videos.map((video)=> {
                return <li>{video.snippet.channelId}</li>
            })}</ul>
            
        </div>
    );
}

export default RecommendVideo;
