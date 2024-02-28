import React from 'react';
import ItemSideBar from './ItemSidebar';
import './SidebarPebble.css';
function UserModal({ items }) {
    return (React.createElement("div", { className: "modal" },
        React.createElement("div", { className: "modal-content" }, items.map((item, index) => (React.createElement(ItemSideBar, { key: index, icon: item.icon, label: item.label, target: item.target, useModalStyles: true }))))));
}
export default UserModal;
