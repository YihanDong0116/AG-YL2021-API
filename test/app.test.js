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

  test('Given valid request when GET /users then return OK', async () => {
    const response = await request(app).get('/courses');
    expect(response.statusCode).toBe(200);
  });

  test('Given valid request when GET /users/correct_user_id then return OK', async () => {
    const response = await request(app).get('/courses/correct_course_id');
    expect(response.statusCode).toBe(200);
  });

  test('Given invalid request when GET /users/wrong_id then return 404', async () => {
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
