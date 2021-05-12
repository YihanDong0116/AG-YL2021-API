const path = require('path');
const fs = require('fs');

class CourseLoader {
  constructor() {
    const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'algorithms.json'), 'utf8'));
    this.courseData = data;
  }

  /* get a course by name */

  // Currently I'm not so sure if we need this function, will just leave it here

  // getByName(name) {
  //   return this.courseData.find((course) => name === course.name)
  // }

  /* check existence of a course with certain id */
  hasId(id) {
    let found = false;
    this.courseData.forEach((element) => {
      if (element.id === id) found = true;
    });
    return found;
  }

  /* get a course by id */
  getById(id) {
    const res = this.courseData.find((course) => id === course.id);
    if (res) return res;
    return undefined;
  }
}

const courseloader = new CourseLoader();

module.exports = courseloader;
