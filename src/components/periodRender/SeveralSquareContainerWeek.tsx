import React from 'react';
import SquareContainerWeek from './SquareContainerWeek';
import { SquareItem } from './classes/SquareItem';

interface SeveralSquareContainerWeekProps {
    items: SquareItem[];
}

const SeveralSquareContainerWeek: React.FC<SeveralSquareContainerWeekProps> = ({ items }) => {

    // Fonction qui sépare les metric par bloc de 7 
    // TODO : Filtrer les metric sur des période prédéfinies
    const filteredItemsByWeek = () => {
        let filteredItemsByWeekReturn = [];
        let i = 0;
    
        while (i < items.length) {
            let tabWeekItem = [];
            for (let j = 0; j < 7 && i + j < items.length; j++) {
                tabWeekItem.push(items[i + j]);
            }
            i += 7;
            filteredItemsByWeekReturn.push(tabWeekItem);
        }
    
        return filteredItemsByWeekReturn;
    };
    

    return (
        <div className='severalWeeksContainer'>
            {filteredItemsByWeek().map((item, rowIndex) => (
                <div key={rowIndex}>
                    <SquareContainerWeek items={item} />
                </div>
            ))}
        </div>
    );
};

export default SeveralSquareContainerWeek;

