import React from 'react';
import { PaginationProps } from '../../types';
import { PaginationButton } from '../PaginationButton';

const Pagination = ({ onChange, page, pages }: PaginationProps) => {
  const nextPage = () => {
    onChange((prev) => ++prev);
  };
  const prevPage = () => {
    onChange((prev) => --prev);
  };

  return (
    <div className='flex items-center justify-center gap-5  py-3'>
      <PaginationButton
        onClick={prevPage}
        disableCondition={page === 0}
        title={'Назад'}
      />

      <span className='break-words'>
        <span>Страница: </span>
        {page + 1} из {pages}
      </span>
      <PaginationButton
        onClick={nextPage}
        disableCondition={page === pages - 1}
        title={'Дальше'}
      />
    </div>
  );
};

export default Pagination;
