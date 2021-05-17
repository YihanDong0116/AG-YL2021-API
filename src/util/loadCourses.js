const courseList = require('../courses');

class CourseLoader {
  constructor() {
    this.courselist = courseList;
  }

  /* get a course by name */

  // Currently I'm not so sure if we need this function, will just leave it here

  // getByName(name) {
  //   return this.courseData.find((course) => name === course.name)
  // }

  /* get all courses name and id */
  getCourses() {
    const res = [];
    // get the information of each course
    this.courselist.forEach((course) => {
      const pagesInfo = [];
      // get the information of each page in the required format
      course.pages.forEach((page) => {
        const pageInfo = {
          id: page.id,
          type: page.type,
        };
        // identify if the "next" key or the "previous" key exists
        if ('next' in page) {
          pageInfo.next = page.next;
        }
        if ('previous' in page) {
          pageInfo.previous = page.previous;
        }
        // push the page information into the page information set
        pagesInfo.push(pageInfo);
      });
      const summary = {
        id: course.id,
        name: course.name,
        firstPage: course.firstPage.id,
        pages: pagesInfo,
      };
      // push the course information into the course information set
      res.push(summary);
    });
    // return the course information
    return res;
  }

  /* check existence of a course with certain id */
  hasCourse(id) {
    let res = false;
    this.courselist.forEach((course) => {
      if (course.id === id) {
        res = true;
      }
    });
    return res;
  }

  /* get a course by id */
  getCourseById(id) {
    let res = {};
    this.courselist.forEach((course) => {
      if (course.id === id) res = course;
    });
    return res;
  }
}

const courseloader = new CourseLoader();

module.exports = courseloader;
