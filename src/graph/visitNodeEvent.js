const Event = require('./event');

const TYPE = 'visitNode';

class VisitNodeEvent extends Event {
  constructor(data, time) {
    super(TYPE, data, time);
  }

  apply(graph) {
    const node = graph.getNodeById(this.data.nodeId);
    node.visited = true;
    // eslint-disable-next-line no-param-reassign
    graph.currentNode = node;
    node.focus();
  }
}

module.exports = {
  VisitNodeEvent,
  TYPE,
};
