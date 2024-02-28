"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMenuItemsModal = exports.getMenuItems = void 0;
const iconoir_react_1 = require("iconoir-react");
const menuItems = [
    {
        label: "Accueil",
        target: "/",
        icon: iconoir_react_1.Home
    },
    {
        label: "Documents",
        target: "/docs",
        icon: iconoir_react_1.EmptyPage
    },
    {
        label: "Utilisateurs",
        target: "/users",
        icon: iconoir_react_1.User
    }
];
const menuItemsModal = [
    {
        label: "User ID",
        target: "/settings",
        icon: iconoir_react_1.User
    },
    {
        label: "paramètres",
        target: "/settings",
        icon: iconoir_react_1.Settings
    },
    {
        label: "Déconnexion",
        target: "/settings",
        icon: iconoir_react_1.SystemShut,
        className: "disconnect"
    }
];
function getMenuItems() {
    return menuItems;
}
exports.getMenuItems = getMenuItems;
function getMenuItemsModal() {
    return menuItemsModal;
}
exports.getMenuItemsModal = getMenuItemsModal;
