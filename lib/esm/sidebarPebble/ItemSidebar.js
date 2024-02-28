import React from 'react';
import { Link } from 'react-router-dom';
import './SidebarPebble.css';
const ItemSideBar = ({ icon: IconComponent, label, target, useModalStyles }) => {
    const menuItemClass = useModalStyles ? 'modal-item' : 'menu-item';
    const iconDetailClass = useModalStyles ? 'icon--detail__modal' : 'icon-detail';
    return (React.createElement("div", { className: menuItemClass },
        React.createElement(Link, { to: target },
            React.createElement("div", { className: iconDetailClass },
                React.createElement(IconComponent, null),
                React.createElement("p", null, label)))));
};
export default ItemSideBar;
