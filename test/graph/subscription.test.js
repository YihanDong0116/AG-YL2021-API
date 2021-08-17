const Graph = require('../../src/graph/graph');
const Subscription = require('../../src/graph/subscription');

describe('Subscription tests', () => {
  test('when subscription created then initialized correctly', () => {
    // when
    const graph = new Graph();
    const subscription = new Subscription('event', graph);

    // then
    expect(subscription.id).toBeDefined();
    expect(subscription.event).toBe('event');
    expect(subscription.graph).toBe(graph);
  });

  test('given subscription when clear then graph subscriptions cleared', () => {
    // given
    const graph = new Graph();
    const subscription = new Subscription('event', graph);
    const eventSubscriptions = {};
    eventSubscriptions[subscription.id] = () => {};
    graph.subscriptions = {
      event: eventSubscriptions,
    };

    // when
    subscription.clear();

    // then
    expect(graph.subscriptions.event).toEqual({});
  });
});
