const { Course } = require('../../src/model/course');
const courseFactory = require('../../src/model/courseFactory');
const { Page } = require('../../src/model/page');
const pageFactory = require('../../src/model/pageFactory');

jest.mock('../../src/model/pageFactory');

describe('courseFactory tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('given valid data when make then return course', () => {
    // given
    pageFactory.make.mockImplementation(() => new Page('someName'));

    const data = {
      name: 'someName',
      pages: [
        {
          type: 'learn',
        },
        {
          type: 'practice',
        },
      ],
    };

    // when
    const course = courseFactory.make(data);

    // then
    expect(pageFactory.make.mock.calls.length).toBe(data.pages.length);
    expect(pageFactory.make.mock.calls[0][0]).toBe(data.pages[0]);
    expect(pageFactory.make.mock.calls[1][0]).toBe(data.pages[1]);
    expect(course).toBeInstanceOf(Course);
    expect(course.name).toBe(data.name);
    expect(course.getAllPages()).toBeDefined();
    expect(course.getAllPages().length).toBe(data.pages.length);
    expect(course.getAllPages()[0]).toBeDefined();
    expect(course.getAllPages()[0].title).toBe('someName');
    expect(course.getAllPages()[1]).toBeDefined();
    expect(course.getAllPages()[1].title).toBe('someName');
  });

  test('given invalid data with no name when make then throws', () => {
    // given
    pageFactory.make.mockImplementation(() => new Page('someName'));

    const data = {
      pages: [
        {
          type: 'learn',
        },
        {
          type: 'learn',
        },
      ],
    };

    // when then
    expect(() => courseFactory.make(data)).toThrow();
  });

  test('given invalid data with no pages when make then throws', () => {
    // given
    pageFactory.make.mockImplementation(() => new Page('someName'));

    const data = {
      name: 'someName',
    };

    // when then
    expect(() => courseFactory.make(data)).toThrow();
  });

  test('given invalid data with invalid pages when make then throws', () => {
    // given
    pageFactory.make.mockImplementation(() => {
      throw new Error();
    });

    const data = {
      name: 'someName',
      pages: [
        {
          type: 'learn',
        },
        {
          type: 'learn',
        },
      ],
    };

    // when then
    expect(() => courseFactory.make(data)).toThrow();
  });
});
