const uuid = require('uuid');

module.exports = {
  id: uuid.v4(),
  title: 'Recap and a Little Direction',
  type: 'learn',
  sections: [
    {
      type: 'image',
      content: '/src/public/image/direct-graph.png',
    },
    {
      type: 'text',
      content: 'Do the above set of edges look strange to you? You might be wondering why we have doubled up on edges, we have both edges (1,2) and (2,1) connecting nodes 1 and 2 but only one green line in the graph above. What’s the deal? The answer to this is that the graph above is undirected, which means that connected nodes can be traversed in both directions, just as you might walk the distance from your bed to the fridge you can just as well walk back again - with a midnight snack of course! Another type of graph is a directed graph. In a directed graph each edge has a direction in which it can be traversed, we show this direction with an arrow. Here is a directed graph and the labels for its nodes and edges are respectively 1, 2, 3, 4, 5 and (1,2), (2,1), (2, 3), (3,2), (3,4), (4,3), (5,3), (4,1). What differences do you notice between the graph below and the one above? Is it possible to traverse this graph from node 3 to 5?',
    },
  ],
};
