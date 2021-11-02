const Node = require('../../src/graph/node');
const Graph = require('../../src/graph/graph');
const Edge = require('../../src/graph/edge');

describe('Node tests', () => {
  test('when created graph instance initialized correctly', () => {
    // when
    const graph = new Graph();
    const node = new Node('name', 1, 2, graph);

    // then
    expect(node.id).toBeDefined();
    expect(node.graph).toBe(graph);
    expect(node.name).toBe('name');
    expect(node.x).toBe(1);
    expect(node.y).toBe(2);
    expect(node.edges).toEqual([]);
    expect(node.distance).toEqual({});
  });

  test('given node when addEdge then edge added to edges', () => {
    // given
    const graph = new Graph();
    const node = new Node('name', 1, 2, graph);

    // when
    const edge = new Edge();
    node.addEdge(edge);

    // then
    expect(node.edges.includes(edge)).toBe(true);
  });

  test('given node with edge to other node when getPathsFrom then returns edge to other node', () => {
    // given
    const graph = new Graph();
    const node = new Node('name', 1, 2, graph);
    const edge = new Edge(node);
    const otherEdge = new Edge(new Node());
    node.addEdge(edge);
    node.addEdge(otherEdge);

    // when
    const paths = node.getPathsFrom();

    // then
    expect(paths.length).toBe(1);
    expect(paths.includes(edge)).toBe(true);
  });

  test('given node with edge to other node when getPathsFrom then returns edge to other node', () => {
    // given
    const graph = new Graph();
    const node = new Node('name', 1, 2, graph);
    const edge = new Edge(new Node(), node);
    const otherEdge = new Edge(node, new Node());
    node.addEdge(edge);
    node.addEdge(otherEdge);

    // when
    const paths = node.getPathsTo();

    // then
    expect(paths.length).toBe(1);
    expect(paths.includes(edge)).toBe(true);
  });

  test('given node has edge when removeEdge then edge removed', () => {
    // given
    const graph = new Graph();
    const node = new Node('name', 1, 2, graph);
    const edge = new Edge(new Node(), node);
    const otherEdge = new Edge(node, new Node());
    node.edges = [edge, otherEdge];

    // when
    node.removeEdge(edge.id);

    // then
    expect(node.edges.length).toBe(1);
    expect(node.edges[0]).toBe(otherEdge);
  });

  test('given node when visit node then calls graph', () => {
    // given
    const graph = new Graph();
    const graphSpy = jest.spyOn(graph, 'visitNode').mockImplementation(() => {});
    const node = new Node('someName', 1, 1, graph);

    // when
    node.visit();

    // then
    expect(graphSpy).toHaveBeenCalledWith(node.id);
  });

  test('given node focused when clearFocus then node focus reset', () => {
    // given
    const node = new Node('someName', 1, 1, null);
    node.focused = true;

    // when
    node.clearFocus();

    // then
    expect(node.focused).toBe(false);
  });

  test('given node not focused when focus then focus cleared from graph amd node focus set', () => {
    // given
    const graph = new Graph();
    const graphSpy = jest.spyOn(graph, 'clearFocus').mockImplementation(() => {});
    const node = new Node('someName', 1, 1, graph);
    node.focused = false;

    // when
    node.focus();

    // then
    expect(graphSpy).toHaveBeenCalled();
    expect(node.focused).toBe(true);
  });

  test('given source node when it has distance with other nodes', () => {
    // given
    const graph = new Graph();
    const srcNode = new Node('src', 0, 1, graph);
    const destNode = new Node('dest', 0, 3, graph);
    graph.nodes = [srcNode, destNode];
    srcNode.getDistance()[destNode.getId()] = 50;
    // then
    expect(srcNode.getDistance()[destNode.getId()]).toBe(50);
    expect(graph.events.length).toBe(1);
    expect(graph.events[0].type).toBe('setDistance');
    expect(graph.events[0].data.fromNodeId).toBe(srcNode.id);
    expect(graph.events[0].data.toNodeId).toBe(destNode.id);
    expect(graph.events[0].data.distance).toBe(50);
  });

  test('given node has neighbors when getNeighbors then return neighbors', () => {
    // given
    const node = new Node('src', 0, 1, null);
    const neighbor = new Node('other', 0, 1, null);
    const edge = new Edge(node, neighbor, 0, 'name', null);
    const otherEdge = new Edge(neighbor, node, 0, 'name', null);
    node.edges = [edge, otherEdge];

    // when
    const neighbors = node.getNeighbors();

    // then
    expect(neighbors.length).toBe(1);
    expect(neighbors[0]).toBe(neighbor);
  });
});
