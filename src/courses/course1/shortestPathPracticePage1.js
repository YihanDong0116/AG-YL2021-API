const graphEdges = ['3', '4'];
const graphNodes = ['a', 'c', 'g'];

module.exports = {
  title: 'Finding the optimum path',
  type: 'practice',
  problem: {
    type: 'graphSelector',
    question: 'So now its your turn to find the shortest path. Given the graph on the left, select the edges and nodes that make up the shortest path between nodes a and c. Note: All edges in the graph is of the same length!',
    data: {
      width: 400,
      height: 400,
      nodes: [
        {
          id: 'a',
          name: 'a',
          x: 50,
          y: 50,
        },
        {
          id: 'b',
          name: 'b',
          x: 50,
          y: 250,
        },
        {
          id: 'c',
          name: 'c',
          x: 350,
          y: 250,
        },
        {
          id: 'd',
          name: 'd',
          x: 150,
          y: 250,
        },
        {
          id: 'f',
          name: 'f',
          x: 350,
          y: 50,
        },
        {
          id: 'g',
          name: 'g',
          x: 220,
          y: 50,
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
          name: '(b, d)',
          fromNodeId: 'b',
          toNodeId: 'd',
        },
        {
          id: '3',
          name: '(a, g)',
          fromNodeId: 'a',
          toNodeId: 'g',
        },
        {
          id: '4',
          name: '(g, c)',
          fromNodeId: 'g',
          toNodeId: 'c',
        },
        {
          id: '5',
          name: '(g, d)',
          fromNodeId: 'g',
          toNodeId: 'd',
        },
        {
          id: '6',
          name: '(d, c)',
          fromNodeId: 'd',
          toNodeId: 'c',
        },
        {
          id: '7',
          name: '(f, c)',
          fromNodeId: 'f',
          toNodeId: 'c',
        },
      ],
    },
    hints: ['Recall that a shortest path is the path with minimum length in a graph, and in our graph all edges are of the same length!'],
    sections: [],
  },
  tests: [
    {
      feedback: 'It looks like you forgot to select nodes along the path. Try again!',
      check: (inputs) => inputs.nodes.length !== 0,
    },
    {
      feedback: 'It looks like you haven\'t selected the correct number of nodes. Try again!',
      check: (inputs) => inputs.nodes.length === graphNodes.length,
    },
    {
      feedback: 'It looks like the path you selected is longer than the shortest path. Try again!',
      check: (inputs) => inputs.edges.length <= graphEdges.length,
    },
    {
      feedback: 'It looks like your path doesn\'t connects node a and node c. Try again!',
      check: (inputs) => inputs.edges.length >= graphEdges.length,
    },
    {
      feedback: 'It looks like some of your nodes are not right. Try again!',
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
      feedback: 'It looks like some of your edges are not right. Try again!',
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
