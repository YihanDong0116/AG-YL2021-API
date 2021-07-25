const eventFactory = require('./eventFactory');
const Subscription = require('./subscription');

const makeAndApplyEvent = (eventData, graph) => {
  const event = eventFactory.make({
    type: eventData.type,
    data: eventData.data,
  });
  event.apply(graph);
  graph.events.push({
    type: event.type,
    data: event.data,
    time: event.time,
  });
  Object.values(graph.subscriptions[eventData.type] || {})
    .forEach((fn) => fn(eventData.data));
};

class Graph {
  constructor() {
    this.nodes = [];
    this.edges = [];
    this.events = [];
    this.subscriptions = {};
  }

  on(event, fn) {
    const subscription = new Subscription(event, this);
    const subscriptions = this.subscriptions[event] || {};
    subscriptions[subscription.id] = fn;
    this.subscriptions[event] = subscriptions;
    return subscription;
  }

  apply(...events) {
    events.forEach((e) => makeAndApplyEvent(e, this));
  }

  addNode(name, x, y) {
    makeAndApplyEvent({
      type: 'addNode',
      data: {
        name,
        x,
        y,
      },
    }, this);
  }

  addEdge(fromNodeId, toNodeId, name, weight) {
    makeAndApplyEvent({
      type: 'addEdge',
      data: {
        fromNodeId,
        toNodeId,
        name,
        weight,
      },
    }, this);
  }

  removeNode(nodeId) {
    makeAndApplyEvent({
      type: 'removeNode',
      data: {
        nodeId,
      },
    }, this);
  }

  removeEdge(edgeId) {
    makeAndApplyEvent({
      type: 'removeEdge',
      data: {
        edgeId,
      },
    }, this);
  }

  visitNode(nodeId) {
    const event = eventFactory.make({
      type: 'visitNode',
      data: {
        nodeId,
      },
    });
    this.apply(event);
  }

  traverseEdge(edgeId) {
    const event = eventFactory.make({
      type: 'traverseEdge',
      data: {
        edgeId,
      },
    });
    this.apply(event);
  }

  getEdgeById(edgeId) {
    const edge = this.edges.find((e) => e.id === edgeId);
    if (!edge) throw new Error(`edge with id ${edgeId} not found`);
    return edge;
  }

  hasEdge(fromNodeId, toNodeId) {
    return this.edges
      .filter((e) => e.fromNode.id === fromNodeId && e.toNode.id === toNodeId).length > 0;
  }

  getNodeById(nodeId) {
    const node = this.nodes.find((n) => n.id === nodeId);
    if (!node) throw new Error(`node with id ${nodeId} not found`);
    return node;
  }
}

module.exports = Graph;
