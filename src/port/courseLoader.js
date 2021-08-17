const courseFactory = require('../model/courseFactory');

const courses = require('../courses');

class CourseLoader {
  load() {
    this.courses = {};
    this.pages = {};

    courses().forEach((c) => {
      const course = courseFactory.make(c);
      this.courses[course.id] = course;
      course.getAllPages().forEach((p) => {
        this.pages[p.id] = p;
      });
    });
  }
}

module.exports = { CourseLoader };
