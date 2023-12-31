import { CustomTable } from '@/modules/customTable/components/CustomTable';
import { cols, items } from '@/modules/customTable/customTableData';
import React from 'react';

const TablePage = () => {
  return <CustomTable items={items} cols={cols} pageSize={9} />;
};

export default TablePage;
