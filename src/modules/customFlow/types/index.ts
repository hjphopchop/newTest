import { Edge, Node } from 'reactflow';

type State = 'danger' | 'warning' | 'normal';
export type TNode = {
  id: number;
  title: string;
  state: State;
  pos: { x: number; y: number };
};

export type TEdge = {
  from: number;
  to: number;
  width: number;
};

export type TFlow = {
  nodes: TNode[];
  edges: TEdge[];
};

export type Elements = {
  nodes: Node[];
  edges: Edge[];
};

type CustomNodeData = {
  title: string;
  state: State;
};
export type CustomNodeProps = {
  data: CustomNodeData;
};

export type CustomFlowProps = {
  data: TFlow;
  onChange: (flow: TFlow) => void;
};
