const uuid = require('uuid');

module.exports = {
  id: uuid.v4(),
  type: 'learn',
  sections: [
    {
      type: 'image',
      content: 'https://i.redd.it/tfugj4n3l6ez.png',
    },
    {
      type: 'animation',
      content: 'https://www.youtube.com/watch?v=k6Es9Qrh4Ao',
    },
    {
      type: 'text',
      content: 'viva la dijkstra',
    },
  ],
};
