const express = require('express');
const courseloader = require('../util/loadCourses');

const router = express.Router();

/* GET courses listing. */
router.get('/', (req, res) => {
  res.status(200);
  res.json(courseloader.getCourses());
});

/* GET specific course. */
router.get('/:course_id', (req, res) => {
  if (courseloader.hasCourse(req.params.course_id) === true) {
    res.status(200);
    res.json(courseloader.getCourseById(req.params.course_id));
  } else {
    res.status(404);
    res.json({
      status: 0,
      message: 'Failed to find the course ID',
      reason: 'Course ID does not exist'
    });
  }
});

module.exports = router;
