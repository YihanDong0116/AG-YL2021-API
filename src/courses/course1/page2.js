const uuid = require('uuid');

module.exports = {
  id: uuid.v4(),
  title: 'Dijkstra’s Algorithm',
  type: 'learn',
  sections: [
    {
      type: 'image',
      content: '/src/public/image/australian-map.png',
    },
    {
      type: 'text',
      content: 'This route from Sydney to Perth was planned by Google Maps in seconds, how would you plan this route, how long would it take you?',
    },
  ],
};
