class Event {
  constructor(type, data, time) {
    this.type = type;
    this.data = data;
    this.time = time;
  }

  // eslint-disable-next-line class-methods-use-this, no-unused-vars
  apply(graph) {
    throw new Error('apply() must be overridden in extending class');
  }
}

module.exports = Event;
