import { SquareType } from "../types/SquareType"

export class SquareItem {
   
    id? : string
    target: string 
    label?: string 
    start? : Date
    end? : Date
    status? : string
    color?: string
    

    constructor(item: SquareType){
       
        this.id=item.id
        this.target=item.target
        this.label=item.label
        this.start=item.start
        this.end=item.end
        this.status=item.status
        this.color=item.color
        
    }
}