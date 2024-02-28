"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const iconoir_react_1 = require("iconoir-react");
require("./SidebarPebble.css");
function SidebarSmall({ onMenuClick, isSmall }) {
    return (react_1.default.createElement("div", { className: 'sidebarContainerPebble' },
        react_1.default.createElement("div", { className: `sidebar ${isSmall ? 'sidebarSmall' : ''}` },
            react_1.default.createElement("div", { className: " menu-icon menuSmall-icon", onClick: onMenuClick },
                react_1.default.createElement(iconoir_react_1.Menu, { className: 'icon-detail' })))));
}
exports.default = SidebarSmall;
