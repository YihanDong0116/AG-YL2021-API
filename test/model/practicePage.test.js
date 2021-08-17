const { PracticePage } = require('../../src/model/practicePage');

describe('PracticePage tests', () => {
  test('when created practice page initialized correctly', () => {
    // when
    const problem = {};
    const tests = [];
    const page = new PracticePage('pageName', problem, tests);

    expect(page.id).toBeDefined();
    expect(page.problem).toBe(problem);
    expect(page.tests).toBe(tests);
    expect(page.title).toBe('pageName');
  });

  test('given all tests pass when submit then pass result returned', () => {
    // given
    const testInputs = [];
    const data = {};
    const page = new PracticePage('someName', {}, [
      {
        feedback: 'feedback1',
        check: (input) => {
          testInputs.push(input);
          return true;
        },
      },
      {
        feedback: 'feedback2',
        check: (input) => {
          testInputs.push(input);
          return true;
        },
      },
    ]);

    // when
    const result = page.submit(data);

    // then
    expect(result.status).toBe('pass');
    expect(result.feedback).not.toBeDefined();
    expect(result.results).toBeDefined();
    expect(result.results).toEqual([
      expect.objectContaining({
        feedback: page.tests[0].feedback,
        status: 'pass',
      }),
      expect.objectContaining({
        feedback: page.tests[1].feedback,
        status: 'pass',
      }),
    ]);
  });

  test('given one test fails when submit then fail result returned', () => {
    // given
    const testInputs = [];
    const data = {};
    const page = new PracticePage('someName', {}, [
      {
        feedback: 'feedback1',
        check: (input) => {
          testInputs.push(input);
          return false;
        },
      },
      {
        feedback: 'feedback2',
        check: (input) => {
          testInputs.push(input);
          return true;
        },
      },
    ]);

    // when
    const result = page.submit(data);

    // then
    expect(result.status).toBe('fail');
    expect(result.feedback).toBe('feedback1');
    expect(result.results).toBeDefined();
    expect(result.results).toEqual([
      expect.objectContaining({
        feedback: page.tests[0].feedback,
        status: 'fail',
      }),
      expect.objectContaining({
        feedback: page.tests[1].feedback,
        status: 'pass',
      }),
    ]);
  });
});
