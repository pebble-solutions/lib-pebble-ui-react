import type { Owner } from "./owner";

export type SquareType = {
    
    id? : string
    target : string
    label? : string
    start? : Date
    end? : Date
    status? : string
    color? : string
    height? : string
    width? : string
    owner : Owner

}