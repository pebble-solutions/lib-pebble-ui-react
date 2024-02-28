import React from 'react';
import ItemSideBar from './ItemSidebar';
import './SidebarPebble.css';
import SimpleBarReact from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
const SideBarItemsContainer = ({ items }) => {
    return (React.createElement("div", null,
        React.createElement(SimpleBarReact, { style: { maxHeight: 1000 } }, items.map((item, index) => (React.createElement(ItemSideBar, { key: index, icon: item.icon, label: item.label, target: item.target }))))));
};
export default SideBarItemsContainer;
