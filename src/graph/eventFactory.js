const addEdgeEvent = require('./addEdgeEvent');
const addNodeEvent = require('./addNodeEvent');
const removeEdgeEvent = require('./removeEdgeEvent');
const removeNodeEvent = require('./removeNodeEvent');
const visitNodeEvent = require('./visitNodeEvent');
const traverseEdgeEvent = require('./traverseEdgeEvent');

const make = (event) => {
  const time = event.time || new Date();
  switch (event.type) {
    case addNodeEvent.TYPE:
      return new addNodeEvent.AddNodeEvent(event.data, time);
    case addEdgeEvent.TYPE:
      return new addEdgeEvent.AddEdgeEvent(event.data, time);
    case visitNodeEvent.TYPE:
      return new visitNodeEvent.VisitNodeEvent(event.data, time);
    case traverseEdgeEvent.TYPE:
      return new traverseEdgeEvent.TraverseEdgeEvent(event.data, time);
    case removeEdgeEvent.TYPE:
      return new removeEdgeEvent.RemoveEdgeEvent(event.data, time);
    case removeNodeEvent.TYPE:
      return new removeNodeEvent.RemoveNodeEvent(event.data, time);
    default:
      throw new Error(`unknown event type ${event.type}`);
  }
};

module.exports = {
  make,
};
