import { StaffMemberType } from './types/StaffMemberType';
import { User } from 'iconoir-react'; 

const StaffMember: React.FC<StaffMemberType> = ({ id, photo, firstName, lastName }) => {
    return (
        <div className="staff-member" id={id}>
            {photo ? (
                <img src={photo} alt={`${firstName} ${lastName}`} />
            ) : (
                <User />
            )}
            <span>{`${firstName} ${lastName}`}</span>
        </div>
    );
};

export default StaffMember;
