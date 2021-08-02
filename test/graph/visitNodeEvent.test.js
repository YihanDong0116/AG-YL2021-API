const Graph = require('../../src/graph/graph');
const Node = require('../../src/graph/node');
const { VisitNodeEvent } = require('../../src/graph/visitNodeEvent');

describe('VisitNodeEvent tests', () => {
  test('given visit node event when apply then applies unit of work', () => {
    // given
    const graph = new Graph();
    const node = new Node();
    node.graph = graph;
    graph.nodes.push(node);

    const visitNodeEvent = new VisitNodeEvent({
      nodeId: node.id,
    });

    // when
    visitNodeEvent.apply(graph);

    // then
    expect(graph.nodes).toBeDefined();
    expect(graph.nodes.length).toBe(1);
    const visitedNode = graph.nodes[0];
    expect(visitedNode).toBe(node);
    expect(visitedNode.visited).toBe(true);
    expect(visitedNode.focused).toBe(true);
  });

  test('given visit node event and graph does not have node when apply then throws', () => {
    // given
    const graph = new Graph();
    const node = new Node();
    graph.nodes.push(node);

    const visitNodeEvent = new VisitNodeEvent({
      nodeId: 'someOtherId',
    });

    // when + then
    expect(() => visitNodeEvent.apply(graph)).toThrow();
  });
});
