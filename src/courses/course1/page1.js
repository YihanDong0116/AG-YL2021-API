module.exports = {
  id: '3fa85f64-5717-4562-b3fc-2c963f66afa1',
  type: 'practice',
  sections: [],
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
  previous: null,
  next: '3fa85f64-5717-4562-b3fc-2c963f66afa2',
};
