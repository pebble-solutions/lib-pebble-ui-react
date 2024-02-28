"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const Sidebar_1 = __importDefault(require("./Sidebar"));
const SidebarSmall_1 = __importDefault(require("./SidebarSmall"));
const menu_1 = require("./menu");
function SidebarContainerPebble({ items, itemsModal }) {
    const [isSidebarOpen, setIsSidebarOpen] = (0, react_2.useState)(false);
    const sidebarRef = (0, react_2.useRef)(null);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };
    const itemsRender = items || (0, menu_1.getMenuItems)();
    const itemsModalRender = itemsModal || (0, menu_1.getMenuItemsModal)();
    (0, react_2.useEffect)(() => {
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
    return (react_1.default.createElement("div", { ref: sidebarRef },
        react_1.default.createElement(SidebarSmall_1.default, { onMenuClick: toggleSidebar, isSmall: !isSidebarOpen }),
        isSidebarOpen && react_1.default.createElement(Sidebar_1.default, { onClose: closeSidebar, items: itemsRender, itemsModal: itemsModalRender })));
}
exports.default = SidebarContainerPebble;
