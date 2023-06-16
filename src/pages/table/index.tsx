import CustomTable from '@/modules/customTable/components/CustomTable/CustomTable';
import React from 'react';

const TablePage = () => {
  const obj = {
    date: new Date(),
  };
  console.log(obj);
  return (
    <div className='flex items-center justify-center'>
      <CustomTable
        items={[
          { field1: 33333, field2: true, field3: 'eeee', state: 'danger' },
          {
            field1: 'typescript',
            field2: false,
            field3: new Date('Thu Jun 15 2023 18:03:19 GMT+0300'),
            state: 'warning',
          },
          {
            field1: 'less',
            field6: new Date('Thu Jun 15 2023 18:03:19 GMT+0300'),
            field3: 'https://www.svgrepo.com/',
            state: 'normal',
          },
        ]}
        cols={['field1', 'field2', 'field3']}
      />
    </div>
  );
};

export default TablePage;
