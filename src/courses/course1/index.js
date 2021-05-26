const uuid = require('uuid');
const page1 = require('./page1');
const page2 = require('./page2');
const page3 = require('./page3');
const page4 = require('./page4');
const page5 = require('./page5');
const page6 = require('./page6');
const page7 = require('./page7');
const page8 = require('./page8');

const pagelist = [page1, page2, page3, page4, page5, page6, page7, page8];

for (let i = 0; i < pagelist.length; i += 1) {
  if (i === 0) {
    pagelist[i].next = pagelist[i + 1].id;
  } else if (i === pagelist.length - 1) {
    pagelist[i].previous = pagelist[i - 1].id;
  } else {
    pagelist[i].next = pagelist[i + 1].id;
    pagelist[i].previous = pagelist[i - 1].id;
  }
}

module.exports = {
  name: 'Dijkstra’s Algorithm',
  id: uuid.v4(),
  pages: pagelist, // pages in order
  firstPage: page1,
};
