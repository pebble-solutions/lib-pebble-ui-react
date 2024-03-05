import StaffMember from './periodRender/StaffMember';
import SeveralSquareContainerWeek from './periodRender/SeveralSquareContainerWeek';
import type { StaffMemberType } from '../components/periodRender/types/StaffMemberType';
import { SquareItem } from './periodRender/classes/SquareItem';

const LineStaffSeveralContainer = ({ staffItem, severalSquareWeekItems }: { staffItem: StaffMemberType, severalSquareWeekItems: SquareItem[][] }) => {
    return (
        <div className="lineStaffSeveralContainer">
            <div className="staffMemberContainer">
                <StaffMember staffItem={staffItem} />
            </div>
            <SeveralSquareContainerWeek items={severalSquareWeekItems} />
        </div>
    );
};

export default LineStaffSeveralContainer;


