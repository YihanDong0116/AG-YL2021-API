const Edge = require('../../src/graph/edge');
const Graph = require('../../src/graph/graph');
const Node = require('../../src/graph/node');

describe('Edge tests', () => {
  test('when edge created then initialized correctly', () => {
    // when
    const fromNode = new Node();
    const toNode = new Node();
    const graph = new Graph();

    const edge = new Edge(fromNode, toNode, 1, 'someName', graph);

    // then
    expect(edge.id).toBeDefined();
    expect(edge.name).toBe('someName');
    expect(edge.fromNode).toBe(fromNode);
    expect(edge.toNode).toBe(toNode);
    expect(edge.weight).toBe(1);
    expect(edge.graph).toBe(graph);
    expect(edge.traversed).toBe(false);
  });

  test('given edge links nodes then linksNodes returns true', () => {
    // given
    const fromNode = new Node();
    const toNode = new Node();
    const graph = new Graph();

    const edge = new Edge(fromNode, toNode, 1, 'someName', graph);

    // when
    const links = edge.linksNodes(fromNode, toNode);

    // then
    expect(links).toBe(true);
  });

  test('given edge nodes permuted then linksNodes returns false', () => {
    // given
    const fromNode = new Node();
    const toNode = new Node();
    const graph = new Graph();

    const edge = new Edge(fromNode, toNode, 1, 'someName', graph);

    // when
    const links = edge.linksNodes(toNode, fromNode);

    // then
    expect(links).toBe(false);
  });

  test('given edge with unknown nodes then linksNodes returns false', () => {
    // given
    const fromNode = new Node();
    const toNode = new Node();
    const graph = new Graph();

    const edge = new Edge(fromNode, toNode, 1, 'someName', graph);

    // when
    const links = edge.linksNodes(fromNode, new Node());

    // then
    expect(links).toBe(false);
  });
});
