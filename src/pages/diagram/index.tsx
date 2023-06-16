import CustomFlow from '@/modules/customFlow/components/CustomFlow/CustomFlow';
import CustomNode from '@/modules/customFlow/components/CustomNode/CustomNode';
import { TFlow } from '@/modules/customFlow/types';
import React, { useMemo, useState } from 'react';

const DiagramPage = () => {
  const nodes = [
    { id: 1, title: 'Node 1', state: 'danger', pos: { x: 100, y: 100 } },
    {
      id: 2,
      title: 'Node 2',
      state: 'warning',
      pos: { x: 200, y: 200 },
    },
    { id: 3, title: 'Node 3', state: 'normal', pos: { x: 300, y: 300 } },
  ];

  const edges = [
    { from: 1, to: 2, width: 2 },
    { from: 2, to: 3, width: 2 },
  ];
  const dataFlow = { nodes, edges };
  const [flow, setFlow] = useState(dataFlow as TFlow);

  return (
    <div className='bg-green-400'>
      <CustomFlow data={flow} onChange={() => console.log('test')} />
    </div>
  );
};

export default DiagramPage;
