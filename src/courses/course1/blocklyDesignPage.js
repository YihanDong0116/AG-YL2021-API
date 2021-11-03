// Dijkstra algorithm implementation from:
// https://levelup.gitconnected.com/finding-the-shortest-path-in-javascript-dijkstras-algorithm-8d16451eea34
// modified by: Matt
// find the shortest node function
const shortestDistanceNode = (nodes, visited, distances) => {
  // create a default value for shortest
  let shortest = null;

  // for each node in the distances object
  for (let i = 0; i < nodes.length; i += 1) {
    const currNode = nodes[i];
    // if no node has been assigned to shortest yet
    // or if the current node's distance is smaller than the current shortest
    const currentIsShortest = shortest === null || distances[currNode.id] < distances[shortest.id];
    // and if the current node is in the unvisited set
    if (currentIsShortest && !visited.includes(currNode)) {
      // update shortest to be the current node
      shortest = currNode;
    }
  }
  return shortest;
};

// returns the neighbors of a node
const getNeighbors = (node, graph) => {
  const { nodes, edges } = graph;
  const neighbors = [];
  for (let i = 0; i < edges.length; i += 1) {
    const edge = edges[i];
    if (edge.fromNodeId === node.id) {
      neighbors.push(nodes.find((e) => e.id === edge.toNodeId));
    }
  }
  return neighbors;
};

const findShortestPath = (graph, startNodeId, endNodeId) => {
  // track distances from the start node using a hash object
  // set distance of all nodes to infinity
  const { nodes } = graph;
  const distances = {};
  for (let i = 0; i < nodes.length; i += 1) {
    const node = nodes[i];
    distances[node.id] = Infinity;
  }
  // set distance of start node to be zero
  distances[startNodeId] = 0;

  // track paths using a hash object
  const parents = { endNode: null };
  for (let i = 0; i < nodes.length; i += 1) {
    const child = nodes[i];
    parents[child.id] = startNodeId;
  }

  // collect visited nodes
  const visited = [];
  // find the nearest node
  let node = shortestDistanceNode(nodes, visited, distances);

  // for that node:
  while (node) {
    // find its distance from the start node & its child nodes
    const distance = distances[node.id];
    const children = getNeighbors(node, graph);

    // for each of the child nodes
    for (let i = 0; i < children.length; i += 1) {
      if (children[i].id !== startNodeId) {
        const childId = children[i].id;
        // default distance is 1 - for unweighted edges
        const newdistance = distance + 1;
        if (!distances[childId] || distances[childId] > newdistance) {
          // save the distance to the object
          distances[childId] = newdistance;
          // record the path
          parents[childId] = node;
        }
      }
    }
    // move the current node to the visited set
    visited.push(node);
    // move to the nearest neighbor node
    node = shortestDistanceNode(nodes, visited, distances);
  }

  // using the stored paths from start node to end node
  // record the shortest path
  const shortestPath = [endNodeId];
  let parent = parents[endNodeId];
  while (parent) {
    shortestPath.push(parent.id);
    parent = parents[parent];
  }
  shortestPath.reverse();

  // this is the shortest path
  const results = {
    distance: distances[endNodeId],
    path: shortestPath,
    visited,
  };
  // return the shortest path & the end node's distance from the start node
  return results;
};

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
    question:
      'Use the provided blocks to build an algorithm that visits each node of the graph below in any order.',
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
    sections: [
      {
        type: 'graph',
        content: initialGraph,
      },
    ],
  },
  tests: [
    // 3. Distance from source node to all other nodes  is set to infinity
    {
      feedback:
        'The distances from the source nodes to all other nodes was not set to infinity at first. Do not forget the Djikstra steps.',
      check: (inputs) => {
        const fromNode = inputs.nodes.getNodeById(inputs.sourceNodeId);
        for (let i = 0; i < inputs.nodes.length; i += 1) {
          if (fromNode.distance[inputs.nodes[i].id] !== Infinity) {
            return false;
          }
        }
        return true;
      },
    },
    // 4. Distance from source node to source node  is set to zero
    {
      feedback: 'Distance from source node to source node  is set to zero',
      check: (inputs) => {
        const sourceNode = inputs.nodes.getNodeById(inputs.sourceNodeId);
        if (sourceNode.distance[inputs.sourceNodeId] !== 0) {
          return false;
        }
        return true;
      },
    },
    // 5. Check the sequence of the visited nodes are correct
    {
      feedback:
        'The nodes are not visited in the correct order. Please make sure of the following two steps: 1. you set the distances from source node to current node correctly, and 2. The minimum distance from the source node is correctly chosen',
      check: (inputs) => {
        const result = findShortestPath(initialGraph, inputs.sourceNodeId, inputs.endNodeId);
        for (let i = 0; i < inputs.visited.length; i += 1) {
          if (inputs.visited[i].id !== result.visited[i].id) {
            return false;
          }
        }
        return true;
      },
    },
    // 6. Check how many times set distances have been done
  ],
};
