import './App.css'
import SquareContainerWeek from './components/periodRender/SquareContainerWeek';
import {getSquareWeekItems} from './squareContainerWeek'
import Sidebar from "@pebble-solutions/lib-pebble-ui-react/sidebarPebble/SidebarContainerPebble";

function App() {

 
  return (
    <div>
      <div>
        <Sidebar/>
      </div>
      <div>
        <SquareContainerWeek items={getSquareWeekItems()} />
      </div>
    </div>
  )
}

export default App
