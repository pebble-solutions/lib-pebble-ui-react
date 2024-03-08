import './App.css';
// import Sidebar from "@pebble-solutions/lib-pebble-ui-react/sidebarPebble/SidebarContainerPebble";
// import LineStaffSeveralContainer from './components/LineStaffSeveralContainer';
// import { getSeveralSquareWeekItems } from "./severalSquareContainerWeek";
import {useState, useEffect} from 'react';
import { getStaffMemberItems } from "./staffMember";
import StaffList from './components/StaffList';


function App() {

  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    fetch('https://api.pebble.solutions/v5/metric/')
      .then(response => response.json())
      .then(data => setMetrics(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <div>
        {/* <Sidebar /> */}
      </div>
      <div>
        <StaffList staffMembers={getStaffMemberItems()} severalSquareWeekItemsStaffMember={metrics} />
        {/* <LineStaffSeveralContainer staffItem={getStaffMemberItem()} severalSquareWeekItems={getSeveralSquareWeekItems()} /> */}
      </div>
    </div>
  )
}

export default App

