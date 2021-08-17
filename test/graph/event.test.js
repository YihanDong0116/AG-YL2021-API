const Event = require('../../src/graph/event');

describe('Event tests', () => {
  test('when created event initialized correctly', () => {
    // when
    const data = {};
    const event = new Event('type', data);

    // then
    expect(event.type).toBe('type');
    expect(event.data).toBe(data);
  });

  test('given event when apply then throws', () => {
    // given
    const event = new Event();

    // when then
    expect(() => event.apply()).toThrow();
  });
});
