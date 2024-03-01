import Square  from './Square';
import './PeriodRender.css';
import { SquareItem } from './classes/SquareItem';


type SquareContainerWeekProps={
    items: SquareItem[]
}

const SquareContainerWeek : React.FC<SquareContainerWeekProps> = ({ items }) => {

    return (

        <div className='squareContainerWeek'>
            {items.map((item, id) => (
            <Square key={id} squareItem={item}/>
        ))}

        </div>
    );
};

export default SquareContainerWeek;


