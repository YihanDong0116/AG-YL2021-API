const { Page } = require('./page');
const { Forbidden } = require('../error/forbidden');

const LEARN_PAGE_TYPE = 'learn';

class LearnPage extends Page {
  constructor(title, sections) {
    super(title);
    this.sections = sections;
    this.type = LEARN_PAGE_TYPE;
  }

  // eslint-disable-next-line no-unused-vars, class-methods-use-this
  submit(input) {
    throw new Forbidden(`submissions not supported for ${LEARN_PAGE_TYPE} pages`);
  }
}

module.exports = { LearnPage };
