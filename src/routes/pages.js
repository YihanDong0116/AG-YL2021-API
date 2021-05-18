const express = require('express');
const courseloader = require('../util/loadCourses');

const router = express.Router();

/* GET specific page. */
router.get('/:page_id', (req, res) => {
  if (courseloader.hasPage(req.params.page_id) === true) {
    res.status(200);
    res.json(courseloader.getPageById(req.params.page_id));
  } else {
    res.status(404);
    res.send('page_id does not exist!');
  }
});

router.post('/:page_id/submit', (req, res) => {
  res.send('Will be decided after the course structure and problems types are defined');
});

module.exports = router;
