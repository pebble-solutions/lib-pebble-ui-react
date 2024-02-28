"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ItemSidebar_1 = __importDefault(require("./ItemSidebar"));
require("./SidebarPebble.css");
const simplebar_react_1 = __importDefault(require("simplebar-react"));
require("simplebar-react/dist/simplebar.min.css");
const SideBarItemsContainer = ({ items }) => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(simplebar_react_1.default, { style: { maxHeight: 1000 } }, items.map((item, index) => (react_1.default.createElement(ItemSidebar_1.default, { key: index, icon: item.icon, label: item.label, target: item.target }))))));
};
exports.default = SideBarItemsContainer;
