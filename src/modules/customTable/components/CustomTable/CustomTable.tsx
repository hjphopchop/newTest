import React from 'react';
import { CustomTableProps } from '../../types';
import CustomTableRow from '../CustomTableRow/CustomTableRow';

const CustomTable = ({ items, cols }: CustomTableProps) => {
  return (
    <>
      <div className='flex flex-col gap-5'>
        <div
          className={`grid w-[812px] grid-cols-${cols.length} gap-[1px] border`}
        >
          {cols.map((col, index) => (
            <span key={index} className='font-bold'>
              {col}
            </span>
          ))}
        </div>

        <div
          className={`grid w-[812px] grid-cols-${cols.length} gap-[1px] border`}
        >
          {items.map((item, index) => (
            <CustomTableRow key={index} row={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CustomTable;
