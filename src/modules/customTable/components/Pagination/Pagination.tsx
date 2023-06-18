import React from 'react';
import { PaginationProps } from '../../types';

const Pagination = ({ onChange, page, pages }: PaginationProps) => {
  const nextPage = () => {
    onChange((prev) => ++prev);
  };
  const prevPage = () => {
    onChange((prev) => --prev);
  };

  return (
    <div className='flex gap-5'>
      <button disabled={page === 0} onClick={prevPage}>
        Назад
      </button>
      <span>
        Страница: {page + 1} из {pages}
      </span>
      <button disabled={page === pages - 1} onClick={nextPage}>
        Дальше
      </button>
    </div>
  );
};

export default Pagination;
