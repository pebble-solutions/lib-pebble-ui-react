import{ useState, useRef, useEffect } from 'react';
import { Menu, User } from 'iconoir-react';
import UserModal from '../sidebarPebble/UserModal';
import SideBarItemsContainer from './SidebarItemsContainer'
import '../../styles/navbarStyles.css'
import { MenuItem } from '../../classes/MenuItem';

type SidebarProps = {
  onClose: () => void
  items: MenuItem[]
  itemsModal:MenuItem[]
}

function Sidebar({ onClose , items, itemsModal}: SidebarProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const profileIconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node) && profileIconRef.current && !profileIconRef.current.contains(event.target as Node)) {
        setIsModalOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, profileIconRef]);

  const handleProfileIconClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="sidebar">
      <div className="menu-icon" onClick={onClose}>
        <Menu className='icon-detail' />
      </div>
      <hr />
      
      <SideBarItemsContainer items={items} />
      
      <div ref={profileIconRef} className={`menu-profileIcon ${isModalOpen ? 'active' : ''}`} onClick={handleProfileIconClick}>
        <hr />
        <div className="menu-icon">
          <User className='icon-detail' />
        </div>
      </div>
      {isModalOpen && <div ref={modalRef}><UserModal items={itemsModal} /></div>}
    </div>
  );
}

export default Sidebar;
