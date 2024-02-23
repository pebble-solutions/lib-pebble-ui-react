import ItemSideBar from './ItemSidebar';
import '../../styles/navbarStyles.css'
import { ItemsContainerOptions } from '../../types/ItemsContainerOptions';

function UserModal({items}:ItemsContainerOptions) {
  return (
    <div className="modal">
      <div className="modal-content">
        
        {
        items.map(item => (
          <ItemSideBar icon={item.icon} label={item.label} target={item.target} useModalStyles={true}  />
        ))
        }

      </div>
    </div>
  );
}

export default UserModal;