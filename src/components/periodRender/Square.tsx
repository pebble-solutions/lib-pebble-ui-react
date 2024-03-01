import React from 'react';
import { Link } from 'react-router-dom';
import './PeriodRender.css';
import { SquareItem } from './classes/SquareItem';

interface SquareProps {
  squareItem: SquareItem;
  height?: string;
  width?: string;
}

const Square: React.FC<SquareProps> = ({ squareItem  }) => {
  const { target, height, width, color } = squareItem;

  const squareStyle: React.CSSProperties = {
    backgroundColor: color || 'transparent',
    height,
    width,
  };

  return (
    <div className="square" style={squareStyle}>
      <Link to={target}></Link>
    </div>
  );
};

export default Square;
