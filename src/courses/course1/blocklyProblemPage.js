const initialGraph = {
  width: 400,
  height: 400,
  sourceNodeId: 'a',
  nodes: [
    {
      id: 'a',
      name: 'A',
      x: 50,
      y: 200,
    },
    {
      id: 'b',
      name: 'B',
      x: 125,
      y: 125,
    },
    {
      id: 'd',
      name: 'D',
      x: 250,
      y: 200,
    },
    {
      id: 'c',
      name: 'C',
      x: 200,
      y: 300,
    },
    {
      id: 'f',
      name: 'F',
      x: 350,
      y: 75,
    },
    {
      id: 'e',
      name: 'E',
      x: 350,
      y: 200,
    },
  ],
  edges: [
    {
      id: '1',
      name: '10',
      fromNodeId: 'a',
      toNodeId: 'b',
    },
    {
      id: '2',
      name: '15',
      fromNodeId: 'a',
      toNodeId: 'c',
    },
    {
      id: '3',
      name: '15',
      fromNodeId: 'b',
      toNodeId: 'f',
    },
    {
      id: '4',
      name: '11',
      fromNodeId: 'b',
      toNodeId: 'd',
    },
    {
      id: '5',
      name: '5',
      fromNodeId: 'd',
      toNodeId: 'f',
    },
    {
      id: '6',
      name: '1',
      fromNodeId: 'e',
      toNodeId: 'f',
    },
    {
      id: '7',
      name: '2',
      fromNodeId: 'd',
      toNodeId: 'e',
    },
    {
      id: '8',
      name: '10',
      fromNodeId: 'c',
      toNodeId: 'e',
    },
  ],
};

module.exports = {
  title: 'Block tester page',
  type: 'practice',
  problem: {
    type: 'graphBlockly',
    question: 'Using the blocks provided on the left to create a Blockly program to implement the Dijkstra algorithm to find the shortest path from node A to node F. Then click the "Run" button to test if your code works! If you are confident enough then click “Submit” button to submit the answer.',
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
        {
          name: 'add',
        },
        {
          name: 'if',
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
