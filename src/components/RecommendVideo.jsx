import React from 'react';

const RecommendVideo = ({video}) => {
    return (

        <div>

            
                     <img src={video.snippet.thumbnails.default.url} alt="Thumbnail" />
                   
        </div>
    );
}

export default RecommendVideo;
