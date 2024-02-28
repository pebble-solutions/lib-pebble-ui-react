"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ItemSidebar_1 = __importDefault(require("./ItemSidebar"));
require("./SidebarPebble.css");
function UserModal({ items }) {
    return (react_1.default.createElement("div", { className: "modal" },
        react_1.default.createElement("div", { className: "modal-content" }, items.map((item, index) => (react_1.default.createElement(ItemSidebar_1.default, { key: index, icon: item.icon, label: item.label, target: item.target, useModalStyles: true }))))));
}
exports.default = UserModal;
