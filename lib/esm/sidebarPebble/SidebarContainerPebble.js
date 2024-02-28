import React from 'react';
import { useState, useRef, useEffect } from 'react';
import Sidebar from './Sidebar';
import SidebarSmall from './SidebarSmall';
import { getMenuItems, getMenuItemsModal } from './menu';
function SidebarContainerPebble({ items, itemsModal }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };
    const itemsRender = items || getMenuItems();
    const itemsModalRender = itemsModal || getMenuItemsModal();
    useEffect(() => {
        function handleClickOutside(event) {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                closeSidebar();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [sidebarRef]);
    return (React.createElement("div", { ref: sidebarRef },
        React.createElement(SidebarSmall, { onMenuClick: toggleSidebar, isSmall: !isSidebarOpen }),
        isSidebarOpen && React.createElement(Sidebar, { onClose: closeSidebar, items: itemsRender, itemsModal: itemsModalRender })));
}
export default SidebarContainerPebble;
