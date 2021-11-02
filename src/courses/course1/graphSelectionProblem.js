// graph creator problem
const graphNodes = ['a', 'c'];
const graphEdges = ['1', '5', '6'];

module.exports = {
  title: 'Know Your Nodes',
  type: 'practice',
  problem: {
    type: 'graphSelector',
    question: 'Let\'s spend some time checking our knowledge of graphs. The elements of the graph opposite - the nodes and edges - can be selected, select only the nodes a and c and the edges (a, b), (b, c) and (e, a). When are you satisfied with your selection click submit to check your answer.',
    data: {
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
          id: 'd',
          name: 'd',
          x: 200,
          y: 300,
        },
        {
          id: 'c',
          name: 'c',
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
          name: '(e, a)',
          fromNodeId: 'e',
          toNodeId: 'a',
        },
        {
          id: '6',
          name: '(b, c)',
          fromNodeId: 'b',
          toNodeId: 'c',
        },
      ],
    },
    hints: [
      'Recall that the edge (a, b) is a path from node a to node b, each edge has an arrow that shows the directionality of the edge',
    ],
    sections: [],
  },
  tests: [
    {
      feedback: 'It looks like you haven\'t selected the correct number of nodes.',
      check: (inputs) => inputs.nodes.length === graphNodes.length,
    },
    {
      feedback: 'It looks like you haven\'t selected the correct number of edges.',
      check: (inputs) => inputs.edges.length === graphEdges.length,
    },
    {
      feedback: 'It looks like some of your nodes are not right.',
      check: (inputs) => {
        for (let i = 0; i < graphNodes.length; i += 1) {
          if (inputs.nodes.indexOf(graphNodes[i]) === -1) {
            return false;
          }
        }
        return true;
      },
    },
    {
      feedback: 'It looks like some of your edges are not right.',
      check: (inputs) => {
        for (let i = 0; i < graphEdges.length; i += 1) {
          if (inputs.edges.indexOf(graphEdges[i]) === -1) {
            return false;
          }
        }
        return true;
      },
    },
  ],
};
