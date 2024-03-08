import './App.css';
// import Sidebar from "@pebble-solutions/lib-pebble-ui-react/sidebarPebble/SidebarContainerPebble";
// import LineStaffSeveralContainer from './components/LineStaffSeveralContainer';
// import { getSeveralSquareWeekItems } from "./severalSquareContainerWeek";
// import { getStaffMemberItem } from "./staffMember";
import StaffList from './components/StaffList';


function App() {

  return (
    <div>
      <div>
        {/* <Sidebar /> */}
      </div>
      <div>
        <StaffList staffMembers={[]} />
        {/* <LineStaffSeveralContainer staffItem={getStaffMemberItem()} severalSquareWeekItems={getSeveralSquareWeekItems()} /> */}
      </div>
    </div>
  )
}

export default App

