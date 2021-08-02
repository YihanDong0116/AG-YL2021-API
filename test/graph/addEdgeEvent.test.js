const { AddEdgeEvent } = require('../../src/graph/addEdgeEvent');
const Edge = require('../../src/graph/edge');
const Graph = require('../../src/graph/graph');
const Node = require('../../src/graph/node');

describe('AddEdgeEvent tests', () => {
  test('given add edge event and nodes in graph when apply then applies unit of work', () => {
    // given
    const graph = new Graph();
    const fromNode = new Node();
    const toNode = new Node();
    graph.nodes = [
      fromNode, toNode,
    ];

    const addEdgeEvent = new AddEdgeEvent({
      name: 'someEdgeName',
      weight: 1,
      fromNodeId: fromNode.id,
      toNodeId: toNode.id,
    });

    const graphSpy = jest.spyOn(graph, 'getNodeById');

    // when
    addEdgeEvent.apply(graph);

    // then
    expect(graph.edges).toBeDefined();
    expect(graph.edges.length).toBe(1);
    const newEdge = graph.edges[0];
    expect(newEdge).toBeInstanceOf(Edge);
    expect(newEdge.name).toBe('someEdgeName');
    expect(newEdge.weight).toBe(1);
    expect(newEdge.fromNode).toBeDefined();
    expect(newEdge.fromNode).toBe(fromNode);
    expect(newEdge.toNode).toBeDefined();
    expect(newEdge.toNode).toBe(toNode);
    expect(fromNode.edges).toBeDefined();
    expect(fromNode.edges.length).toBe(1);
    expect(fromNode.edges[0]).toBe(newEdge);
    expect(toNode.edges).toBeDefined();
    expect(toNode.edges.length).toBe(1);
    expect(toNode.edges[0]).toBe(newEdge);
    expect(graphSpy).toHaveBeenCalledWith(fromNode.id);
    expect(graphSpy).toHaveBeenCalledWith(toNode.id);
    expect(newEdge.focused).toBe(true);
  });

  test('given add edge event and edge already exists then throws', () => {
    // given
    const graph = new Graph();
    const fromNode = new Node();
    const toNode = new Node();
    graph.nodes = [
      fromNode, toNode,
    ];
    const edge = new Edge(fromNode, toNode);
    graph.edges = [edge];

    const addEdgeEvent = new AddEdgeEvent({
      name: 'someEdgeName',
      weight: 1,
      fromNodeId: fromNode.id,
      toNodeId: toNode.id,
    });

    // when then
    expect(() => addEdgeEvent.apply(graph)).toThrow();
  });

  test('given add edge event and fromNode not in graph when apply then throws', () => {
    // given
    const addEdgeEvent = new AddEdgeEvent({
      name: 'someEdgeName',
      weight: 1,
      fromNodeId: 'fromNodeId',
      toNodeId: 'toNodeId',
    });

    const graph = new Graph();
    const graphSpy = jest.spyOn(graph, 'getNodeById').mockImplementation((id) => {
      if (id === 'fromNodeId') throw new Error();
      const node = new Node();
      node.id = id;
      return node;
    });

    // when then
    expect(() => addEdgeEvent.apply(graph)).toThrow();

    // then
    expect(graph.edges).toBeDefined();
    expect(graph.edges.length).toBe(0);
    expect(graphSpy).toHaveBeenCalledWith('fromNodeId');
  });

  test('given add edge event and toNode not in graph when apply then throws', () => {
    // given
    const addEdgeEvent = new AddEdgeEvent({
      name: 'someEdgeName',
      weight: 1,
      fromNodeId: 'fromNodeId',
      toNodeId: 'toNodeId',
    });

    const graph = new Graph();
    const graphSpy = jest.spyOn(graph, 'getNodeById').mockImplementation((id) => {
      if (id === 'toNodeId') throw new Error();
      const node = new Node();
      node.id = id;
      return node;
    });

    // when then
    expect(() => addEdgeEvent.apply(graph)).toThrow();

    // then
    expect(graph.edges).toBeDefined();
    expect(graph.edges.length).toBe(0);
    expect(graphSpy).toHaveBeenCalledWith('toNodeId');
  });
});
