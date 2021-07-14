const express = require('express');
const yup = require('yup');
const { courseService } = require('../model');

const router = express.Router();

const courseSchema = yup.object().shape({
  id: yup.string().uuid().required(),
  name: yup.string().required(),
  firstPage: yup.string(),
  pages: yup.array().of(yup.object().shape({
    id: yup.string().uuid().required(),
    type: yup.string().oneOf(['practice', 'learn']),
    next: yup.string().uuid(),
    previous: yup.string.uuid(),
  })
    .from('nextPage', 'next')
    .from('previousPage', 'previous')),
});

/* GET all courses. */
router.get('/', (req, res) => {
  const allCourses = courseService.getAllCourses();
  const cast = allCourses.map((c) => courseSchema.cast(c));
  return res.json(cast);
});

/* GET specific course. */
router.get('/:id', (req, res) => {
  const course = courseService.getCourseById(req.params.id);
  const cast = courseSchema.cast(course);
  return res.json(cast);
});

module.exports = router;
