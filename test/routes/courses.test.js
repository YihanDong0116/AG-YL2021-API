const request = require('supertest');
const app = require('../../src/app');

describe('Test courses', () => {
  test('Given valid request when GET /courses then return OK', async () => {
    const response = await request(app).get('/courses');
    expect(response.statusCode).toBe(200);
  });

  test('Given valid request when GET /courses/correct_course_id then return OK', async () => {
    const response = await request(app).get(`/courses/${course1.id}`);
    expect(response.statusCode).toBe(200);
  });

  test('Given invalid request when GET /courses/incorrect_course_id then return 404', async () => {
    const response = await request(app).get('/courses/abcde');
    expect(response.statusCode).toBe(404);
  });
});
