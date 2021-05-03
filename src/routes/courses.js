const express = require('express');

const router = express.Router();

/* GET courses listing. */
router.get('/', (req, res) => {
  const listObj = [
    {
      course_id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      name: 'dijkstra',
      default_page: '3fa85f64-5717-4562-b3fc-2c963f66afa1',
      pages: [
        {
          id: '3fa85f64-5717-4562-b3fc-2c963f66afa1',
          next: '3fa85f64-5717-4562-b3fc-2c963f66afa2',
          prev: '3fa85f64-5717-4562-b3fc-2c963f66afa3',
        },
        {
          id: '3fa85f64-5717-4562-b3fc-2c963f66afa2',
          next: '3fa85f64-5717-4562-b3fc-2c963f66afa3',
          prev: '3fa85f64-5717-4562-b3fc-2c963f66afa1',
        },
        {
          id: '3fa85f64-5717-4562-b3fc-2c963f66afa3',
          next: '3fa85f64-5717-4562-b3fc-2c963f66afa1',
          prev: '3fa85f64-5717-4562-b3fc-2c963f66afa2',
        },
      ],
    },
    {
      course_id: '3fa85f64-5717-4562-b3fc-2c963f66afb6',
      name: 'dijkstra_2',
      default_page: '3fa85f64-5717-4562-b3fc-2c963f66afb1',
      pages: [
        {
          id: '3fa85f64-5717-4562-b3fc-2c963f66afb1',
          next: '3fa85f64-5717-4562-b3fc-2c963f66afb2',
          prev: '3fa85f64-5717-4562-b3fc-2c963f66afb3',
        },
        {
          id: '3fa85f64-5717-4562-b3fc-2c963f66afb2',
          next: '3fa85f64-5717-4562-b3fc-2c963f66afb3',
          prev: '3fa85f64-5717-4562-b3fc-2c963f66afb1',
        },
        {
          id: '3fa85f64-5717-4562-b3fc-2c963f66afb3',
          next: '3fa85f64-5717-4562-b3fc-2c963f66afb1',
          prev: '3fa85f64-5717-4562-b3fc-2c963f66afb2',
        },
      ],
    },
  ];
  res.json(listObj);
  // res.send(listObj);
});

/* GET specific course. */

router.get('/:course_id', (req, res) => {
  if (req.params.course_id === 'correct_course_id') {
    const coursePages = {
      course_id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      name: 'dijkstra',
      default_page: '3fa85f64-5717-4562-b3fc-2c963f66afa1',
      pages: [
        {
          id: '3fa85f64-5717-4562-b3fc-2c963f66afa1',
          next: '3fa85f64-5717-4562-b3fc-2c963f66afa2',
          prev: '3fa85f64-5717-4562-b3fc-2c963f66afa3',
        },
        {
          id: '3fa85f64-5717-4562-b3fc-2c963f66afa2',
          next: '3fa85f64-5717-4562-b3fc-2c963f66afa3',
          prev: '3fa85f64-5717-4562-b3fc-2c963f66afa1',
        },
        {
          id: '3fa85f64-5717-4562-b3fc-2c963f66afa3',
          next: '3fa85f64-5717-4562-b3fc-2c963f66afa1',
          prev: '3fa85f64-5717-4562-b3fc-2c963f66afa2',
        },
      ],
    };
    res.json(coursePages);
    // res.send(coursePages);
  } else {
    res.status(404);
    res.send('course_id does not exist!');
  }
});

module.exports = router;
