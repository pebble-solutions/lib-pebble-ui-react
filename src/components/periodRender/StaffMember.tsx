import { StaffMemberType } from './types/StaffMemberType';
import { User } from 'iconoir-react'; 

type StaffMemberProps = {
    staffItem : StaffMemberType
}

const StaffMember: React.FC<StaffMemberProps> = ({staffItem}) => {
    return (
        <div className="staffMember" id={staffItem.id}>
            {staffItem.photo ? (
                <img src={staffItem.photo} alt={'Photo'} />
            ) : (
                <User className="userIcon" />
            )}
            <span className='staffName'>{`${staffItem.firstName} ${staffItem.lastName}`}</span>
        </div>
    );
};

export default StaffMember;
