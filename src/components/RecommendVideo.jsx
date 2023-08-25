import React from 'react';

const RecommendVideo = ({videos, setVideos}) => {
    return (
        <div>
            <ul>{videos.map((video)=> {
                return <div>
                     <img src={video.snippet.thumbnails.default.url} alt="Thumbnail" />
                    </div>
            })}</ul>
            
        </div>
    );
}

export default RecommendVideo;
