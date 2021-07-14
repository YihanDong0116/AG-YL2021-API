const uuid = require('uuid');

const { NotImplemented } = require('../error/notImplemented');

class Page {
  constructor(title) {
    this.title = title;
    this.id = uuid.v4();
  }

  setNextPage(page) {
    this.nextPage = page;
  }

  setPreviousPage(page) {
    this.previousPage = page;
  }

  setCourse(course) {
    this.course = course;
  }

  // eslint-disable-next-line class-methods-use-this, no-unused-vars
  submit(input) {
    throw new NotImplemented('submit method should be overridden in extending class');
  }
}

module.exports = { Page };
