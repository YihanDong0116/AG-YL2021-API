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
    this.focused = false;
    this.distance = new Proxy({}, {
      get(target, distName, receiver) {
        if (!Reflect.has(target, distName)) {
          return -1;
        }
        return Reflect.get(target, distName, receiver);
      },
      set(target, distName, value, receiver) {
        return Reflect.set(target, distName, value, receiver);
      },
    });
  }

  visit() {
    this.graph.visitNode(this.id);
  }

  focus() {
    this.graph.clearFocus();
    this.focused = true;
  }

  clearFocus() {
    this.focused = false;
  }

  addEdge(edge) {
    this.edges.push(edge);
  }

  removeEdge(edgeId) {
    this.edges = this.edges.filter((e) => e.id !== edgeId);
  }

  getPathsFrom() {
    return this.edges.filter((e) => e.fromNode.id === this.id);
  }

  getPathsTo() {
    return this.edges.filter((e) => e.toNode.id === this.id);
  }

  getDistance() {
    return this.distance;
  }

  getId() {
    return this.id;
  }
}

module.exports = Node;
