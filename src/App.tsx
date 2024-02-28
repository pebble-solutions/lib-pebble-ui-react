import './App.css'
import Sidebar  from  './components/sidebarPebble/SidebarContainerPebble'
import SquareContainerWeek from './components/periodRender/SquareContainerWeek';
import {getSquareWeekItems} from './squareContainerWeek'


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
