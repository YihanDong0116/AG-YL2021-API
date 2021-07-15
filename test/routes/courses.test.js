const request = require('supertest');
const app = require('../../src/app');
const { NotFound } = require('../../src/error/notFound');
const model = require('../../src/model');
const { Course } = require('../../src/model/course');
const { LearnPage } = require('../../src/model/learnPage');
const { PracticePage } = require('../../src/model/practicePage');

jest.mock('../../src/model');

describe('Test courses', () => {
  let courseResponse;
  beforeAll(() => {
    const course = new Course('courseName');
    const learnPage = new LearnPage('learnPageName', [{ type: 'text', content: 'content' }]);
    const practicePage = new PracticePage('practicePageName', { type: 'multichoice', data: {} }, []);
    course.addPage(learnPage);
    course.addPage(practicePage);

    jest.spyOn(course, 'getAllPages').mockReturnValue([learnPage, practicePage]);

    courseResponse = {
      id: course.id,
      name: course.name,
      firstPage: learnPage.id,
      pages: [
        {
          id: learnPage.id,
          next: practicePage.id,
          type: 'learn',
        },
        {
          id: practicePage.id,
          previous: learnPage.id,
          type: 'practice',
        },
      ],
    };

    model.courseService.getCourseById.mockReturnValue(course);
    model.courseService.getAllCourses.mockReturnValue([course]);
  });

  test('Given valid request when GET /courses then return OK', async () => {
    const response = await request(app).get('/courses');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([courseResponse]);
    expect(model.courseService.getAllCourses).toHaveBeenCalled();
  });

  test('Given valid request when GET /courses/correct_course_id then return OK', async () => {
    const response = await request(app).get(`/courses/${courseResponse.id}`);
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(courseResponse);
    expect(model.courseService.getAllCourses).toHaveBeenCalledWith(courseResponse.id);
  });

  test('Given invalid request when GET /courses/incorrect_course_id then return 404', async () => {
    model.courseService.getCourseById.mockImplementation(() => {
      throw new NotFound();
    });
    const response = await request(app).get('/courses/abcde');
    expect(response.statusCode).toBe(404);
  });
});
