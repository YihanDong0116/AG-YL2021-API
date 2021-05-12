const path = require('path');
const fs = require('fs')

class courseLoader {
  constructor() {
    var data = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'algorithms.json'), 'utf8'));
    // this.courseData = {'sample': 1};
    this.courseData = data;
  }

  getByName(name) {
    return this.courseData.find((course) => name == course.name)
  }

  getById(id) {
    return this.courseData.find((course) => id == course.id)
  }
}

const courseloader = new courseLoader();

module.exports = courseloader;
