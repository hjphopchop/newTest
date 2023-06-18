import React from 'react';
import { CustomTableRowProps } from '../../types';
import CustomTableItem from '../CustomTableItem/CustomTableItem';
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
          className={`flex items-center justify-start  px-2 ${className}`}
        >
          <CustomTableItem item={value} />
        </div>
      ))}
    </>
  );
};

export default CustomTableRow;
