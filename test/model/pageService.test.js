const { PageService } = require('../../src/model/pageService');
const { Page } = require('../../src/model/page');

describe('PageService tests', () => {
  test('given page exists when getPageById then return page', () => {
    // given
    const page = new Page();
    const pages = {};
    pages[page.id] = page;
    const service = new PageService(pages);

    // when
    const retrieved = service.getPageById(page.id);

    // then
    expect(retrieved).toBe(page);
  });

  test('given pages exist when getAllPages then list of pages returned', () => {
    // given
    const page1 = new Page();
    const page2 = new Page();
    const pages = {};
    pages[page1.id] = page1;
    pages[page2.id] = page2;
    const service = new PageService(pages);

    // when
    const retrieved = service.getAllPages();

    // then
    expect(retrieved).toBeDefined();
    expect(retrieved.length).toBe(2);
    expect(retrieved).toEqual(expect.arrayContaining([
      page1,
      page2,
    ]));
  });

  test('given page exists when submit then returns results', () => {
    // given
    const res = {};
    const page = new Page('title', {}, [
      {
        feedback: 'feedback',
        check: () => true,
      },
    ]);
    const pageSpy = jest.spyOn(page, 'submit').mockReturnValue(res);
    const pages = {};
    pages[page.id] = page;
    const service = new PageService(pages);

    // when
    const submission = { type: 'someType', data: {} };
    const results = service.submit(page.id, submission);

    // then
    expect(results).toBe(res);
    expect(pageSpy).toHaveBeenCalledWith(submission);
  });

  test('given page exists when submit throws then service throws', () => {
    // given
    const page = new Page('title', {}, [
      {
        feedback: 'feedback',
        check: () => true,
      },
    ]);
    const pageSpy = jest.spyOn(page, 'submit').mockImplementation(() => {
      throw new Error();
    });
    const pages = {};
    pages[page.id] = page;
    const service = new PageService(pages);
    const submission = { type: 'someType', data: {} };

    // when then
    expect(() => service.submit(page.id, submission)).toThrow();
    expect(pageSpy).toHaveBeenCalledWith(submission);
  });

  test('given page not exists when submit then service throws', () => {
    // given
    const page = new Page('title', {}, [
      {
        feedback: 'feedback',
        check: () => true,
      },
    ]);
    jest.spyOn(page, 'submit').mockImplementation(() => {
      throw new Error();
    });
    const pages = {};
    const service = new PageService(pages);
    const submission = { type: 'someType', data: {} };

    // when then
    expect(() => service.submit(page.id, submission)).toThrow();
  });
});
