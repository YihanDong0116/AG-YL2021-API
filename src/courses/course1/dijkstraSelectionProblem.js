// graph creator problem
const graphNodes = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
const graphEdges = ['2', '6', '13', '17'];

module.exports = {
  title: 'Dijkstra Routine Selection',
  type: 'practice',
  problem: {
    type: 'DijkstraProblem',
    question: 'Let\'s test your graph knowledge. How to apply Dijkstra\'s algorithm to find the shortest path between node a and node i? No worries, we will guide you step by step. First, click node a to set it as visited.',
    data: {
      width: 600,
      height: 400,
      nodes: [
        {
          id: 'a',
          name: 'a',
          x: 50,
          y: 200,
        },
        {
          id: 'b',
          name: 'b',
          x: 175,
          y: 50,
        },
        {
          id: 'c',
          name: 'c',
          x: 175,
          y: 350,
        },
        {
          id: 'f',
          name: 'f',
          x: 300,
          y: 50,
        },
        {
          id: 'h',
          name: 'h',
          x: 425,
          y: 50,
        },
        {
          id: 'd',
          name: 'd',
          x: 300,
          y: 350,
        },
        {
          id: 'e',
          name: 'e',
          x: 425,
          y: 350,
        },
        {
          id: 'g',
          name: 'g',
          x: 300,
          y: 200,
        },
        {
          id: 'i',
          name: 'i',
          x: 550,
          y: 200,
        },
      ],
      edges: [
        {
          id: '1',
          name: '4',
          fromNodeId: 'a',
          toNodeId: 'b',
        },
        {
          id: '2',
          name: '8',
          fromNodeId: 'a',
          toNodeId: 'c',
        },
        {
          id: '3',
          name: ' ',
          fromNodeId: 'b',
          toNodeId: 'c',
        },
        {
          id: '4',
          name: '11',
          fromNodeId: 'c',
          toNodeId: 'b',
        },
        {
          id: '5',
          name: '8',
          fromNodeId: 'b',
          toNodeId: 'f',
        },
        {
          id: '6',
          name: '1',
          fromNodeId: 'c',
          toNodeId: 'd',
        },
        {
          id: '7',
          name: '2',
          fromNodeId: 'f',
          toNodeId: 'g',
        },
        {
          id: '8',
          name: ' ',
          fromNodeId: 'g',
          toNodeId: 'f',
        },
        {
          id: '9',
          name: ' ',
          fromNodeId: 'g',
          toNodeId: 'd',
        },
        {
          id: '10',
          name: '6',
          fromNodeId: 'd',
          toNodeId: 'g',
        },
        {
          id: '11',
          name: '7',
          fromNodeId: 'f',
          toNodeId: 'h',
        },
        {
          id: '12',
          name: '4',
          fromNodeId: 'f',
          toNodeId: 'e',
        },
        {
          id: '13',
          name: '2',
          fromNodeId: 'd',
          toNodeId: 'e',
        },
        {
          id: '14',
          name: '14',
          fromNodeId: 'h',
          toNodeId: 'e',
        },
        {
          id: '15',
          name: ' ',
          fromNodeId: 'e',
          toNodeId: 'h',
        },
        {
          id: '16',
          name: '9',
          fromNodeId: 'h',
          toNodeId: 'i',
        },
        {
          id: '17',
          name: '10',
          fromNodeId: 'e',
          toNodeId: 'i',
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
      feedback: 'The first node is not correct.',
      check: (inputs) => inputs.nodes[0] === graphNodes[0],
    },
    {
      feedback: 'The second node is not correct, have a look back at where you missed.',
      check: (inputs) => inputs.nodes[1] === graphNodes[1],
    },
    {
      feedback: 'The third node should be node C, have a look back at where you missed.',
      check: (inputs) => inputs.nodes[2] === graphNodes[2],
    },
    {
      feedback: 'The fourth node is not correct, have a look back at where you missed.',
      check: (inputs) => inputs.nodes[3] === graphNodes[3],
    },
    {
      feedback: 'The fifth node is not correct, have a look back at where you missed.',
      check: (inputs) => inputs.nodes[4] === graphNodes[4],
    },
    {
      feedback: 'The sixth node is not correct, have a look back at where you missed.',
      check: (inputs) => inputs.nodes[5] === graphNodes[5],
    },
    {
      feedback: 'The seventh node is not correct, have a look back at where you missed.',
      check: (inputs) => inputs.nodes[6] === graphNodes[6],
    },
    {
      feedback: 'The eighth node is not correct, have a look back at where you missed.',
      check: (inputs) => inputs.nodes[7] === graphNodes[7],
    },
    {
      feedback: 'The Last node is not correct, have a look back at where you missed',
      check: (inputs) => inputs.nodes[8] === graphNodes[8],
    },
    {
      feedback: 'It looks like you haven\'t selected the correct number of edges.',
      check: (inputs) => inputs.edges.length === graphEdges.length,
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
