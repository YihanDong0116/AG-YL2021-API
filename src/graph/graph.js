class Node {

}

class Edge {

}

class Graph {
  constructor() {
    this.nodes = [];
    this.edges = [];

    this.events = [];
  }

  addNode() {}

  addEdge() {}

  deleteNode() {}

  getAllNodes() {}

  visitNode(nodeId) {
    this.nodes.find(n => n.id === nodeId).visit()
    this.events.push({
      type: 'nodeVisit',
      time: Date.now(),
      data: {
        node
      }
    })
  }
}
