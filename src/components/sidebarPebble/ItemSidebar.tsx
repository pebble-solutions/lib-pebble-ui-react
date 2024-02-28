import { Link } from 'react-router-dom'; 
import { MenuItemType } from './types/MenuItemType';
import './SidebarPebble.css';

const ItemSideBar : React.FC<MenuItemType> = ({ icon:IconComponent, label, target, useModalStyles }) => {

  const menuItemClass = useModalStyles ? 'modal-item' : 'menu-item';
  const iconDetailClass = useModalStyles ? 'icon--detail__modal' : 'icon-detail';

    return (
      <div className={menuItemClass}>
        <Link to={target} >
          <div className={iconDetailClass}>
            <IconComponent />
            <p>{label}</p>
          </div>
        </Link>
      </div>
    );
}

export default ItemSideBar;
