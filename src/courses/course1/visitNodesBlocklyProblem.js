const initialGraph = {
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
      id: '3',
      name: '',
      fromNodeId: 'a',
      toNodeId: 'd',
    },
    {
      id: '4',
      name: '',
      fromNodeId: 'a',
      toNodeId: 'e',
    },
    {
      id: '5',
      name: '',
      fromNodeId: 'e',
      toNodeId: 'a',
    },
    {
      id: '6',
      name: '',
      fromNodeId: 'b',
      toNodeId: 'c',
    },
  ],
};

module.exports = {
  title: 'Putting Those Blocks to Work!',
  type: 'practice',
  problem: {
    type: 'graphBlockly',
    question: 'Use the provided blocks to build an algorithm that visits each node of the graph below in any order.',
    data: {
      initialGraph,
      blocks: [
        {
          name: 'for_each_graph_elem_in_graph',
        },
        {
          name: 'graph',
        },
        {
          name: 'visit_node',
        },
        {
          name: 'traverse_edge',
        },
      ],
    },
    hints: [
      'Drag blocks from the toolbox on the left into the space adjacent, when your happy with your work click run to execute your code',
    ],
    sections: [{
      type: 'graph',
      content: initialGraph,
    }],
  },
  tests: [
    {
      feedback: 'It looks like you haven\'t selected the correct number of nodes.',
      check: (inputs) => inputs.events.length === initialGraph.nodes.length,
    },
  ],
};
