const Edge = require('../../src/graph/edge');
const Graph = require('../../src/graph/graph');
const Node = require('../../src/graph/node');
const { RemoveEdgeEvent } = require('../../src/graph/removeEdgeEvent');

describe('RemoveEdgeEvent tests', () => {
  test('given remove edge event when apply then applies unit of work', () => {
    // given
    const graph = new Graph();
    const node = new Node();
    const edge = new Edge(node, new Node());
    const otherEdge = new Edge(new Node(), new Node());
    graph.edges.push(edge);
    graph.edges.push(otherEdge);
    node.edges.push(edge);

    const removeEdgeEvent = new RemoveEdgeEvent({
      edgeId: edge.id,
    });

    // when
    removeEdgeEvent.apply(graph);

    // then
    expect(graph.edges).toBeDefined();
    expect(graph.edges.length).toBe(1);
    const remainingEdge = graph.edges[0];
    expect(remainingEdge).toBe(otherEdge);
    expect(node.edges.length).toBe(0);
  });

  test('given remove edge event and graph does not have edge when apply then throws', () => {
    // given
    const graph = new Graph();
    const edge = new Edge();
    graph.edges.push(edge);

    const traverseEdgeEvent = new RemoveEdgeEvent({
      edgeId: 'someOtherId',
    });

    // when + then
    expect(() => traverseEdgeEvent.apply(graph)).toThrow();

    // then
    expect(graph.edges.length).toBe(1);
    expect(graph.edges[0]).toBe(edge);
  });
});
