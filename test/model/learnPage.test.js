const { LearnPage } = require('../../src/model/learnPage');

describe('LearnPage tests', () => {
  it('when created LearnPage instance initialized correctly', () => {
    // when
    const sections = [];
    const page = new LearnPage('someName', sections);

    // then
    expect(page.title).toBe('someName');
    expect(page.id).toBeDefined();
    expect(page.sections).toBe(sections);
  });

  it('give LearnPage when submit to page then throws', () => {
    // given
    const page = new LearnPage('someName', []);

    // when then
    expect(() => page.submit({})).toThrow();
  });
});
