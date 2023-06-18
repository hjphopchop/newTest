import CustomTable from '@/modules/customTable/components/CustomTable/CustomTable';
import React from 'react';

const TablePage = () => {
  return (
    <div className='flex items-center justify-center'>
      <CustomTable
        items={[
          { field1: 1, field2: true, field3: 'eeee', state: 'danger' },
          {
            field1: '2',
            field2: false,
            field3: new Date('Thu Jun 15 2023 18:03:19 GMT+0300'),
            state: 'warning',
          },
          {
            field1: '3',
            field2: new Date('Thu Jun 15 2023 18:03:19 GMT+0300'),
            field3: 'https://www.svgrepo.com/',
            state: 'normal',
          },
          {
            field1: '',
            field2: new Date('Thu Jun 15 2023 18:03:19 GMT+0300'),
            field3: 'https://www.svgrepo.com/',
            state: 'danger',
          },
          {
            field1: '5',
            field2: new Date('Thu Jun 15 2023 18:03:19 GMT+0300'),
            field3: null,
            state: 'normal',
          },
          {
            field1: '6',
            field2: new Date('Thu Jun 15 2023 18:03:19 GMT+0300'),
            field3: 'https://www.svgrepo.com/',
          },
          {
            field1: '7',
            field4: 'https://www.svgrepo.com/',
            field2: new Date('Thu Jun 15 2023 18:03:19 GMT+0300'),

            state: 'warning',
          },
          {
            field1: '8',
            field6: new Date('Thu Jun 15 2023 18:03:19 GMT+0300'),
            field3: 'https://www.svgrepo.com/',
            state: 'danger',
          },
          {
            field1: '9',
            field6: new Date('Thu Jun 15 2023 18:03:19 GMT+0300'),
            field3: 'https://www.svgrepo.com/',
            state: 'warning',
          },
          {
            field1: '10',
            field6: new Date('Thu Jun 15 2023 18:03:19 GMT+0300'),
            field3: 'https://www.svgrepo.com/',
            state: 'danger',
          },
          {
            field1: '11',
            field6: new Date('Thu Jun 15 2023 18:03:19 GMT+0300'),
          },
        ]}
        cols={['field1', 'field2', 'field3', 'field4', 'field5', 'field6']}
        pageSize={10}
      />
    </div>
  );
};

export default TablePage;
