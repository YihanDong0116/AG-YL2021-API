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

  test('Given valid request when GET /pages then return OK', async () => {
    const response = await request(app).get('/pages');
    expect(response.statusCode).toBe(200);
  });

  test('Given valid request when GET /users then return OK', async () => {
    const response = await request(app).get('/courses');
    expect(response.statusCode).toBe(200);
  });

  test('Given invalid request when GET /invalid then return 404', async () => {
    const response = await request(app).get('/invalid');
    expect(response.statusCode).toBe(404);
  });
});
