import Square  from './Square';
import './PeriodRender.css';
import { SquareItem } from '../../classes/SquareItem';


type SquareContainerWeekProps={
    items: SquareItem[]
}

const SquareContainerWeek = ({ items }: SquareContainerWeekProps) => {

    return (

        <div className='squareContainerWeek'>
            {items.map((item, id) => (
            <Square key={id} target={item.target} />
        ))}

        </div>
    );
}

export default SquareContainerWeek;
