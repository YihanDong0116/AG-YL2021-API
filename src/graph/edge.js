const uuid = require('uuid');

class Edge {
  constructor(fromNode, toNode, weight, name, graph) {
    this.fromNode = fromNode;
    this.toNode = toNode;
    this.graph = graph;
    this.traversed = false;
    this.weight = weight;
    this.name = name;
    this.id = uuid.v4();
  }

  linksNodes(fromNode, toNode) {
    return fromNode.id === this.fromNode.id && toNode.id === this.toNode.id;
  }
}

module.exports = Edge;
