import { colorSelection } from '@/helpers';
import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { CustomNodeProps } from '../../types';

const CustomNode = memo(function CustomNode({ data }: CustomNodeProps) {
  const backgroundColor = colorSelection(data.state);
  return (
    <>
      <div
        className={`${backgroundColor} w-[100px] rounded-md py-2 text-center`}
      >
        <Handle type='target' position={Position.Left} />
        <div>
          <span className='break-words'>{data.title}</span>
        </div>
        <Handle type='source' position={Position.Right} id='a' />
      </div>
    </>
  );
});

export default CustomNode;
