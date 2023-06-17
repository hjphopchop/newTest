import { colorSelection } from '@/helpers';
import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { CustomNodeProps } from '../../types';

const CustomNode = memo(function CustomNode({ data }: CustomNodeProps) {
  const backgroundColor = colorSelection(data.state);
  return (
    <>
      <div className={`${backgroundColor} w-[100px] py-2 text-center`}>
        <Handle type='target' position={Position.Top} />
        <div>
          <span>{data.title}</span>
        </div>
        <Handle type='source' position={Position.Bottom} id='a' />
      </div>
    </>
  );
});

export default CustomNode;
