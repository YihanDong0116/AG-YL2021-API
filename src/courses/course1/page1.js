const uuid = require('uuid');

module.exports = {
  id: uuid.v4(),
  title: 'Dijkstra’s Algorithm',
  type: 'learn',
  sections: [
    {
      type: 'text',
      content: 'Have you ever wondered how applications such as Google Maps can plan the best route between one location and another? Most of these applications can plan routes that span huge distances without breaking a sweat; they’re not too fussy about location either, they can plan routes from one location to anywhere else; they can even plan routes by foot, for cars, on public transport, and by bicycle; and they’re super fast too!',
    },
    {
      type: 'text',
      content: 'As humans when we need to plan a route we might be able to just see it after studying a map for a while, or we might just remember a similar trip and follow the same route. Computers are not so lucky, they can’t just see or remember a route in the same way that we do, instead computers use advanced algorithms to search for the best route.',
    },
    {
      type: 'text',
      content: 'In this short course we will look at Dijkstra’s Algorithm, a neat little algorithm which can be used to find the shortest path between any two nodes in a graph. Nodes?',
    },
    {
      type: 'text',
      content: 'Graph? What are you talking about?! Great question - checkout the next lesson, we explain it all!',
    },
  ],
};
