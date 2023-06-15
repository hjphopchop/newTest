import React from 'react';
import { CustomTableProps, TableItem } from '../../types';
import CustomTableRow from '../CustomTableRow/CustomTableRow';

const CustomTable = ({ items, cols }: CustomTableProps) => {
  return (
    <>
      <div className='flex flex-col gap-5'>
        <div
          className={`grid w-[812px] grid-cols-${cols.length} gap-[1px] border`}
        >
          {cols.map((col, index) => (
            <CustomTableRow rowItem={col} headers key={index} />
          ))}
        </div>

        <div
          className={`grid w-[812px] grid-cols-${cols.length} gap-[1px] border`}
        >
          {items.map((item: TableItem, index: number) => (
            <>
              {Object.values(item).map((value, index) => (
                <CustomTableRow rowItem={value} key={index} />
              ))}
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default CustomTable;
