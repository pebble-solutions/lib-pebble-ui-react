"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const iconoir_react_1 = require("iconoir-react");
const UserModal_1 = __importDefault(require("../sidebarPebble/UserModal"));
const SidebarItemsContainer_1 = __importDefault(require("./SidebarItemsContainer"));
require("./SidebarPebble.css");
function Sidebar({ onClose, items, itemsModal }) {
    const [isModalOpen, setIsModalOpen] = (0, react_2.useState)(false);
    const modalRef = (0, react_2.useRef)(null);
    const profileIconRef = (0, react_2.useRef)(null);
    (0, react_2.useEffect)(() => {
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
    return (react_1.default.createElement("div", { className: "sidebar" },
        react_1.default.createElement("div", { className: "menu-icon", onClick: onClose },
            react_1.default.createElement(iconoir_react_1.NavArrowUp, { className: 'icon-detail' })),
        react_1.default.createElement("hr", null),
        react_1.default.createElement("div", { className: 'menu-items' },
            react_1.default.createElement(SidebarItemsContainer_1.default, { items: items })),
        react_1.default.createElement("div", { className: 'parent-menu-icon' },
            react_1.default.createElement("hr", null),
            react_1.default.createElement("div", { ref: profileIconRef, className: "menu-icon {`menu-profileIcon ${isModalOpen ? 'active' : ''}`}", onClick: handleProfileIconClick },
                react_1.default.createElement(iconoir_react_1.User, { className: 'icon-detail' }))),
        isModalOpen && react_1.default.createElement("div", { ref: modalRef },
            react_1.default.createElement(UserModal_1.default, { items: itemsModal }))));
}
exports.default = Sidebar;
