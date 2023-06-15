import CustomTable from '@/modules/customTable/components/CustomTable/CustomTable';
import React from 'react';

const TablePage = () => {
  return (
    <div className='flex items-center justify-center'>
      <CustomTable
        items={[
          { field1: 'val1', field2: 'val2', field3: 'val3' },
          { field1: 'val11', field2: 'val22', field3: 'val33' },
        ]}
        cols={['field1', 'field2', 'field3']}
      />
    </div>
  );
};

export default TablePage;
