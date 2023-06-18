import React from 'react';
import { PaginationButtonProps } from '../../types';

const PaginationButton = ({
  title,
  disableCondition,
  onClick,
  styles = '',
}: PaginationButtonProps) => {
  return (
    <button
      disabled={disableCondition}
      onClick={onClick}
      className={
        'rounded-md bg-blue-500 px-5 py-1 disabled:bg-slate-500 ' + styles
      }
    >
      <span className='text-white'>{title}</span>
    </button>
  );
};

export default PaginationButton;
