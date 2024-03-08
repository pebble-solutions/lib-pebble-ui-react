import React from 'react';
import LineStaffSeveralContainer from './LineStaffSeveralContainer';
import {StaffItem} from './periodRender/classes/StaffMember';
import { getSeveralSquareWeekItems } from "../severalSquareContainerWeek";
import { getStaffMemberItem } from "../staffMember";


interface StaffListProps {
  staffMembers: StaffItem[];
}

const StaffList: React.FC<StaffListProps> = ({ staffMembers }) => {
  
  return (
      <ul className='staffList'>
          {staffMembers.map((staffMember) => (
              <li className='staffListItem'>
                  <LineStaffSeveralContainer key={staffMember.id} staffItem={getStaffMemberItem()} severalSquareWeekItems={getSeveralSquareWeekItems()} />
              </li>
          ))}
      </ul>
  );
};

export default StaffList;
