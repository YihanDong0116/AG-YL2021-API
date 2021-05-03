const express = require('express');

const router = express.Router();

/* GET specific page. */
router.get('/:page_id', (req, res) => {
  if (req.params.page_id === 'correct_page_id') {
    const page = {
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      type: 'info',
      sections: [
        {
          type: 'text',
          content: 'viva la dijkstra',
        },
        {
          type: 'image',
          content: 'https://i.redd.it/tfugj4n3l6ez.png',
        },
        {
          type: 'animation',
          content: 'https://www.youtube.com/watch?v=k6Es9Qrh4Ao',
        },
      ],
      problem: {
        type: 'code',
        data: {},
      },
    };
    res.json(page);
    // res.send(page);
  } else {
    res.status(404);
    res.send('page_id does not exist!');
  }
});

router.post('/:page_id/submit', (req, res) => {
  res.send('Will be decided after the course structure and problems types are defined');
});

module.exports = router;
