import React, {
  SyntheticEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  BackgroundVariant,
  useNodesState,
  useEdgesState,
  Node,
  Edge,
  MarkerType,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { CustomFlowProps, Elements, TEdge, TNode } from '../../types';
import CustomNode from '../CustomNode/CustomNode';

const nodeTypes = { CustomNode: CustomNode };
const CustomFlow = ({ data, onChange }: CustomFlowProps) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const edgeOptions = {
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.Arrow,
    },
  };

  const elementsPrepare = useCallback(
    (nodes: TNode[], edges: TEdge[]) => {
      const newElements: Elements = {
        nodes: [],
        edges: [],
      };
      nodes.map((node) => {
        newElements.nodes.push({
          id: node.id.toString(),
          data: { title: node.title, state: node.state },
          type: 'CustomNode',
          position: { x: node.pos.x, y: node.pos.y },
        });
      });
      edges.map((edge) => {
        newElements.edges.push({
          id: `${edge.from}-${edge.to}`,
          source: edge.to.toString(),
          target: edge.from.toString(),
          style: { strokeWidth: edge.width, stroke: '#FFFFFF' },
        });
      });

      setNodes(newElements.nodes);
      setEdges(newElements.edges);
    },
    [setNodes, setEdges]
  );

  const onNodeDragStop = useCallback(
    (event: SyntheticEvent, node: Node) => {
      onChange({
        ...data,
        nodes: data.nodes.map((n: TNode) => {
          if (n.id.toString() === node.id) {
            return { ...n, pos: node.position };
          }
          return n;
        }),
      });
    },
    [data, onChange]
  );

  useEffect(() => {
    elementsPrepare(data.nodes, data.edges);
  }, []);

  return (
    <div className='h-[900px] w-[900px] '>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        defaultEdgeOptions={edgeOptions}
        onNodeDragStop={onNodeDragStop}
        fitView
      >
        <Background
          color='#000000'
          gap={20}
          size={1}
          variant={BackgroundVariant.Dots}
        />
      </ReactFlow>
    </div>
  );
};

export default CustomFlow;
