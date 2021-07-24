const pageData = require('../../../src/courses/course1/page6');
const pageFactory = require('../../../src/model/pageFactory');

describe('Page6 test', () => {
  test('when correct answer when check then returns pass status result', () => {
    // given
    const page = pageFactory.make(pageData);

    // when
    const result = page.submit({
      type: 'text',
      data: {
        ids: [
          '1', '3',
        ],
      },
    });

    // then
    expect(result.status).toBe('pass');
  });

  test('when correct answer in reverse order when check then returns pass status result', () => {
    // given
    const page = pageFactory.make(pageData);

    // when
    const result = page.submit({
      type: 'text',
      data: {
        ids: [
          '3', '1',
        ],
      },
    });

    // then
    expect(result.status).toBe('pass');
  });

  test('when incorrect answer missing option 1 when check then returns fail status result', () => {
    // given
    const page = pageFactory.make(pageData);

    // when
    const result = page.submit({
      type: 'text',
      data: {
        ids: [
          '3',
        ],
      },
    });

    // then
    expect(result.status).toBe('fail');
  });

  test('when incorrect answer missing option 3 when check then returns fail status result', () => {
    // given
    const page = pageFactory.make(pageData);

    // when
    const result = page.submit({
      type: 'text',
      data: {
        ids: [
          '1',
        ],
      },
    });

    // then
    expect(result.status).toBe('fail');
  });

  test('when incorrect answer with extra option when check then returns fail status result', () => {
    // given
    const page = pageFactory.make(pageData);

    // when
    const result = page.submit({
      type: 'text',
      data: {
        ids: [
          '1', '2', '3',
        ],
      },
    });

    // then
    expect(result.status).toBe('fail');
  });
});
