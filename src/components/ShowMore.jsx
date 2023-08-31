import React from 'react';
import NavBar from './NavBar';
import RecommendVideo from './RecommendVideo';

const ShowMore = ({ selectedVideo }) => {
    return (
        <div>
            <NavBar />
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
                title="YouTube Video Player"
                frameBorder="0"
                allowFullScreen
            ></iframe>
            <RecommendVideo video={selectedVideo} />
        </div>
    );
}

export default ShowMore;
