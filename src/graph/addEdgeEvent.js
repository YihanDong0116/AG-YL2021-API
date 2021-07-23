const Edge = require('./edge');
const Event = require('./event');

const TYPE = 'addEdge';

class AddEdgeEvent extends Event {
  constructor(data, time) {
    super(TYPE, data, time);
  }

  apply(graph) {
    const fromNode = graph.getNodeById(this.data.fromNodeId);
    const toNode = graph.getNodeById(this.data.toNodeId);
    const edge = new Edge(fromNode, toNode, this.data.weight, this.data.name, graph);
    fromNode.edges.push(edge);
    toNode.edges.push(edge);
    graph.edges.push(edge);
  }
}

module.exports = {
  AddEdgeEvent,
  TYPE,
};
