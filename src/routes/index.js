const express = require('express');

const courses = require('./courses');
const pages = require('./pages');

const router = express.Router();

router.get('/health', (req, res) => {
  res.send("It's Alive!");
});

router.use('/courses', courses);
router.use('/pages', pages);

module.exports = router;
