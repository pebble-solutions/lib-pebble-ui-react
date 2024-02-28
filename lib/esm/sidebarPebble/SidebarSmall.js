import React from 'react';
import { Menu } from 'iconoir-react';
import './SidebarPebble.css';
function SidebarSmall({ onMenuClick, isSmall }) {
    return (React.createElement("div", { className: 'sidebarContainerPebble' },
        React.createElement("div", { className: `sidebar ${isSmall ? 'sidebarSmall' : ''}` },
            React.createElement("div", { className: " menu-icon menuSmall-icon", onClick: onMenuClick },
                React.createElement(Menu, { className: 'icon-detail' })))));
}
export default SidebarSmall;
