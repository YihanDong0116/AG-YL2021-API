const Graph = require('../../graph/graph');

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

const buildGraph = (graph) => {
  const g = new Graph();
  g.init(graph.nodes, graph.edges);
  return g;
};

const getVar = (def) => {
  switch (def.type) {
    case 'simple':
      return def.value;
    case 'graph':
      return buildGraph(def.value);
    default:
      throw new Error(`error initializing input for unknown variable type ${def.type}`);
  }
};

const generateVars = (initialVars) => ({
  variables: Object.keys(initialVars)
    .reduce((acc, curr) => {
      acc[curr] = getVar(initialVars[curr]);
      return acc;
    }, {}),
  console: [],
});

const execute = (initialVars, code) => {
  const execution = generateVars(initialVars);
  // eslint-disable-next-line no-eval
  eval(code);
  return { initial: generateVars(initialVars), executed: execution };
};

const executeAndGetNodesVisited = (code) => {
  const execution = execute({ graph: { type: 'graph', value: initialGraph } }, code);
  return execution.executed.variables.graph.events
    .filter((e) => e.type === 'visitNode')
    .reduce((acc, e) => {
      if (acc.indexOf(e.data.nodeId) === -1) {
        acc.push(e.data.nodeId);
      }
      return acc;
    }, []);
};

module.exports = {
  title: 'Putting Those Blocks to Work!',
  type: 'practice',
  problem: {
    type: 'graphBlockly',
    question: 'Use the provided blocks to build an algorithm that visits each node of the graph below, in any order.',
    data: {
      initialGraph,
      blocks: [
        {
          name: 'x_in_xs',
        },
        {
          name: 'nodes',
        },
        {
          name: 'edges',
        },
        {
          name: 'visit_node',
        },
        {
          name: 'print_message',
        },
        {
          name: 'var_name',
        },
      ],
    },
    hints: [
      'Drag blocks from the toolbox on the left into the space adjacent, when you\'re happy with your work click run to execute your code',
    ],
    sections: [{
      type: 'graph',
      content: initialGraph,
    }],
  },
  tests: [
    {
      feedback: 'It looks like you haven\'t visited any nodes. Use the blocks to construct an algorithm that visits each node.',
      check: (data) => {
        const nodes = executeAndGetNodesVisited(data.code);
        return nodes.length !== 0;
      },
    },
    {
      feedback: 'It looks like you haven\'t visited all the nodes. Make sure your algorithm visits each node, in any order.',
      check: (data) => {
        const nodes = executeAndGetNodesVisited(data.code);
        return nodes.length === initialGraph.nodes.length;
      },
    },
  ],
};
