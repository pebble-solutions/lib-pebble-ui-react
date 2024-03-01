import React from 'react';
import SquareContainerWeek from './SquareContainerWeek';
import { SquareItem } from './classes/SquareItem';

interface SeveralSquareContainerWeekProps {
    items: SquareItem[];
}

const SeveralSquareContainerWeek: React.FC<SeveralSquareContainerWeekProps> = ({ items }) => {
    return (
        <div>
            {items.map((_itemRow, rowIndex) => (
                <div key={rowIndex}>
                    <SquareContainerWeek squareItemsList={items} />
                </div>
            ))}
        </div>
    );
};

export default SeveralSquareContainerWeek;
