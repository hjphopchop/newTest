export const flowData = {
  nodes: [
    { id: 1, title: 'Node 1', state: 'danger', pos: { x: 100, y: 100 } },
    {
      id: 2,
      title: 'Node 2',
      state: 'warning',
      pos: { x: 200, y: 200 },
    },
    { id: 3, title: 'Node 3', state: 'normal', pos: { x: 300, y: 300 } },
  ],
  edges: [
    { from: 1, to: 2, width: 1 },
    { from: 2, to: 3, width: 1 },
  ],
};
