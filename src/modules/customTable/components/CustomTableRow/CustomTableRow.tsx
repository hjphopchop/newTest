import React from 'react';
import { TableItem } from '../../types';

export type CustomTableRowProps = {
  rowItem: any;
  headers?: boolean;
};
const CustomTableRow = ({ rowItem, headers }: CustomTableRowProps) => {
  return (
    <>
      {headers ? (
        <>
          <div className='mx-5 my-5 font-medium'>{rowItem}</div>
        </>
      ) : (
        <>
          <div className=' mx-5 my-5'>{rowItem}</div>
        </>
      )}
    </>
  );
};

export default CustomTableRow;
