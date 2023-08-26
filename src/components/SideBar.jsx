import React from 'react';
import SidebarRow from './SidebarRow.jsx';
import "./sidebar.css"; 

const SideBar = () => {
    return (
        <div className="sideBar"> 
            <SidebarRow title="Home" Icon={<i className="material-icons">home</i>} />
            <SidebarRow title="Trending" Icon={<i className="material-icons">whatshot</i>} />
            <SidebarRow title="Subscriptions" Icon={<i className="material-icons">subscriptions</i>} />
            <hr />
            <SidebarRow title="Library" Icon={<i className="material-icons">video_library</i>} />
            <SidebarRow title="History" Icon={<i className="material-icons">history</i>} />
            <SidebarRow title="Your videos" Icon={<i className="material-icons">ondemand_video</i>} />
            <SidebarRow title="Watch later" Icon={<i className="material-icons">watch_later</i>} />
            <SidebarRow title="Liked videos" Icon={<i className="material-icons">thumb_up_alt_outlined</i>} />
            <SidebarRow title="Show more" Icon={<i className="material-icons">expand_more_outlined</i>} />
            <hr />
        </div>
    );
}

export default SideBar;
