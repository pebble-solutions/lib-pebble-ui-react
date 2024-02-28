import { Settings, User, SystemShut, Home, EmptyPage } from 'iconoir-react';
const menuItems = [
    {
        label: "Accueil",
        target: "/",
        icon: Home
    },
    {
        label: "Documents",
        target: "/docs",
        icon: EmptyPage
    },
    {
        label: "Utilisateurs",
        target: "/users",
        icon: User
    }
];
const menuItemsModal = [
    {
        label: "User ID",
        target: "/settings",
        icon: User
    },
    {
        label: "paramètres",
        target: "/settings",
        icon: Settings
    },
    {
        label: "Déconnexion",
        target: "/settings",
        icon: SystemShut,
        className: "disconnect"
    }
];
export function getMenuItems() {
    return menuItems;
}
export function getMenuItemsModal() {
    return menuItemsModal;
}
