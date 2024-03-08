import LineStaffSeveralContainer from './LineStaffSeveralContainer';
import { StaffItem } from './periodRender/classes/StaffMember';
import { SquareItem } from './periodRender/classes/SquareItem';

/**
 * Props for the StaffList component.
 */
interface StaffListProps {
  /** List of staff members */
  staffMembers: StaffItem[];
  /** List of several square week items for each staff member */
  severalSquareWeekItemsStaffMember: SquareItem[];
}

/**
 * Component to display a list of LineStaffSeveralContainer.
 * 
 * @param {StaffListProps} props - The props for the StaffList component.
 * @returns {JSX.Element} A list of LineStaffSeveralContainer components.
 */
const StaffList: React.FC<StaffListProps> = ({ staffMembers, severalSquareWeekItemsStaffMember }: StaffListProps): JSX.Element => {
  
  /**
 * Get several square week items for a given staff member.
 * 
 * @param {string} staffMemberId - The ID of the staff member.
 * @returns {SquareItem[]} The several square week items for the staff member, or undefined if not found.
 */
const getSeveralSquareWeekItemsProps = (staffMemberId: string): SquareItem[] => {
  let filteredSeveralSquareWeekItemsStaffMember: SquareItem[] = [];

  for(let i=0; i<severalSquareWeekItemsStaffMember.length; i++){
      if(severalSquareWeekItemsStaffMember[i].owner._id === staffMemberId) {
        filteredSeveralSquareWeekItemsStaffMember.push(severalSquareWeekItemsStaffMember[i]);
      }
  }

  return filteredSeveralSquareWeekItemsStaffMember;
};

  return (
    <ul className='staffList'>
      {staffMembers.map((staffMember) => (
        <div key={staffMember.id} className='staffListItem'>
          <LineStaffSeveralContainer staffItem={staffMember} severalSquareWeekItems={getSeveralSquareWeekItemsProps(staffMember.id)} />
        </div>
      ))}
    </ul>
  );
};

export default StaffList;
