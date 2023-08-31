
import React from 'react';

const VideoCard = ({video}) => {
    return (
        <div>
            <div className="video_preview">
      <img src={video.snippet.thumbnails.default.url} alt="Thumbnail" />
      <div className="videocard_info">
      <img className="avatar" src="https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg" height="30" alt="User Avatar" />
        <div className="videocard_text">
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.channelTitle}</p>
        </div>
        </div>
    </div>
        </div>
    );
}

export default VideoCard;
