const Event = require('./event');

const TYPE = 'setDistance';

class SetDistanceEvent extends Event {
  constructor(data, time) {
    super(TYPE, data, time);
  }

  apply(graph) {
    const fromNode = graph.getNodeById(this.data.fromNodeId);
    fromNode.distance[this.data.toNodeId] = this.data.distance;
  }
}

module.exports = {
  SetDistanceEvent,
  TYPE,
};
