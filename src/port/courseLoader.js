const courseFactory = require('../model/courseFactory');

const course1 = require('../courses/course1');

const COURSES = [course1];

class CourseLoader {
  load() {
    this.courses = {};
    this.pages = {};

    COURSES.forEach((c) => {
      const course = courseFactory.make(c);
      this.courses[course.id] = course;
      course.pages.forEach((p) => {
        this.pages[p.id] = p;
      });
    });
  }
}

module.exports = { CourseLoader };
