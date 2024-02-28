import { Link } from 'react-router-dom'; 
import { SquareType } from '../../types/SquareType';
import './PeriodRender.css';



const Square: React.FC<SquareType> = ({target}) => {
  return (
   
    <div className="square">
      <Link to={target} >

      </Link>
    </div>
    
  );
};

export default Square;