import React from 'react';
import { MenuItem } from './classes/MenuItem';
type SidebarContainerProps = {
    items?: MenuItem[];
    itemsModal?: MenuItem[];
};
declare function SidebarContainerPebble({ items, itemsModal }: SidebarContainerProps): React.JSX.Element;
export default SidebarContainerPebble;
