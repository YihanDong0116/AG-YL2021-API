const uuid = require('uuid');

module.exports = {
  id: uuid.v4(),
  title: 'Graphs are Nodes and Edges',
  type: 'learn',
  sections: [
    {
      type: 'image',
      content: '/src/image/australian-map-with-graph.png',
    },
    {
      type: 'text',
      content: 'A graph is a collection of nodes and edges. We typically use graphs to show how data is connected. We can think of a map as a graph, the locations are nodes and the edges are roads or paths from one location to another.',
    },
    {
      type: 'text',
      content: 'Graphs can describe much more than just maps, we can also think of a social network as a graph, each person could be a node and if two people are friends we can connect them via an edge.',
    },
    {
      type: 'text',
      content: 'Many interesting systems can be described as a graph, and the best thing about a graph is that it’s very easy for a computer to understand.',
    },
    {
      type: 'text',
      content: 'It’s our map of Australia again, but this time as a graph with nodes and edges. Each node is a capital city, what might the edges represent?',
    },
  ],
};
