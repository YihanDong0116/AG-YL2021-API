const request = require('supertest');
const app = require('../src/app');

describe('Test paths', () => {
  test('Given valid request when GET / then return OK', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });

  test('Given valid request when GET /health then return OK', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
  });

  test('Given valid request when GET /courses then return OK', async () => {
    const response = await request(app).get('/courses');
    expect(response.statusCode).toBe(200);
  });

  test('Given valid request when GET /courses/correct_course_id then return OK', async () => {
    const response = await request(app).get('/courses/3fa85f64-5717-4562-b3fc-2c963f66afa6');
    expect(response.statusCode).toBe(200);
  });

  test('Given invalid request when GET /courses/incorrect_course_id then return 404', async () => {
    const response = await request(app).get('/courses/abcde');
    expect(response.statusCode).toBe(404);
  });

  test('Given invalid request when GET /courses/wrong_id then return 404', async () => {
    const response = await request(app).get('/courses/wrong_id');
    expect(response.statusCode).toBe(404);
  });

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

  test('Given invalid request when GET /invalid then return 404', async () => {
    const response = await request(app).get('/invalid');
    expect(response.statusCode).toBe(404);
  });
});
