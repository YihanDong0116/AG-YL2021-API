const page1 = require('./page1');
const page2 = require('./page2');
const page3 = require('./page3');
const page4 = require('./page4');
const page6 = require('./page6');
const page7Intro = require('./page7intro');
const page7 = require('./page7');
const graphSelectionProblem = require('./graphSelectionProblem');
const reachabilityPage = require('./rechabilityAnimation');
const visitNodesBlocklyProblem = require('./visitNodesBlocklyProblem');

module.exports = {
  name: 'Dijkstra’s Algorithm',
  pages: [
    page1,
    page2,
    page3,
    graphSelectionProblem,
    page7Intro,
    page7,
    page4,
    reachabilityPage,
    page6,
    visitNodesBlocklyProblem,
  ],
};
