const request = require('supertest');
const app = require('../../src/app');

describe('Test pages', () => {
  test('Given valid request when GET /pages/correct_page_id then return OK', async () => {
    const response = await request(app).get(`/pages/${page1.id}`);
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