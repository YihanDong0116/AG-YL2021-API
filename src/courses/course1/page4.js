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
            fromNodeId: 'a',
            toNodeId: 'c',
          },
          {
            id: '4',
            name: '',
            fromNodeId: 'a',
            toNodeId: 'd',
          },
          {
            id: '5',
            name: '',
            fromNodeId: 'd',
            toNodeId: 'a',
          },
        ],
      },
    },
    {
      type: 'text',
      content: 'So we have seen that a graph is a collection of nodes and edges. We have a clear system to describe a graph by labelling its nodes and edges. The nodes of the graph below are a, b, c, d and the edges are (a, b), (a, c), (a, d), (d, a). In the previous parts of this course we have always presented graphs with labelled edges, for the rest of this course we will omit the names of edges as we have for the graph above.',
    },
  ],
};
