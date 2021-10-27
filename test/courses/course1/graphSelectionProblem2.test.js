const pageData = require('../../../src/courses/course1/graphSelectionProblem2');
const pageFactory = require('../../../src/model/pageFactory');

describe('GraphSelectorProblem tests', () => {
  test('when correct answer when check then returns pass status result', () => {
    // given
    const page = pageFactory.make(pageData);

    // when
    const result = page.submit({
      type: 'text',
      data: {
        nodes: ['a', 'c'],
        edges: ['1', '5', '6'],
      },
    });

    // then
    expect(result.status).toBe('pass');
  });

  test('when correct answer not in given order when check then returns pass status result', () => {
    // given
    const page = pageFactory.make(pageData);

    // when
    const result = page.submit({
      type: 'text',
      data: {
        nodes: ['c', 'a'],
        edges: ['1', '6', '5'],
      },
    });

    // then
    expect(result.status).toBe('pass');
  });

  test('when incorrect answer missing node when check then returns fail status result', () => {
    // given
    const page = pageFactory.make(pageData);

    // when
    const result = page.submit({
      type: 'text',
      data: {
        nodes: ['a'],
        edges: ['1', '5', '6'],
      },
    });

    // then
    expect(result.status).toBe('fail');
  });

  test('when incorrect answer missing edges when check then returns fail status result', () => {
    // given
    const page = pageFactory.make(pageData);

    // when
    const result = page.submit({
      type: 'text',
      data: {
        nodes: ['a', 'c'],
        edges: ['1', '5'],
      },
    });

    // then
    expect(result.status).toBe('fail');
  });

  test('when incorrect answer with extra node when check then returns fail status result', () => {
    // given
    const page = pageFactory.make(pageData);

    // when
    const result = page.submit({
      type: 'text',
      data: {
        nodes: ['a', 'c', 'd'],
        edges: ['1', '5', '6'],
      },
    });

    // then
    expect(result.status).toBe('fail');
  });

  test('when incorrect answer with extra edge when check then returns fail status result', () => {
    // given
    const page = pageFactory.make(pageData);

    // when
    const result = page.submit({
      type: 'text',
      data: {
        nodes: ['a', 'c'],
        edges: ['1', '5', '6', '2'],
      },
    });

    // then
    expect(result.status).toBe('fail');
  });
});
