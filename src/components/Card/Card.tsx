import React, { useState } from "react";

type CardProps = {
  numbers: number[];
  selectedNumbers: number[];
  id: number;
};

type CellProps = {
  number: number;
  isSelected: boolean;
};

const Cell: React.FC<CellProps> = ({ number, isSelected }) => {
  let classList = isSelected ? "border-2 p-4 bg-red-700" : "border-2 p-4";

  return (
    <div className={classList}>
      {number} {isSelected}
    </div>
  );
};

const Card: React.FC<CardProps> = ({ numbers, selectedNumbers, id }) => {
  return (
    <div card-id={id} className='flex'>
      <div className='grid grid-cols-4 gap-1'>
        {numbers.map((num) => {
          return (
            <Cell
              key={num}
              isSelected={selectedNumbers.indexOf(num) !== -1}
              number={num}
            ></Cell>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
