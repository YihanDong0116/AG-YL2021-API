const initialGraph = {
  width: 400,
  height: 400,
  sourceNodeId: 'a',
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
  title: 'Block tester page',
  type: 'practice',
  problem: {
    type: 'graphBlockly',
    question: 'Use the provided blocks to build an algorithm that visits each node of the graph below in any order.',
    data: {
      initialGraph,
      blocks: [
        {
          name: 'graph',
        },
        {
          name: 'source_node',
        },
        {
          name: 'get_MIN_in_collection',
        },
        {
          name: 'item_in_collection_with_property',
        },
        {
          name: 'visit_node',
        },
        {
          name: 'traverse_edge',
        },
        {
          name: 'print_message',
        },
        {
          name: 'x_is_in_xs',
        },
        {
          name: 'while_do',
        },
        {
          name: 'x_is_y',
        },
        {
          name: 'number_of',
        },
        {
          name: 'neighbors_of_x',
        },
        {
          name: 'visited_nodes',
        },
        {
          name: 'unvisited_nodes',
        },
        {
          name: 'nodes',
        },
        {
          name: 'edges',
        },
        {
          name: 'edge_from_x_to_y',
        },
        {
          name: 'is_not_block',
        },
        {
          name: 'less_than',
        },
        {
          name: 'greater_than',
        },
        {
          name: 'set_to',
        },
        {
          name: 'edge_weight',
        },
        {
          name: 'distance_from_to',
        },
        {
          name: 'math_number',
        },
        {
          name: 'var_name',
        },
        {
          name: 'infinity',
        },
        {
          name: 'x_in_xs',
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
