const uuid = require('uuid');

class Subscription {
  constructor(event, graph) {
    this.id = uuid.v4();
    this.graph = graph;
    this.event = event;
  }

  clear() {
    delete this.graph.subscriptions[this.event][this.id];
  }
}

module.exports = Subscription;
