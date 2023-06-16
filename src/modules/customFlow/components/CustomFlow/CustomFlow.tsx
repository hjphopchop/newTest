import React, { useCallback, useEffect, useMemo } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  BackgroundVariant,
  useNodesState,
  useEdgesState,
  addEdge,
  ReactFlowProvider,
  Node,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { TNode } from '../../types';

const CustomFlow = ({ data, onChange }: any) => {
  
  const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];
  const newNodes:Node[] = useMemo(() => [],[]);
  const nodesPrepare = useCallback((nodes:TNode[]) => {
    nodes.map((node) => {
      newNodes.push({
        id:node.id.toString(),
        data:{title: node.title, state: node.state},
        position: {x: node.pos.x, y: node.pos.y}})
      })},[newNodes])
    
 useEffect(() => {
  nodesPrepare(data.nodes)
 }, [data.nodes, nodesPrepare])
  return (
    <div className='h-[90vh] w-[90vw] '>
      <ReactFlowProvider>
        <ReactFlow
          nodes={newNodes}
          edges={initialEdges}
          onNodesChange={onChange}
        >
          <Background
            color='#000000'
            gap={20}
            size={1}
            variant={BackgroundVariant.Dots}
          />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
};

export default CustomFlow;
