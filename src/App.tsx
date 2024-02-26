import './App.css'
import './styles/navbarStyles.css'; 
import SidebarContainerPebble  from  './components/sidebarPebble/SidebarContainerPebble'
import { getMenuItems , getMenuItemsModal } from './menu';


function App() {

 
  return (
    <>
      <SidebarContainerPebble items={getMenuItems()} itemsModal={getMenuItemsModal()}/>
    </>
  )
}

export default App
