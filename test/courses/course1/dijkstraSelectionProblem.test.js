const pageData = require('../../../src/courses/course1/dijkstraSelectionProblem');
const pageFactory = require('../../../src/model/pageFactory');

describe('DijkstraSelectorProblem tests', () => {
  test('given correct answer when check then returns pass status result', () => {
    // given
    const page = pageFactory.make(pageData);

    // when
    const result = page.submit({
      type: 'text',
      data: {
        nodes: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'],
        edges: ['2', '6', '13', '17'],
      },
    });

    // then
    expect(result.status).toBe('pass');
  });

  test('given incorrect node answer when check then returns fail status result', () => {
    // given
    const page = pageFactory.make(pageData);

    // when
    const result = page.submit({
      type: 'text',
      data: {
        nodes: ['c', 'a'],
        edges: ['2', '6', '13', '17'],
      },
    });

    // then
    expect(result.status).toBe('fail');
  });

  test('given incorrect edge answer when check then returns fail status result', () => {
    // given
    const page = pageFactory.make(pageData);

    // when
    const result = page.submit({
      type: 'text',
      data: {
        nodes: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'],
        edges: ['1', '6', '5'],
      },
    });

    // then
    expect(result.status).toBe('fail');
  });
});
