import { SquareType } from "../types/SquareType"

export class SquareItem {
    id?: string;
    target: string;
    label?: string;
    start?: Date;
    end?: Date;
    status?: string;
    color?: string;
    height?: string;
    width?: string;
    owner: {
        _id: string;
        firstname?: string;
        lastname?: string;
        matricule?: string;
    };

    constructor(item: SquareType) {
        const { id, target, label, start, end, status, color, height, width, owner } = item;
        this.id = id;
        this.target = target;
        this.label = label;
        this.start = start;
        this.end = end;
        this.status = status;
        this.color = color;
        this.height = height;
        this.width = width;
        this.owner = {
            _id: owner._id,
            firstname: owner.firstname,
            lastname: owner.lastname,
            matricule: owner.matricule
        };
    }
}
