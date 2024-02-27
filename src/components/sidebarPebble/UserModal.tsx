import ItemSideBar from './ItemSidebar';
import { ItemsContainerOptions } from '../../types/ItemsContainerOptions';
import '../../styles/SidebarPebble.css';

function UserModal({items}:ItemsContainerOptions) {
  return (
    <div className="modal">
      <div className="modal-content">
        
        {
        items.map((item , index) => (
          <ItemSideBar key={index} icon={item.icon} label={item.label} target={item.target} useModalStyles={true}  />
        ))
        }

      </div>
    </div>
  );
}

export default UserModal;