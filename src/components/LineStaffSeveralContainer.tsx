import StaffMember from './periodRender/StaffMember';
import SeveralSquareContainerWeek from './periodRender/SeveralSquareContainerWeek';
import  {StaffMemberType} from '../components/periodRender/types/StaffMemberType';
import  {SeveralSquareContainerWeekType} from '../components/periodRender/types/SeveralSquareContainerWeektype';



interface LineStaffSeveralContainerProps {
    staffItem : StaffMemberType,
    severalSquareWeekItems  :SeveralSquareContainerWeekType
}

const LineStaffSeveralContainer :React.FC<LineStaffSeveralContainerProps> = (staffItem , severalSquareWeekItems) => {
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

