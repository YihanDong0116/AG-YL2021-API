module.exports = {
  type: 'practice',
  problem: {
    type: 'multichoice',
    prompt: 'what colour is the sky?',
    data: [
      {
        id: 'blue', // this the the correct answer
      },
      {
        id: 'red',
      },
    ],
  },
  tests: [
    {
      feedback: 'woops, i think tomatoes are red, right?',
      check: (inputs) => inputs.id === 'red',
    },
  ],
};
