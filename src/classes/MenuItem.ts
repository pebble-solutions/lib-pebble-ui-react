import { MenuItemType } from "../types/MenuItemType"

export class MenuItem {
   
    icon : React.ComponentType
    label?: string
    target: string
    

    constructor(item: MenuItemType){
       
        this.icon=item.icon
        this.label=item.label
        this.target=item.target
   
    }
}

