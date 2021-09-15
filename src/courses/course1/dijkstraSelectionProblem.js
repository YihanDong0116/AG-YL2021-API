// graph creator problem
const graphNodes = ['a', 'b', 'c', 'f', 'h', 'd', 'e', 'g', 'i'];
const graphEdges = ['2', '7', '14', '18'];
const wrongNode = ' ';

module.exports = {
  title: 'Dijkstra Routine Selection',
  type: 'practice',
  problem: {
    type: 'graphSelector',
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
          x: 150,
          y: 100,
        },
        {
          id: 'c',
          name: 'c',
          x: 150,
          y: 300,
        },
        {
          id: 'd',
          name: 'd',
          x: 250,
          y: 100,
        },
        {
          id: 'e',
          name: 'e',
          x: 250,
          y: 200,
        },
        {
          id: 'f',
          name: 'f',
          x: 250,
          y: 300,
        },
        {
          id: 'g',
          name: 'g',
          x: 350,
          y: 100,
        },
        {
          id: 'h',
          name: 'h',
          x: 350,
          y: 300,
        },
        {
          id: 'i',
          name: 'i',
          x: 450,
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
          name: '11',
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
          toNodeId: 'd',
        },
        {
          id: '6',
          name: '7',
          fromNodeId: 'c',
          toNodeId: 'e',
        },
        {
          id: '7',
          name: '1',
          fromNodeId: 'c',
          toNodeId: 'f',
        },
        {
          id: '8',
          name: '2',
          fromNodeId: 'd',
          toNodeId: 'e',
        },
        {
          id: '9',
          name: '2',
          fromNodeId: 'e',
          toNodeId: 'd',
        },
        {
          id: '10',
          name: '6',
          fromNodeId: 'e',
          toNodeId: 'f',
        },
        {
          id: '11',
          name: '6',
          fromNodeId: 'f',
          toNodeId: 'e',
        },
        {
          id: '12',
          name: '7',
          fromNodeId: 'd',
          toNodeId: 'g',
        },
        {
          id: '13',
          name: '4',
          fromNodeId: 'd',
          toNodeId: 'h',
        },
        {
          id: '14',
          name: '2',
          fromNodeId: 'f',
          toNodeId: 'h',
        },
        {
          id: '15',
          name: '14',
          fromNodeId: 'g',
          toNodeId: 'h',
        },
        {
          id: '16',
          name: '14',
          fromNodeId: 'h',
          toNodeId: 'g',
        },
        {
          id: '17',
          name: '9',
          fromNodeId: 'g',
          toNodeId: 'i',
        },
        {
          id: '18',
          name: '10',
          fromNodeId: 'h',
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
      feedback: 'It looks like you haven\'t selected the correct number of nodes.',
      check: (inputs) => inputs.nodes.length === graphNodes.length,
    },
    {
      feedback: 'It looks like you haven\'t selected the correct number of edges.',
      check: (inputs) => inputs.edges.length === graphEdges.length,
    },
    {
      feedback: `It looks like some of your nodes are not right${wrongNode}`,
      check: (inputs) => {
        for (let i = 0; i < graphNodes.length; i += 1) {
          if (inputs.nodes[i] !== graphNodes[i]) {
            wrongNode.concat(inputs.nodes[i].toNodeId);
            // TODO: solve the feedback problem: transfer the node that students select wrongly.
            // eslint-disable-next-line no-console
            console.log(inputs.nodes[i]);
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
