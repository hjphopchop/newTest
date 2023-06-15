import React from 'react';
import { CustomTableProps, TableItem } from '../../types';

const CustomTable = ({ items, cols }: CustomTableProps) => {
  return (
    <>
      <div className='flex flex-col gap-5'>
        <div
          className={`grid w-[812px] grid-cols-${cols.length} gap-[1px] border`}
        >
          {cols.map((col, index) => (
            <div key={index} className='mx-5 my-5'>
              {col}
            </div>
          ))}
        </div>

        <div
          className={`grid w-[812px] grid-cols-${cols.length} gap-[1px] border`}
        >
          {items.map((item: TableItem, index: number) => (
            <>
              {Object.values(item).map((value, index) => (
                <div key={index} className=' mx-5 my-5'>
                  {value}
                </div>
              ))}
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default CustomTable;
