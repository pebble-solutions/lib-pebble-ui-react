import React from 'react';
import SquareContainerWeek from './SquareContainerWeek';
import { SquareItem } from './classes/SquareItem';

interface SeveralSquareContainerWeekProps {
    items: SquareItem[][];
}

const SeveralSquareContainerWeek: React.FC<SeveralSquareContainerWeekProps> = ({ items }) => {
    return (
        <div>
            {items.map((item, rowIndex) => (
                <div key={rowIndex}>
                    <SquareContainerWeek items={item} />
                </div>
            ))}
        </div>
    );
};

export default SeveralSquareContainerWeek;

