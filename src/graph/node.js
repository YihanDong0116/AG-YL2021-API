const uuid = require('uuid');

class Node {
  constructor(name, x, y, graph) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.id = uuid.v4();
    this.edges = [];
    this.visited = false;
    this.graph = graph;
  }

  addEdge(edge) {
    this.edges.push(edge);
  }

  getPathsFrom() {
    return this.edges.filter((e) => e.fromNode.id === this.id);
  }

  getPathsTo() {
    return this.edges.filter((e) => e.toNode.id === this.id);
  }
}

module.exports = Node;
