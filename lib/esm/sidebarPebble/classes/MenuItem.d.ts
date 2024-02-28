/// <reference types="react" />
import { MenuItemType } from "../types/MenuItemType";
export declare class MenuItem {
    icon: React.ComponentType;
    label?: string;
    target: string;
    constructor(item: MenuItemType);
}
