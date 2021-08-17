const initialGraph = {
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
      y: 175,
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
      name: '(b, c)',
      fromNodeId: 'b',
      toNodeId: 'c',
    },
    {
      id: '3',
      name: '(a, g)',
      fromNodeId: 'a',
      toNodeId: 'g',
    },
    {
      id: '4',
      name: '(g, f)',
      fromNodeId: 'g',
      toNodeId: 'f',
    },
    {
      id: '5',
      name: '(f, d)',
      fromNodeId: 'f',
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
};

module.exports = {
  title: 'Shortest Paths',
  type: 'learn',
  sections: [
    {
      type: 'text',
      content: 'As we have discussed earlier in the course we can use applications such as Google Maps to plan routes for us. Often these applications will show us the shortest route or the quickest route, we say that they give us the optimum solution. ',
    },
    {
      type: 'text',
      content: 'For the next part of the course we are going to consider how we can study graphs to find the optimum route from one node to another node.',
    },
    {
      type: 'text',
      content: 'As usual we’re going to keep things simple first, and then build on that later to handle more complicated cases. Let’s first assume that the length of all edges are the same. For this special case finding the shortest path is fairly simple, we just need to find the path between two nodes with the least number of edges. A simple method to do this for any graph is to find all paths  in a graph between the two nodes and count the number of edges each path, this count we call the path cost. The path with the lowest cost is the shortest. Check out the animation below to see the shortest path between nodes 1 and 7, we know this is the shortest path because all other paths have a greater path cost.',
    },
    {
      type: 'graphAnimation',
      content: {
        initialGraph,
        events: [
          {
            type: 'visitNode',
            data: {
              nodeId: 'a',
            },
          },
          {
            type: 'traverseEdge',
            data: {
              edgeId: '1',
            },
          },
          {
            type: 'visitNode',
            data: {
              nodeId: 'b',
            },
          },
          {
            type: 'traverseEdge',
            data: {
              edgeId: '2',
            },
          },
          {
            type: 'visitNode',
            data: {
              nodeId: 'c',
            },
          },
        ],
      },
    },
  ],
};
