"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
require("./SidebarPebble.css");
const ItemSideBar = ({ icon: IconComponent, label, target, useModalStyles }) => {
    const menuItemClass = useModalStyles ? 'modal-item' : 'menu-item';
    const iconDetailClass = useModalStyles ? 'icon--detail__modal' : 'icon-detail';
    return (react_1.default.createElement("div", { className: menuItemClass },
        react_1.default.createElement(react_router_dom_1.Link, { to: target },
            react_1.default.createElement("div", { className: iconDetailClass },
                react_1.default.createElement(IconComponent, null),
                react_1.default.createElement("p", null, label)))));
};
exports.default = ItemSideBar;
