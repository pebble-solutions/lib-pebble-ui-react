import React from 'react';
import './SidebarPebble.css';
import { MenuItem } from './classes/MenuItem';
type SidebarProps = {
    onClose: () => void;
    items: MenuItem[];
    itemsModal: MenuItem[];
};
declare function Sidebar({ onClose, items, itemsModal }: SidebarProps): React.JSX.Element;
export default Sidebar;
