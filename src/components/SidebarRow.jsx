import React from 'react';
import "./SidebarRow.css";

const SidebarRow = ({ title, Icon }) => {
    return (
        <div className="sidebarRow">
            {Icon} {/* Render the Icon JSX directly */}
            <h2 className="sidebarRow_title">{title}</h2>
        </div>
    );
}

export default SidebarRow;
