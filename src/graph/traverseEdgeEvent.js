const Event = require('./event');

const TYPE = 'traverseEdge';

class TraverseEdgeEvent extends Event {
  constructor(data, time) {
    super(TYPE, data, time);
  }

  apply(graph) {
    const edge = graph.getEdgeById(this.data.edgeId);
    edge.traversed = true;
  }
}

module.exports = {
  TraverseEdgeEvent,
  TYPE,
};
