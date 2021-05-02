const express = require('express');

const router = express.Router();

/* GET api info. */
router.get('/', (req, res) => {
  res.send('respond with a resource');
});

module.exports = router;
