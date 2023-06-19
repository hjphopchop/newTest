import React from 'react';
import { CustomTableRowProps } from '../../types';
import { CustomTableItem } from '../CustomTableItem';
import { colorSelection } from '@/helpers';

const CustomTableRow = ({ row, cols }: CustomTableRowProps) => {
  const { state, ...rest } = row;
  const stableRowItems = {};
  cols.map((col) => {
    rest[col] || rest[col] === false
      ? (stableRowItems[col] = rest[col])
      : (stableRowItems[col] = 'Нет значения');
  });
  const className = colorSelection(state);

  return (
    <>
      {Object.values(stableRowItems).map((value, index) => (
        <div
          key={index}
          className={`relative z-10 flex   w-[100px] items-center justify-center md:w-[200px] ${className} break-all px-3 py-2  text-xs md:text-sm`}
        >
          <CustomTableItem item={value} />
        </div>
      ))}
    </>
  );
};

export default CustomTableRow;
