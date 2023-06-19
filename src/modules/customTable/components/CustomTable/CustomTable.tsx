import React, { useState } from 'react';
import { CustomTableProps } from '../../types';
import { CustomTableRow } from '../CustomTableRow';
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
  console.log(items.length);
  console.log(pageSize);

  return (
    <>
      {headersLength && (
        <div className='xs:max-w-1/2 md:max-w-2/3 flex max-w-[90vw]  flex-col gap-5    drop-shadow-xl'>
          <div
            style={{ gridTemplateColumns: `repeat(${headersLength}, 1fr)` }}
            className={`grid max-h-[75vh]  shrink-0 gap-[1px]  overflow-auto   rounded-2xl bg-slate-500`}
          >
            {cols.map((col, index) => (
              <span
                key={index}
                className='break-words  bg-white py-2 text-center font-bold '
              >
                {col}
              </span>
            ))}

            {paginationsItems.map((item, index) => (
              <CustomTableRow key={index} row={item} cols={cols} />
            ))}
          </div>
          {pageSize < items.length && (
            <Pagination onChange={setPage} page={page} pages={pages} />
          )}
        </div>
      )}
    </>
  );
};

export default CustomTable;
