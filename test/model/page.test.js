const { Page } = require('../../src/model/page');
const { Course } = require('../../src/model/course');

describe('Page tests', () => {
  test('when page created then initialized correctly', () => {
    // when
    const page = new Page('someName');

    // then
    expect(page.id).toBeDefined();
    expect(page.title).toBe('someName');
  });

  test('given page without course when setCourse then course set on page', () => {
    // given
    const page = new Page('someName');
    const course = new Course('someCourseName');

    // when
    page.setCourse(course);

    // then
    expect(page.course).toBe(course);
  });

  test('given page without nextPage when setNextPage then page nextPage set', () => {
    // given
    const page = new Page('someName');
    const otherPage = new Page('someOtherName');

    // when
    page.setNextPage(otherPage);

    // then
    expect(page.nextPage).toBe(otherPage);
  });

  test('given page without previousPage when setPreviousPage then page previousPage set', () => {
    // given
    const page = new Page('someName');
    const otherPage = new Page('someOtherName');

    // when
    page.setPreviousPage(otherPage);

    // then
    expect(page.previousPage).toBe(otherPage);
  });

  test('given page when submit then throws NotImplemented error', () => {
    // given
    const page = new Page('someName');

    // when then
    expect(() => page.submit({})).toThrow();
  });
});
