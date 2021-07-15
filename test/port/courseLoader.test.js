const { CourseLoader } = require('../../src/port/courseLoader');
const courseFactory = require('../../src/model/courseFactory');
const courses = require('../../src/courses');
const { Course } = require('../../src/model/course');
const { Page } = require('../../src/model/page');

jest.mock('../../src/model/courseFactory');
jest.mock('../../src/courses');

describe('CourseLoader test', () => {
  test('given course data when load then courses and pages extracted', () => {
    // given
    const course1 = {};
    const course2 = {};
    courses.mockReturnValue([course1, course2]);
    courseFactory.make.mockImplementation(() => {
      const course = new Course();
      course.addPage(new Page());
      return course;
    });
    const courseLoader = new CourseLoader();

    // when
    courseLoader.load();

    // then
    expect(courses).toHaveBeenCalled();
    expect(courseFactory.make).toHaveBeenCalledWith(course1);
    expect(courseFactory.make).toHaveBeenCalledWith(course2);
    expect(courseLoader.courses).toBeDefined();
    expect(Object.values(courseLoader.courses).length).toBe(2);
    expect(courseLoader.pages).toBeDefined();
    expect(Object.values(courseLoader.pages).length).toBe(2);
  });
});
