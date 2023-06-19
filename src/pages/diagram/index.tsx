import { CustomFlow } from '@/modules/customFlow/components/CustomFlow';
import { flowData } from '@/modules/customFlow/customFlowData';
import { TFlow } from '@/modules/customFlow/types';
import React, { useState } from 'react';

const DiagramPage = () => {
  const [flow, setFlow] = useState(flowData as TFlow);
  const onChange = (flow: TFlow) => setFlow(flow);

  return <CustomFlow data={flow} onChange={onChange} />;
};

export default DiagramPage;
