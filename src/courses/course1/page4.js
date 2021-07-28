module.exports = {
  title: 'Recap and a Little Direction',
  type: 'learn',
  sections: [
    {
      type: 'graph',
      content: {
        width: 400,
        height: 400,
        nodes: [
          {
            id: 'a',
            name: 'a',
            x: 200,
            y: 200,
          },
          {
            id: 'b',
            name: 'b',
            x: 200,
            y: 100,
          },
          {
            id: 'c',
            name: 'c',
            x: 200,
            y: 300,
          },
          {
            id: 'd',
            name: 'd',
            x: 100,
            y: 200,
          },
          {
            id: 'e',
            name: 'e',
            x: 300,
            y: 200,
          },
        ],
        edges: [
          {
            id: '1',
            name: '(a, b)',
            fromNodeId: 'a',
            toNodeId: 'b',
          },
          {
            id: '2',
            name: '(a, c)',
            fromNodeId: 'a',
            toNodeId: 'c',
          },
          {
            id: '3',
            name: '(a, d)',
            fromNodeId: 'a',
            toNodeId: 'd',
          },
          {
            id: '4',
            name: '(a, e)',
            fromNodeId: 'a',
            toNodeId: 'e',
          },
          {
            id: '5',
            name: '(a, e)',
            fromNodeId: 'e',
            toNodeId: 'a',
          },
        ],
      },
    },
    {
      type: 'text',
      content: 'So we have seen that a graph is a collection of nodes and edges. We have a clear system to describe a graph by labelling these nodes and edges. The nodes of the graph below are 1, 2, 3, 4, 5 and the edges are (1,2), (2,1), (2, 3), (3,2), (3,4), (3,5), (4,3), (4,1), (5,3), (1,4). All of this is going to be very useful very soon, we promise!',
    },
  ],
};
