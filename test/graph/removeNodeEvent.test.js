const Edge = require('../../src/graph/edge');
const Graph = require('../../src/graph/graph');
const Node = require('../../src/graph/node');
const { RemoveNodeEvent } = require('../../src/graph/removeNodeEvent');

describe('RemoveEdgeEvent tests', () => {
  test('given remove edge event when apply then applies unit of work', () => {
    // given
    const graph = new Graph();
    const node = new Node();
    const otherNode = new Node();
    const toEdge = new Edge(new Node(), node);
    const fromEdge = new Edge(node, new Node());
    const otherEdge = new Edge(otherNode, new Node());

    graph.edges = [toEdge, fromEdge, otherEdge];
    graph.nodes = [node, otherNode];

    const removeNodeEvent = new RemoveNodeEvent({
      nodeId: node.id,
    });

    // when
    removeNodeEvent.apply(graph);

    // then
    expect(graph.nodes).toBeDefined();
    expect(graph.nodes.length).toBe(1);
    const remainingNode = graph.nodes[0];
    expect(remainingNode).toBe(otherNode);

    // any associated edges should also be removed
    expect(graph.edges).toBeDefined();
    expect(graph.edges.length).toBe(1);
    const remainingEdge = graph.edges[0];
    expect(remainingEdge).toBe(otherEdge);
  });

  test('given remove node event and graph does not have node when apply then throws', () => {
    // given
    const graph = new Graph();
    const node = new Node();
    graph.nodes.push(node);

    const removeNodeEvent = new RemoveNodeEvent({
      nodeId: 'someOtherId',
    });

    // when + then
    expect(() => removeNodeEvent.apply(graph)).toThrow();

    // then
    expect(graph.nodes.length).toBe(1);
    expect(graph.nodes[0]).toBe(node);
  });
});
