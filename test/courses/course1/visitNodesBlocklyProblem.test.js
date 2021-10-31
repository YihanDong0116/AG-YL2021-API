const pageData = require('../../../src/courses/course1/visitNodesBlocklyProblem');
const pageFactory = require('../../../src/model/pageFactory');

describe('GraphSelectorProblem tests', () => {
  test('when correct answer when check then returns pass status result', () => {
    // given
    const page = pageFactory.make(pageData);

    // when
    const result = page.submit({
      type: 'code',
      data: {
        code: "execution.variables.graph.nodes.forEach((node) => {execution.variables['node'] = node; execution.variables['node'].visit();});",
      },
    });

    // then
    expect(result.status).toBe('pass');
  });

  test('when no nodes visited then returns correct feedback', () => {
    // given
    const page = pageFactory.make(pageData);

    // when
    const result = page.submit({
      type: 'code',
      data: {
        code: "execution.variables.graph.nodes.forEach((node) => {execution.variables['node'] = node;});",
      },
    });

    // then
    expect(result.status).toBe('fail');
  });
});
