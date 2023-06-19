import React, { SyntheticEvent, useCallback, useEffect } from 'react';
import ReactFlow, {
  Controls,
  Background,
  BackgroundVariant,
  useNodesState,
  useEdgesState,
  Node,
  addEdge,
  MarkerType,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { CustomFlowProps, Elements, TEdge, TNode } from '../../types';
import { CustomNode } from '../CustomNode';

const nodeTypes = { CustomNode: CustomNode };
const CustomFlow = ({ data, onChange }: CustomFlowProps) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const edgeOptions = {
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.Arrow,
    },
    style: {
      stroke: '#3d3c3c',
    },
  };
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

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
          source: edge.from.toString(),
          target: edge.to.toString(),
          style: { strokeWidth: edge.width, stroke: '#3d3c3c' },
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
    <div className='h-[60vh] w-full rounded-2xl bg-white drop-shadow-xl md:h-[90vh]'>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        defaultEdgeOptions={edgeOptions}
        onNodeDragStop={onNodeDragStop}
        proOptions={{ account: 'paid-pro', hideAttribution: true }}
        fitView
      >
        <Background
          color='#000000'
          gap={20}
          size={1}
          variant={BackgroundVariant.Cross}
        />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default CustomFlow;
