module.exports = {
  title: 'How’s Your Reach?',
  type: 'practice',
  problem: {
    type: 'multichoice',
    question: 'We’ve learnt that two nodes are connected if they share an edge, we have also learnt that some edges can only be traversed in a particular direction. Let’s combine these two ideas and decide if one node is reachable from another node. A node is reachable from another node if a path of nodes and edges exists between them. In the graph below node d is reachable from node b via the edges (b, c), (c, d). From the options opposite select all that are TRUE of the graph below.',
    data: {
      options: [
        {
          id: '1',
          content: 'Node a is reachable from node e',
        },
        {
          id: '2',
          content: 'Node e is reachable from node d',
        },
        {
          id: '3',
          content: 'Node d is reachable from node a',
        },
      ],
    },
    hints: [
      'Recall that edges have a direction.',
    ],
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
              y: 350,
            },
            {
              id: 'b',
              name: 'b',
              x: 300,
              y: 200,
            },
            {
              id: 'c',
              name: 'c',
              x: 200,
              y: 200,
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
              x: 200,
              y: 100,
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
              toNodeId: 'b',
            },
            {
              id: '5',
              name: '',
              fromNodeId: 'd',
              toNodeId: 'c',
            },
            {
              id: '6',
              name: '',
              fromNodeId: 'c',
              toNodeId: 'd',
            },
            {
              id: '7',
              name: '',
              fromNodeId: 'd',
              toNodeId: 'a',
            },
            {
              id: '8',
              name: '',
              fromNodeId: 'e',
              toNodeId: 'c',
            },
          ],
        },
      },
    ],
  },
  tests: [
    {
      feedback: 'You are missing the true option.',
      check: (inputs) => inputs.ids.indexOf('1') !== -1,
    },
    {
      feedback: 'You are missing the true option.',
      check: (inputs) => inputs.ids.indexOf('3') !== -1,
    },
    {
      feedback: 'You have selected a wrong option',
      check: (inputs) => inputs.ids.indexOf('2') === -1,
    },
  ],
};
