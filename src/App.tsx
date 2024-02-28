import './App.css'
import SidebarContainerPebble  from  './components/sidebarPebble/SidebarContainerPebble'
import SquareContainerWeek from './components/periodRender/SquareContainerWeek';
import { getMenuItems , getMenuItemsModal } from './menu';
import {getSquareWeekItems} from './squareContainerWeek'


function App() {

 
  return (
    <div>
      <div>
        <SidebarContainerPebble items={getMenuItems()} itemsModal={getMenuItemsModal()} />
      </div>
      <div>
        <SquareContainerWeek items={getSquareWeekItems()} />
      </div>
    </div>
  )
}

export default App
