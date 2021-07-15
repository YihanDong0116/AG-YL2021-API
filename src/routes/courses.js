const express = require('express');
const yup = require('yup');
const { courseService } = require('../model');

const router = express.Router();

const courseSchema = yup.object().shape({
  id: yup.string().uuid(),
  name: yup.string(),
  firstPage: yup.string().uuid().transform((curr, org) => org.id),
  pages: yup.array().of(yup.object().shape({
    id: yup.string().uuid(),
    type: yup.string().oneOf(['practice', 'learn']),
    next: yup.string().uuid().transform((curr, org) => org.id),
    previous: yup.string().uuid().transform((curr, org) => org.id),
  })
    .from('nextPage', 'next')
    .from('previousPage', 'previous')),
});

/* GET all courses. */
router.get('/', (req, res, next) => {
  try {
    const allCourses = courseService.getAllCourses();
    const cast = allCourses.map(
      (c) => courseSchema.cast({ ...c, pages: c.getAllPages() }, { stripUnknown: true }),
    );
    return res.json(cast);
  } catch (e) {
    return next(e);
  }
});

/* GET specific course. */
router.get('/:id', (req, res, next) => {
  try {
    const course = courseService.getCourseById(req.params.id);
    const cast = courseSchema.cast(
      { ...course, pages: course.getAllPages() },
      { stripUnknown: true },
    );
    return res.json(cast);
  } catch (e) {
    return next(e);
  }
});

module.exports = router;
