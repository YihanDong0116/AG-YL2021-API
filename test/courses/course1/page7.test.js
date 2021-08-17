const pageData = require('../../../src/courses/course1/page7');
const pageFactory = require('../../../src/model/pageFactory');

describe('Page7 tests', () => {
  test('when correct answer when check then returns pass status result', () => {
    // given
    const page = pageFactory.make(pageData);

    // when
    const result = page.submit({
      type: 'text',
      data: {
        nodes: ['a', 'b', 'c', 'd'],
        edges: ['(a, b)', '(b, a)', '(b, c)', '(c, d)'],
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
        nodes: ['b', 'a', 'c', 'd'],
        edges: ['(b, a)', '(a, b)', '(b, c)', '(c, d)'],
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
        nodes: ['a', 'c', 'd'],
        edges: ['(b, a)', '(a, b)', '(b, c)', '(c, d)'],
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
        nodes: ['a', 'b', 'c', 'd'],
        edges: ['(a, b)', '(b, a)', '(b, c)'],
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
        nodes: ['a', 'b', 'c', 'd', 'e'],
        edges: ['(a, b)', '(b, a)', '(b, c)', '(c, d)'],
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
        nodes: ['a', 'b', 'c', 'd'],
        edges: ['(a, b)', '(b, a)', '(b, c)', '(c, d)', '(a, d)'],
      },
    });

    // then
    expect(result.status).toBe('fail');
  });
});
