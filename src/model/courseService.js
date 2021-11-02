const { NotFound } = require('../error/notFound');

const COURSE_TYPE = 'page';

class CourseService {
  constructor(courses) {
    this.courses = courses;
  }

  getCourseById(id) {
    if (!this.courses[id]) {
      throw new NotFound(COURSE_TYPE, id);
    }
    return this.courses[id];
  }

  getAllCourses() {
    return Object.values(this.courses);
  }
}

module.exports = { CourseService };
