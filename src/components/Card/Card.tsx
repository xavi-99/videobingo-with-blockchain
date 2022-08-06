import React from "react";

type CardProps = {
  numbers: number[];
  id: number;
};

type CellProps = {
  number: number;
};


const Cell : React.FC<CellProps> = ({number}) => {
  return (<div className="border-2 p-4">
    {number}

  </div>)
}

const Card: React.FC<CardProps> = ({ numbers, id }) => {
  return (
    <div card-id={id} className='flex'>
      <div className='grid grid-cols-4 gap-1'>
        {
        numbers.map((num) => {
          return (<Cell number={num}></Cell>);
        })}
      </div>
    </div>
  );
};

export default Card;
