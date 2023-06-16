import React from 'react';
import { isValidDate } from '../../helpers';
import Link from 'next/link';

const CustomTableItem = ({ item }: any) => {
  const urlRegex = /(http:\/\/|https:\/\/)[^\s]+/gi;
  if (typeof item === 'boolean') {
    return <span>{item ? '\u2713' : '\u25A1'}</span>;
  }

  if (Array.isArray(item)) {
    return (
      <ul>
        {item.map((value, index) => (
          <li key={index}>
            {typeof value === 'object' ? JSON.stringify(value) : String(value)}
          </li>
        ))}
      </ul>
    );
  }
  //instanceof Date не защищает от некорректной даты
  if (isValidDate(item)) {
    return <span>{item.toISOString().slice(0, 10)}</span>;
  }

  if (urlRegex.test(item)) {
    return (
      <Link href={item} target='_blank' rel='noopener noreferrer'>
        {item.slice(0, 30)}
      </Link>
    );
  }
  return <span>{item}</span>;
};

export default CustomTableItem;
