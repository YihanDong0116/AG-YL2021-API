const listsAreSame = (expected, actual) => {
  if (expected.length !== actual.length) {
    return false;
  }
  const sortedExpected = expected.sort();
  const sortedActual = actual.sort();
  for (let i = 0; i < sortedExpected.length; i += 1) {
    if (sortedExpected[i] !== sortedActual[i]) {
      return false;
    }
  }

  return true;
};

module.exports = {
  title: 'How’s Your Reach?',
  type: 'practice',
  problem: {
    type: 'multichoice',
    question: 'We’ve learnt that two nodes are connected if they share an edge, we have also learnt that some edges can only be traversed in a particular direction. Let’s combine these two ideas and decide if one node is reachable from another node. A node is reachable from another node if a path of nodes and edges exists between them. Node 4 is reachable from node 2 via the edges (2,3), (3,4). From the below select all that are TRUE.',
    data: {
      options: [
        {
          id: '1',
          content: 'Node 1 is reachable from node 5',
        },
        {
          id: '2',
          content: 'Node 5 is reachable from node 4',
        },
        {
          id: '3',
          content: 'Node 4 is reachable from node 1',
        },
      ],
    },
    hints: [
      'The edge with arrow means this edge has the direction. Only the end of the arrow is reachable from the beginning of the arrow, but the beginning of the arrow is not reachable from the end of the arrow.',
      'The edge with arrow means this edge does not have the direction. The other side of the arrow is reachable from both ends of the arrow.',
    ],
    sections: [
      {
        type: 'image',
        content: 'image/direct-graph.png',
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
    {
      feedback: 'Node 1 is reachable from node 5 via the edges (5,3),(3,4),(4,1) or (5,3),(3,2),(2,1). Node 4 is reachable from node 1 via the edges (1,2),(2,3),(3,4). Node 5 is not reachable from node 4 because there is no edges (3,5).',
      check: (inputs) => listsAreSame(['1', '3'], inputs.ids),
    },
  ],
};
