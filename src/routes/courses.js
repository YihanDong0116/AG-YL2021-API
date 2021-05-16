const express = require('express');
const courseloader = require('../util/loadCourses');

const router = express.Router();

/* GET courses listing. */
router.get('/', (req, res) => {
  res.json(courseloader.getCourses());
});

/* GET specific course. */
router.get('/:course_id', (req, res) => {
  if (courseloader.hasCourse(req.params.course_id) === true) {
    res.status(200);
    res.json(courseloader.getCourseById(req.params.course_id));
  } else {
    res.status(404);
    res.send('course_id does not exist!');
  }
});

module.exports = router;
