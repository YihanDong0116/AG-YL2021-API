const { AddNodeEvent } = require('../../src/graph/addNodeEvent');
const Graph = require('../../src/graph/graph');
const Node = require('../../src/graph/node');

describe('AddNodeEvent tests', () => {
  test('given add node event when apply then applies unit of work', () => {
    // given
    const addNodeEvent = new AddNodeEvent({
      name: 'someNodeName',
      x: 1,
      y: 2,
    });

    const graph = new Graph();

    // when
    addNodeEvent.apply(graph);

    // then
    expect(graph.nodes).toBeDefined();
    expect(graph.nodes.length).toBe(1);
    const newNode = graph.nodes[0];
    expect(newNode).toBeInstanceOf(Node);
    expect(newNode.name).toBe('someNodeName');
    expect(newNode.x).toBe(1);
    expect(newNode.y).toBe(2);
    expect(graph.currentNode).toBe(newNode);
  });
});
