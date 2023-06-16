import { colorSelection } from '@/helpers';
import React from 'react';
import { Handle, Position } from 'reactflow';

const CustomNode = ({ data }: any) => {
  console.log(data);
  const backgroundColor = colorSelection(data.state)
  return (
    <>
    <div className={`${backgroundColor}`}>
    <Handle type='target' position={Position.Top} />
      <div >
        <span>{data.title}</span>
      </div>
      <Handle type='source' position={Position.Bottom} id='a' />
    </div>
      
    </>
  );
};

export default CustomNode;
