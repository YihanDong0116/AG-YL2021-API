const request = require('supertest');
const app = require('../../src/app');
const { Forbidden } = require('../../src/error/forbidden');
const { NotFound } = require('../../src/error/notFound');
const model = require('../../src/model');
const { LearnPage } = require('../../src/model/learnPage');
const { Page } = require('../../src/model/page');
const { PracticePage } = require('../../src/model/practicePage');

jest.mock('../../src/model');

describe('pages route tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Given valid request and page exists and page is learn page when GET /pages/id then return OK', async () => {
    // given
    const page = new LearnPage('learnPageName', [{ type: 'text', content: 'content' }]);
    model.pageService.getPageById.mockReturnValue(page);

    // when
    const response = await request(app).get(`/pages/${page.id}`);

    // then
    expect(model.pageService.getPageById).toHaveBeenCalledWith(page.id);
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      id: page.id,
      title: page.title,
      type: page.type,
      sections: page.sections,
    });
  });

  test('Given valid request and page exists and page is practice page when GET /pages/id then return OK', async () => {
    // given
    const page = new PracticePage(
      'learnPageName',
      {
        type: 'mulitchoice',
        question: 'someQuestion',
        hints: ['first'],
        data: {},
      },
      [{ feedback: 'text', check: () => true }],
    );
    model.pageService.getPageById.mockReturnValue(page);

    // when
    const response = await request(app).get(`/pages/${page.id}`);

    // then
    expect(model.pageService.getPageById).toHaveBeenCalledWith(page.id);
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      id: page.id,
      title: page.title,
      type: page.type,
      problem: {
        type: page.problem.type,
        question: page.problem.question,
        hints: page.problem.hints,
        data: page.problem.data,
      },
    });
  });

  test('Given page does not exist when GET /pages/wrong_id then 404 error', async () => {
    // given
    model.pageService.getPageById.mockImplementation(() => {
      throw new NotFound();
    });

    // when
    const response = await request(app).get('/pages/wrong_id');

    // then
    expect(model.pageService.getPageById).toHaveBeenCalledWith('wrong_id');
    expect(response.statusCode).toBe(404);
  });

  test('Given valid request when POST /pages/id/submit then return OK', async () => {
    // given
    const results = {
      feedback: 'feedback',
      status: 'fail',
      results: [
        {
          type: 'sample',
          status: 'fail',
          feedback: 'feedback',
          name: 'someName',
        },
      ],
    };
    model.pageService.submit.mockReturnValue(results);
    const page = new Page();

    // when
    const req = {
      type: 'text',
      data: {},
    };
    const response = await request(app).post(`/pages/${page.id}/submit`).send(req);

    // then
    expect(model.pageService.submit).toHaveBeenCalledWith(page.id, req);
    expect(response.statusCode).toBe(200);
  });

  test('Given page does not exist when POST /pages/id/submit then 404 error', async () => {
    // given
    model.pageService.submit.mockImplementation(() => {
      throw new NotFound();
    });

    // when
    const req = {
      type: 'text',
      data: {},
    };
    const response = await request(app).post('/pages/wrong_id/submit').send(req);

    // then
    expect(model.pageService.submit).toHaveBeenCalledWith('wrong_id', req);
    expect(response.statusCode).toBe(404);
  });

  test('Given page exists and submit forbidden when POST /pages/id/submit then 403 error', async () => {
    // given
    model.pageService.submit.mockImplementation(() => {
      throw new Forbidden();
    });
    const page = new Page();

    // when
    const req = {
      type: 'text',
      data: {},
    };
    const response = await request(app).post(`/pages/${page.id}/submit`).send(req);

    // then
    expect(model.pageService.submit).toHaveBeenCalledWith(page.id, req);
    expect(response.statusCode).toBe(403);
  });

  test('Given page exists request format invalid with no type when POST /pages/id/submit then 400 error', async () => {
    // given
    const page = new Page();

    // when
    const response = await request(app).post(`/pages/${page.id}/submit`).send({
      data: {},
    });

    // then
    expect(model.pageService.submit).not.toHaveBeenCalled();
    expect(response.statusCode).toBe(400);
  });

  test('Given page exists request format invalid with no data when POST /pages/id/submit then 400 error', async () => {
    // given
    const page = new Page();

    // when
    const response = await request(app).post(`/pages/${page.id}/submit`).send({
      type: 'text',
    });

    // then
    expect(model.pageService.submit).not.toHaveBeenCalled();
    expect(response.statusCode).toBe(400);
  });
});
