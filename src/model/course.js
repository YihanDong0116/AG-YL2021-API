const uuid = require('uuid');

const { NotFound } = require('../error/notFound');

class Course {
  constructor(name) {
    this.name = name;
    this.id = uuid.v4();
    this.pages = {};
  }

  addPage(page) {
    page.setCourse(this);
    this.pages[page.id] = page;
    if (!this.firstPage) {
      this.firstPage = page;
    }

    if (this.lastAdded) {
      this.lastAdded.setNextPage(page);
      page.setPreviousPage(this.lastAdded);
    }

    this.lastAdded = page;
  }

  getAllPages() {
    return Object.values(this.pages);
  }

  getPageById(id) {
    if (!this.pages[id]) {
      throw new NotFound('page', id);
    }
    return this.pages[id];
  }
}

module.exports = { Course };
