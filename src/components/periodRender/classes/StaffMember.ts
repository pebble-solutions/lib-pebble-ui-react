import { StaffMemberType } from "../types/StaffMemberType";

export class StaffItem {

    id : string
    target? : string
    icon? : string;
    photo? : string;
    firstName : string;
    lastName : string;


    constructor(item: StaffMemberType){

        this.id=item.id
        this.target=item.target
        this.icon=item.icon
        this.firstName=item.firstName
        this.lastName=item.lastName
        

        }

}