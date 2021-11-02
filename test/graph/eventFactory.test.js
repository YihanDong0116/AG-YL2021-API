const { AddEdgeEvent } = require('../../src/graph/addEdgeEvent');
const { AddNodeEvent } = require('../../src/graph/addNodeEvent');
const eventFactory = require('../../src/graph/eventFactory');
const { TraverseEdgeEvent } = require('../../src/graph/traverseEdgeEvent');
const { VisitNodeEvent } = require('../../src/graph/visitNodeEvent');
const { RemoveEdgeEvent } = require('../../src/graph/removeEdgeEvent');
const { RemoveNodeEvent } = require('../../src/graph/removeNodeEvent');

describe('eventFactory tests', () => {
  test('given data for addNode type when make then AddNodeEvent returned', () => {
    // given
    const eventData = {
      type: 'addNode',
      data: {
        name: 'someName',
        x: 1,
        y: 2,
      },
    };

    // when
    const event = eventFactory.make(eventData);

    // then
    expect(event).toBeInstanceOf(AddNodeEvent);
    expect(event.time).toBeDefined();
    expect(event.data).toBe(eventData.data);
  });

  test('given data for addEdge type when make then AddEdgeEvent returned', () => {
    // given
    const eventData = {
      type: 'addEdge',
      data: {
        name: 'someName',
        fromNodeId: 'fromNodeId',
        toNodeId: 'toNodeId',
        weight: 1,
      },
    };

    // when
    const event = eventFactory.make(eventData);

    // then
    expect(event).toBeInstanceOf(AddEdgeEvent);
    expect(event.time).toBeDefined();
    expect(event.data).toBe(eventData.data);
  });

  test('given data for visitNode type when make then VisitNodeEvent returned', () => {
    // given
    const eventData = {
      type: 'visitNode',
      data: {
        nodeId: 'someId',
      },
    };

    // when
    const event = eventFactory.make(eventData);

    // then
    expect(event).toBeInstanceOf(VisitNodeEvent);
    expect(event.time).toBeDefined();
    expect(event.data).toBe(eventData.data);
  });

  test('given data for traverseEdge type when make then TraverseEdgeEvent returned', () => {
    // given
    const eventData = {
      type: 'traverseEdge',
      data: {
        edgeId: 'someId',
      },
    };

    // when
    const event = eventFactory.make(eventData);

    // then
    expect(event).toBeInstanceOf(TraverseEdgeEvent);
    expect(event.time).toBeDefined();
    expect(event.data).toBe(eventData.data);
  });

  test('given data for removeEdge type when make then RemoveEdgeEvent returned', () => {
    // given
    const eventData = {
      type: 'removeEdge',
      data: {
        edgeId: 'someId',
      },
    };

    // when
    const event = eventFactory.make(eventData);

    // then
    expect(event).toBeInstanceOf(RemoveEdgeEvent);
    expect(event.time).toBeDefined();
    expect(event.data).toBe(eventData.data);
  });

  test('given data for removeNode type when make then RemoveNodeEvent returned', () => {
    // given
    const eventData = {
      type: 'removeNode',
      data: {
        edgeId: 'someId',
      },
    };

    // when
    const event = eventFactory.make(eventData);

    // then
    expect(event).toBeInstanceOf(RemoveNodeEvent);
    expect(event.time).toBeDefined();
    expect(event.data).toBe(eventData.data);
  });

  test('given data for invalid type when make then throw', () => {
    // given
    const eventData = {
      type: 'invalidType',
      data: {
        key: 'someValue',
      },
    };

    // when
    // then
    expect(() => eventFactory.make(eventData)).toThrow();
  });
});
