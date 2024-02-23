import { useState, useRef, useEffect } from 'react';
import Sidebar from './Sidebar';
import SidebarSmall from './SidebarSmall';
import { MenuItem } from '../../classes/MenuItem';


type SidebarContainerProps = {
  items: MenuItem[]
  itemsModal:MenuItem[]
}

function SidebarContainerPebble({items, itemsModal}:SidebarContainerProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const sidebarRef = useRef<HTMLDivElement>(null);

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
      {isSidebarOpen && <Sidebar onClose={closeSidebar} items={items} itemsModal={itemsModal} />} 
    </div>
  );
}

export default SidebarContainerPebble;
