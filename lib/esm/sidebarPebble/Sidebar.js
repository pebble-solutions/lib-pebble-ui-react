import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { NavArrowUp, User } from 'iconoir-react';
import UserModal from '../sidebarPebble/UserModal';
import SideBarItemsContainer from './SidebarItemsContainer';
import './SidebarPebble.css';
function Sidebar({ onClose, items, itemsModal }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalRef = useRef(null);
    const profileIconRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target) && profileIconRef.current && !profileIconRef.current.contains(event.target)) {
                setIsModalOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [modalRef, profileIconRef]);
    const handleProfileIconClick = () => {
        setIsModalOpen(!isModalOpen);
    };
    return (React.createElement("div", { className: "sidebar" },
        React.createElement("div", { className: "menu-icon", onClick: onClose },
            React.createElement(NavArrowUp, { className: 'icon-detail' })),
        React.createElement("hr", null),
        React.createElement("div", { className: 'menu-items' },
            React.createElement(SideBarItemsContainer, { items: items })),
        React.createElement("div", { className: 'parent-menu-icon' },
            React.createElement("hr", null),
            React.createElement("div", { ref: profileIconRef, className: "menu-icon {`menu-profileIcon ${isModalOpen ? 'active' : ''}`}", onClick: handleProfileIconClick },
                React.createElement(User, { className: 'icon-detail' }))),
        isModalOpen && React.createElement("div", { ref: modalRef },
            React.createElement(UserModal, { items: itemsModal }))));
}
export default Sidebar;
