import './App.css'
// import SquareContainerWeek from './components/periodRender/SquareContainerWeek';
// import {getSquareWeekItems} from './squareContainerWeek'
import SeveralSquareContainerWeek from './components/periodRender/SeveralSquareContainerWeek';
import {getSeveralSquareWeekItems} from './severalSquareContainerWeek'
import Sidebar from "@pebble-solutions/lib-pebble-ui-react/sidebarPebble/SidebarContainerPebble";

function App() {

 
  return (
    <div>
      <div>
        <Sidebar/>
      </div>
      <div>
        <SeveralSquareContainerWeek items={getSeveralSquareWeekItems()} />
      </div>
    </div>
  )
}

export default App
