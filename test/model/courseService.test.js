const { CourseService } = require('../../src/model/courseService');
const { Course } = require('../../src/model/course');

describe('CourseService tests', () => {
  test('given course exists when getCourseById then return course', () => {
    // given
    const course = new Course();
    const courses = {};
    courses[course.id] = course;
    const service = new CourseService(courses);

    // when
    const retrieved = service.getCourseById(course.id);

    // then
    expect(retrieved).toBe(course);
  });

  test('given courses exist when getAllCourses then list of courses returned', () => {
    // given
    const course1 = new Course();
    const course2 = new Course();
    const courses = {};
    courses[course1.id] = course1;
    courses[course2.id] = course2;
    const service = new CourseService(courses);

    // when
    const retrieved = service.getAllCourses();

    // then
    expect(retrieved).toBeDefined();
    expect(retrieved.length).toBe(2);
    expect(retrieved).toEqual(expect.arrayContaining([
      course1,
      course2,
    ]));
  });
});
