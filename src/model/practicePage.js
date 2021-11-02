const { Page } = require('./page');

const PRACTICE_PAGE_TYPE = 'practice';
const TEST_PASS = 'pass';
const TEST_FAIL = 'fail';

class PracticePage extends Page {
  constructor(title, problem, tests) {
    super(title);
    this.type = PRACTICE_PAGE_TYPE;
    this.problem = problem;
    this.tests = tests;
  }

  submit(inputs) {
    const results = this.tests.map(
      (t) => ({ ...t, status: t.check(inputs.data) ? TEST_PASS : TEST_FAIL }),
    );
    const firstFailed = results.find((r) => r.status === TEST_FAIL);
    let status;
    let feedback;
    if (firstFailed) {
      status = TEST_FAIL;
      feedback = firstFailed.feedback;
    } else {
      status = TEST_PASS;
    }
    return { status, feedback, results };
  }
}

module.exports = { PracticePage };
