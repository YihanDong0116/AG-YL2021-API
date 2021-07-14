const pageFactory = require('../../src/model/pageFactory');
const { LearnPage } = require('../../src/model/learnPage');
const { PracticePage } = require('../../src/model/practicePage');

describe('pageFactory tests', () => {
  test('given valid learn page when make then returns LearnPage', () => {
    // given
    const data = {
      title: 'someTitle',
      type: 'learn',
      sections: [
        {
          type: 'text',
          content: 'sometext',
        },
        {
          type: 'image',
          content: 'http://some.url',
        },
        {
          type: 'animation',
          content: 'someText',
        },
      ],
    };

    // when
    const page = pageFactory.make(data);

    // then
    expect(page).toBeDefined();
    expect(page).toBeInstanceOf(LearnPage);
    expect(page.title).toBe(data.title);
    expect(page.sections).toEqual(data.sections);
  });

  test('given invalid page with bad type when make then throws', () => {
    // given
    const data = {
      title: 'someTitle',
      type: 'bogus',
    };

    // when then
    expect(() => pageFactory.make(data)).toThrow();
  });

  test('given invalid page with no type when make then throws', () => {
    // given
    const data = {
      title: 'someTitle',
    };

    // when then
    expect(() => pageFactory.make(data)).toThrow();
  });

  test('given invalid learn page with no title when make then throws', () => {
    // given
    const data = {
      type: 'learn',
    };

    // when then
    expect(() => pageFactory.make(data)).toThrow();
  });

  test('given invalid learn page with section with invalid type when make then throws', () => {
    // given
    const data = {
      title: 'somePage',
      type: 'learn',
      sections: [
        {
          type: 'bogus',
          content: 'sometext',
        },
      ],
    };

    // when then
    expect(() => pageFactory.make(data)).toThrow();
  });

  test('given invalid learn page with section with no type when make then throws', () => {
    // given
    const data = {
      title: 'somePage',
      type: 'learn',
      sections: [
        {
          content: 'sometext',
        },
      ],
    };

    // when then
    expect(() => pageFactory.make(data)).toThrow();
  });

  test('given invalid learn page with section with no content when make then throws', () => {
    // given
    const data = {
      title: 'somePage',
      type: 'learn',
      sections: [
        {
          type: 'text',
        },
      ],
    };

    // when then
    expect(() => pageFactory.make(data)).toThrow();
  });

  test('given valid practice page when make then returns PracticePage', () => {
    // given
    const data = {
      title: 'someTitle',
      type: 'practice',
      problem: {
        type: 'multichoice',
        data: {},
      },
      tests: [
        {
          feedback: 'feedback',
          check: () => true,
        },
      ],
    };

    // when
    const page = pageFactory.make(data);

    // then
    expect(page).toBeDefined();
    expect(page).toBeInstanceOf(PracticePage);
    expect(page.title).toBe(data.title);
    expect(page.problem).toEqual(data.problem);
    expect(page.tests).toEqual(data.tests);
  });

  test('given invalid practice page with no problem when make then throws', () => {
    // given
    const data = {
      title: 'someTitle',
      type: 'practice',
      tests: [
        {
          feedback: 'feedback',
          check: () => true,
        },
      ],
    };

    // when then
    expect(() => pageFactory.make(data)).toThrow();
  });

  test('given invalid practice page with no tests when make then throws', () => {
    // given
    const data = {
      title: 'someTitle',
      type: 'practice',
      problem: {
        type: 'multichoice',
        data: {},
      },
    };

    // when then
    expect(() => pageFactory.make(data)).toThrow();
  });

  test('given invalid practice page with problem with no type when make then throws', () => {
    // given
    const data = {
      title: 'someTitle',
      type: 'practice',
      problem: {
        data: {},
      },
      tests: [
        {
          feedback: 'feedback',
          check: () => true,
        },
      ],
    };

    // when then
    expect(() => pageFactory.make(data)).toThrow();
  });

  test('given invalid practice page with problem with no data when make then throws', () => {
    // given
    const data = {
      title: 'someTitle',
      type: 'practice',
      problem: {
        type: 'multichoice',
      },
      tests: [
        {
          feedback: 'feedback',
          check: () => true,
        },
      ],
    };

    // when then
    expect(() => pageFactory.make(data)).toThrow();
  });

  test('given invalid practice page with test with no feedback when make then throws', () => {
    // given
    const data = {
      title: 'someTitle',
      type: 'practice',
      problem: {
        type: 'multichoice',
        data: {},
      },
      tests: [
        {
          check: () => true,
        },
      ],
    };

    // when then
    expect(() => pageFactory.make(data)).toThrow();
  });

  test('given invalid practice page with test with no check when make then throws', () => {
    // given
    const data = {
      title: 'someTitle',
      type: 'practice',
      problem: {
        type: 'multichoice',
        data: {},
      },
      tests: [
        {
          feedback: 'feedback',
        },
      ],
    };

    // when then
    expect(() => pageFactory.make(data)).toThrow();
  });

  test('given invalid practice page with test with bad check type when make then throws', () => {
    // given
    const data = {
      title: 'someTitle',
      type: 'practice',
      problem: {
        type: 'multichoice',
        data: {},
      },
      tests: [
        {
          feedback: 'feedback',
          check: 'bad',
        },
      ],
    };

    // when then
    expect(() => pageFactory.make(data)).toThrow();
  });
});
