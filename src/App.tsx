import './App.css'
import Sidebar  from  './components/sidebarPebble/SidebarContainerPebble'
// import SquareContainerWeek from './components/periodRender/SquareContainerWeek';
// import {getSquareWeekItems} from './squareContainerWeek'
import SeveralSquareContainerWeek from './components/periodRender/SeveralSquareContainerWeek';
import {getSeveralSquareWeekItems} from './severalSquareContainerWeek'


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
