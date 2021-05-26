const uuid = require('uuid');

module.exports = {
  id: uuid.v4(),
  title: 'Recap and a Little Direction',
  type: 'learn',
  sections: [
    {
      type: 'image',
      content: '/src/public/image/undirect-graph.png',
    },
    {
      type: 'text',
      content: 'So we have seen that a graph is a collection of nodes and edges. We have a clear system to describe a graph by labelling these nodes and edges. The nodes of the graph below are 1, 2, 3, 4, 5 and the edges are (1,2), (2,1), (2, 3), (3,2), (3,4), (3,5), (4,3), (4,1), (5,3), (1,4). All of this is going to be very useful very soon, we promise!',
    },
  ],
};
