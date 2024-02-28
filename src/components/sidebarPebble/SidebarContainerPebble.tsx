import { useState, useRef, useEffect } from 'react';
import Sidebar from './Sidebar';
import SidebarSmall from './SidebarSmall';
import { MenuItem } from './classes/MenuItem';
import { getMenuItems, getMenuItemsModal } from './menu';

type SidebarContainerProps = {
  items?: MenuItem[]; // Marquez les propriétés comme optionnelles si elles peuvent être absentes
  itemsModal?: MenuItem[];
};

function SidebarContainerPebble({ items, itemsModal }: SidebarContainerProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Utilisez la logique de rendu conditionnel pour déterminer les éléments à afficher
  const itemsRender = items || getMenuItems();
  const itemsModalRender = itemsModal || getMenuItemsModal();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        closeSidebar();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef]);

  return (
    <div ref={sidebarRef}>
      <SidebarSmall onMenuClick={toggleSidebar} isSmall={!isSidebarOpen} />
      {isSidebarOpen && <Sidebar onClose={closeSidebar} items={itemsRender} itemsModal={itemsModalRender} />}
    </div>
  );
}

export default SidebarContainerPebble;
