module.exports = {
  title: 'Graphs are Nodes and Edges',
  type: 'learn',
  sections: [
    {
      type: 'text',
      content: 'Check out the image below - it\'s a graph, and you\'ll be seeing quite a few more like it in this course! The nodes of this graph are the pink circles, and the green lines between them are it\'s edges.',
    },
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
            y: 200,
          },
          {
            id: 'b',
            name: 'b',
            x: 200,
            y: 100,
          },
          {
            id: 'c',
            name: 'c',
            x: 200,
            y: 300,
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
            x: 300,
            y: 200,
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
            name: '(a, c)',
            fromNodeId: 'a',
            toNodeId: 'c',
          },
          {
            id: '3',
            name: '(a, d)',
            fromNodeId: 'a',
            toNodeId: 'd',
          },
          {
            id: '4',
            name: '(a, e)',
            fromNodeId: 'a',
            toNodeId: 'e',
          },
          {
            id: '5',
            name: '(e, a)',
            fromNodeId: 'e',
            toNodeId: 'a',
          },
        ],
      },
    },
    {
      type: 'text',
      content: 'If we\'re going to study graphs together we\'re going to need a precise way to describe them. For now it will be enough to just list a graph\'s two most important features, it\'s nodes and edges - later we will need to introduce some more features but first up we will keep it simple.',
    },
    {
      type: 'text',
      content: 'We will describe a node of a graph using the node\'s name, for example the graph above has a node c, and also d - plus a few more of course.',
    },
    {
      type: 'text',
      content: 'Edges also have names, in this course we will name an edge according to the pair of nodes it connects, for example the nodes a and b above are connected by an edge named (a, b). Edges have a direction, in the image above this is shown by an arrow on the edge line graphic, but this direction is also present in the name of each edge, the node that the edge extends from will always be presented first and the node that the edge leads to will be second so that (a, b) is the edge that extends from node a and ends at node b.',
    },
    {
      type: 'text',
      content: 'Simple enough so far? We hope so! If you\'re not so sure just yet don\'t worry we will get heaps of practice in soon enough!',
    },
  ],
};
