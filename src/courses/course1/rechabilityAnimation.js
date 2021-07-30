const initialGraph = {
  width: 400,
  height: 400,
  nodes: [
    {
      name: 'a',
      id: 'a',
      x: 200,
      y: 200,
    },
    {
      name: 'b',
      id: 'b',
      x: 200,
      y: 100,
    },
    {
      name: 'c',
      id: 'c',
      x: 200,
      y: 300,
    },
    {
      name: 'd',
      id: 'd',
      x: 100,
      y: 200,
    },
    {
      name: 'e',
      id: 'e',
      x: 300,
      y: 200,
    },
  ],
  edges: [
    {
      id: '1',
      name: '',
      fromNodeId: 'a',
      toNodeId: 'b',
    },
    {
      id: '2',
      name: '',
      fromNodeId: 'b',
      toNodeId: 'a',
    },
    {
      id: '3',
      name: '',
      fromNodeId: 'b',
      toNodeId: 'c',
    },
    {
      id: '4',
      name: '',
      fromNodeId: 'c',
      toNodeId: 'd',
    },
    {
      id: '5',
      name: '',
      fromNodeId: 'a',
      toNodeId: 'e',
    },
    {
      id: '6',
      name: '',
      fromNodeId: 'e',
      toNodeId: 'd',
    },
  ],
};

module.exports = {
  title: 'Graph and Paths',
  type: 'learn',
  sections: [
    {
      type: 'text',
      content: 'We say that a node is reachable from another node if there is a path following the edges of a graph between the two nodes. The two following animations each show a path of edges from node a to node d. Because there exists a path from node a to d we say that node d is reachable from node a',
    },
    {
      type: 'graphAnimation',
      content: {
        initialGraph,
        events: [
          {
            type: 'visitNode',
            data: {
              nodeId: 'a',
            },
          },
          {
            type: 'traverseEdge',
            data: {
              edgeId: '1',
            },
          },
          {
            type: 'visitNode',
            data: {
              nodeId: 'b',
            },
          },
          {
            type: 'traverseEdge',
            data: {
              edgeId: '3',
            },
          },
          {
            type: 'visitNode',
            data: {
              nodeId: 'c',
            },
          },
          {
            type: 'traverseEdge',
            data: {
              edgeId: '4',
            },
          },
          {
            type: 'visitNode',
            data: {
              nodeId: 'd',
            },
          },
        ],
      },
    },
    {
      type: 'graphAnimation',
      content: {
        initialGraph,
        events: [
          {
            type: 'visitNode',
            data: {
              nodeId: 'a',
            },
          },
          {
            type: 'traverseEdge',
            data: {
              edgeId: '5',
            },
          },
          {
            type: 'visitNode',
            data: {
              nodeId: 'e',
            },
          },
          {
            type: 'traverseEdge',
            data: {
              edgeId: '6',
            },
          },
          {
            type: 'visitNode',
            data: {
              nodeId: 'd',
            },
          },
        ],
      },
    },
  ],
};
