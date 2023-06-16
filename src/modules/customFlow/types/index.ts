export type TNode = {
  id: number;
  title: string;
  state: 'danger' | 'warning' | 'normal';
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
