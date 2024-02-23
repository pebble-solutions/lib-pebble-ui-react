import ItemSideBar from './ItemSidebar';
import { ItemsContainerOptions } from '../../types/ItemsContainerOptions';
import '../../styles/navbarStyles.css'

const SideBarItemsContainer = ({items}:ItemsContainerOptions) => {
    
  return (
    <div className='menu-items'>
      {
        items.map(item => (
         <ItemSideBar  icon={item.icon} label={item.label} target={item.target}   />
        ))
      }
     
    </div>
  );
}

export default SideBarItemsContainer;