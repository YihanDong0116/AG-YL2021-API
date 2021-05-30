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
  const page_id = req.params.page_id;
  let status, message, reason;
  const page = courseloader.getPageById(page_id);
  // cannot find the page - {} is returned
  if (page && Object.keys(page).length === 0 && page.constructor === Object) {
    res.status(404);
    status = 0;
    message = "";
    reason = "Page does not exist.";
    res.json({status, message, reason})
  }
  // learning pages do not accept submissions
  else if (page.type === "learn") {
      res.status(403);
      status = 0;
      message = "";
      reason = "Cannot submit to a learning page"
      res.json({status, message, reason})
    } else {
      const type = req.body.type;
      const data = req.body.data;
      console.log(page_id);
      console.log(type);
      console.log(data);
      // if the type is multiple choice
      if (type === "multichoice") {
        const tests = courseloader.getTestsById(page_id);
        tests.forEach((test) => {
          console.log(test)
          if (test.check(data)) {
              status = test.status;
          }
        });
        res.json({status, tests})
      }
      // type is text
      else if (type === "text") {
        // pass
      }
      else if (type === "code") {
        // pass
      }
    }
});

module.exports = router;
