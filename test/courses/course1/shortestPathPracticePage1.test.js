const pageData = require('../../../src/courses/course1/shortestPathPracticePage1');
const pageFactory = require('../../../src/model/pageFactory');

describe('Shortest Path Practice Page1 tests', () => {
  test('select correct answer when check then returns pass status result', () => {
    // given
    const page = pageFactory.make(pageData);

    // when
    const result = page.submit({
      type: 'text',
      data: {
        nodes: ['a', 'c', 'g'],
        edges: ['3', '4'],
      },
    });

    // then
    expect(result.status).toBe('pass');
  });

  test('select only nodes then returns failed status result', () => {
    // given
    const page = pageFactory.make(pageData);

    // when
    const result = page.submit({
      type: 'text',
      data: {
        nodes: [],
        edges: ['3', '4'],
      },
    });

    // then
    expect(result.status).toBe('fail');
  });

  test('select an incorrect edge then returns failed status result', () => {
    // given
    const page = pageFactory.make(pageData);

    // when
    const result = page.submit({
      type: 'text',
      data: {
        nodes: [],
        edges: ['2', '4'],
      },
    });

    // then
    expect(result.status).toBe('fail');
  });
});
