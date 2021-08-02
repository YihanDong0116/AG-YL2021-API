const Event = require('./event');

const TYPE = 'traverseEdge';

class TraverseEdgeEvent extends Event {
  constructor(data, time) {
    super(TYPE, data, time);
  }

  apply(graph) {
    const edge = graph.getEdgeById(this.data.edgeId);
    edge.traversed = true;
    edge.focus();
  }
}

module.exports = {
  TraverseEdgeEvent,
  TYPE,
};
