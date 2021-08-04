// graph creator problem
const graphNodes = ['a', 'b', 'c', 'd'];
const graphEdges = ['(a, b)', '(b, a)', '(b, c)', '(c, d)'];

module.exports = {
  title: 'How\'s Your Reach?',
  type: 'practice',
  problem: {
    type: 'graphCreator',
    question: 'Create a graph with nodes a, b, c and d and edges (a, b), (b, a), (b, c) and (c, d)',
    data: {},
    hints: [
      'The nodes on this graph should have the labels [a, b, c, d] and recall that the edge (a, b) is a path from node a to node b',
    ],
    sections: [],
  },
  tests: [
    {
      feedback: 'It looks like you don\'t have the correct number of nodes',
      check: (inputs) => inputs.nodes.length === graphNodes.length,
    },
    {
      feedback: 'It looks like you don\'t have the correct number of edges',
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
