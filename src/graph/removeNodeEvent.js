const Event = require('./event');

const TYPE = 'removeNode';

class RemoveNodeEvent extends Event {
  constructor(data, time) {
    super(TYPE, data, time);
  }

  apply(graph) {
    graph.getNodeById(this.data.nodeId);

    graph.edges
      .filter((e) => e.toNode.id === this.data.nodeId || e.fromNode.id === this.data.nodeId)
      .forEach((e) => graph.removeEdge(e.id));

    // eslint-disable-next-line no-param-reassign
    graph.nodes = graph.nodes.filter((n) => n.id !== this.data.nodeId);
  }
}

module.exports = {
  RemoveNodeEvent,
  TYPE,
};
