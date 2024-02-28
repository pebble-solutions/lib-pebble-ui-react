import ItemSideBar from './ItemSidebar';
import { ItemsContainerOptions } from './types/ItemsContainerOptions';
import './SidebarPebble.css';
import SimpleBarReact from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const SideBarItemsContainer = ({items}:ItemsContainerOptions) => {
    
  return (
    <div>
      <SimpleBarReact  style={{maxHeight :1000}}>
      { items.map((item , index)=> (
         <ItemSideBar key={index} icon={item.icon} label={item.label} target={item.target} />
        ))
      }
     </SimpleBarReact>
    </div>
  );
}

export default SideBarItemsContainer;


