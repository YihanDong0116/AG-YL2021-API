const request = require('supertest');
const app = require('../src/app');
const course1 = require('../src/courses/course1');

describe('Test paths', () => {
  test('Given valid request when GET / then return OK', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });

  test('Given valid request when GET /health then return OK', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
  });

  test('Given invalid request when GET /invalid then return 404', async () => {
    const response = await request(app).get('/invalid');
    expect(response.statusCode).toBe(404);
  });
});

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

describe('Test pages', () => {
  test('Given valid request when GET /pages/correct_page_id then return OK', async () => {
    const response = await request(app).get('/pages/correct_page_id');
    expect(response.statusCode).toBe(200);
  });

  test('Given valid request when GET /pages/wrong_id then return OK', async () => {
    const response = await request(app).get('/pages/wrong_id');
    expect(response.statusCode).toBe(404);
  });

  test('Given valid request when POST /pages/id then return OK', async () => {
    const response = await request(app).post('/pages/_id/submit');
    expect(response.statusCode).toBe(200);
  });
});
