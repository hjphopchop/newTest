import React, { useState } from 'react';
import { CustomTableProps } from '../../types';
import CustomTableRow from '../CustomTableRow/CustomTableRow';
import Pagination from '../Pagination/Pagination';

const CustomTable = ({
  items,
  cols,
  pageSize = items.length,
}: CustomTableProps) => {
  const [page, setPage] = useState(0);
  const start = page * pageSize;
  const end = start + pageSize;
  const paginationsItems = items.slice(start, end);
  const pages = Math.ceil(items.length / pageSize);
  const headersLength = cols.length;

  return (
    <>
      <div className='flex w-[812px] flex-col gap-5'>
        <div
          className={`grid w-[812px]  grid-cols-${headersLength} gap-[1px] overflow-auto border`}
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
          {paginationsItems.map((item, index) => (
            <CustomTableRow key={index} row={item} cols={cols} />
          ))}
        </div>
        {pageSize < items.length && (
          <Pagination onChange={setPage} page={page} pages={pages} />
        )}
      </div>
    </>
  );
};

export default CustomTable;
