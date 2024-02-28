import React from 'react';
import { Menu } from 'iconoir-react';
import './SidebarPebble.css';

function SidebarSmall ({ onMenuClick, isSmall }: { onMenuClick: () => void, isSmall: boolean }) {
  return (
    <div className='sidebarContainerPebble'>
      <div className={`sidebar ${isSmall ? 'sidebarSmall' : ''}`} >
        <div className=" menu-icon menuSmall-icon" onClick={onMenuClick}>
          <Menu className='icon-detail' />
        </div>
      </div>
    </div>
  );
}

export default SidebarSmall;
