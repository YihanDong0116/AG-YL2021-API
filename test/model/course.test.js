const uuid = require('uuid');

const { Course } = require('../../src/model/course');
const { Page } = require('../../src/model/page');

describe('Course tests', () => {
  test('when course created then initialized correctly', () => {
    // when
    const course = new Course('someName');

    // then
    expect(course.id).toBeDefined();
    expect(course.name).toBe('someName');
    expect(course.pages).toEqual({});
  });

  test('given empty course when add page then page added and firstPage set', () => {
    // given
    const course = new Course('someName');
    const page = new Page('somePageName');

    // when
    course.addPage(page);

    // then
    expect(course.firstPage).toBe(page);
  });

  test('given course with page when getPageById then returns page', () => {
    // given
    const course = new Course('someName');
    const page = new Page('somePageName');
    course.addPage(page);

    // when
    const retrieved = course.getPageById(page.id);

    // then
    expect(retrieved).toBe(page);
  });

  test('given course without page when getPageById then throws NotFound error', () => {
    // given
    const course = new Course('someName');

    // when then
    expect(() => course.getPageById(uuid.v4())).toThrow();
  });

  test('given course with page when addPage then previous page set for new page and next page set for previous page', () => {
    // given
    const course = new Course('someName');
    const firstPage = new Page('somePageName');
    const secondPage = new Page('someOtherPageName');
    course.addPage(firstPage);

    // when
    course.addPage(secondPage);

    // then
    expect(firstPage.nextPage).toBe(secondPage);
    expect(secondPage.previousPage).toBe(firstPage);
  });

  test('given course with pages when getAllPages then returns list of pages', () => {
    // given
    const course = new Course('someName');
    const firstPage = new Page('somePageName');
    const secondPage = new Page('someOtherPageName');
    course.addPage(firstPage);
    course.addPage(secondPage);

    // when
    const allPages = course.getAllPages();

    // then
    expect(allPages.length).toBe(2);
    expect(allPages.indexOf(firstPage) >= 0).toBe(true);
    expect(allPages.indexOf(secondPage) >= 0).toBe(true);
  });
});
