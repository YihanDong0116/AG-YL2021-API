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

  test('given edge when traverse edge then calls graph', () => {
    // given
    const graph = new Graph();
    const graphSpy = jest.spyOn(graph, 'traverseEdge').mockImplementation(() => {});
    const edge = new Edge(null, null, 1, 'someName', graph);

    // when
    edge.traverse();

    // then
    expect(graphSpy).toHaveBeenCalledWith(edge.id);
  });

  test('given edge focused when clearFocus then edge focus reset', () => {
    // given
    const edge = new Edge(null, null, 1, 'someName', null);
    edge.focused = true;

    // when
    edge.clearFocus();

    // then
    expect(edge.focused).toBe(false);
  });

  test('given edge not focused when focus then focus cleared from graph amd edge focus set', () => {
    // given
    const graph = new Graph();
    const graphSpy = jest.spyOn(graph, 'clearFocus').mockImplementation(() => {});
    const edge = new Edge(null, null, 1, 'someName', graph);
    edge.focused = false;

    // when
    edge.focus();

    // then
    expect(graphSpy).toHaveBeenCalled();
    expect(edge.focused).toBe(true);
  });

  test('given edge and expect the weight as initialed', () => {
    // given
    const fromNode = new Node();
    const toNode = new Node();
    const graph = new Graph();

    const edge = new Edge(fromNode, toNode, 1, 'someName', graph);

    // when
    const edgeWeight = edge.getWeight();

    // then
    expect(edgeWeight).toBe(1);
  });
});
