import React from 'react';
import { ColorScheme, CustomTableRowProps } from '../../types';
import CustomTableItem from '../CustomTableItem/CustomTableItem';

const CustomTableRow = ({ row, cols }: CustomTableRowProps) => {
  const { state, ...rest } = row;
  const stableRowItems = {};
  cols.map((col) => {
    rest[col] ? stableRowItems[col] = rest[col]
    : stableRowItems[col] = 'Нет значения'
  })

  const colorScheme: ColorScheme = {
    danger: 'bg-red-500',
    warning: 'bg-yellow-500',
    normal: 'bg-green-500',
  };
  console.log(rest);
  const className = state && colorScheme[state] ? ` ${colorScheme[state]}` : '';

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
