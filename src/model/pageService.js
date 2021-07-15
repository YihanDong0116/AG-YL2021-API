const NotFound = require('../error/notFound');

const PAGE_TYPE = 'page';

class PageService {
  constructor(pages) {
    this.pages = pages;
  }

  getPageById(id) {
    if (!this.pages[id]) {
      throw new NotFound(PAGE_TYPE, id);
    }
    return this.pages[id];
  }

  getAllPages() {
    return Object.values(this.pages);
  }

  submit(id, input) {
    const page = this.getPageById(id);
    return page.submit(input);
  }
}

module.exports = { PageService };
