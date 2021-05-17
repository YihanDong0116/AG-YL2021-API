const courseList = require('../courses');

const pagelist = [];
courseList.forEach((course) => {
  course.pages.forEach((page) => {
    pagelist.push(page);
  });
});

class PageLoader {
  constructor() {
    this.pagelist = pagelist;
  }

  /* get all pages id and type */
  getPages() {
    const res = [];
    this.pagelist.forEach((page) => {
      const summary = {
        id: page.id,
        type: page.type,
      };
      res.push(summary);
    });
    return res;
  }

  /* check existence of a page with certain id */
  hasPage(id) {
    let res = false;
    this.pagelist.forEach((page) => {
      if (page.id === id) {
        res = true;
      }
    });
    return res;
  }

  /* get a page by id */
  getPageById(id) {
    let res = {};
    this.pagelist.forEach((page) => {
      if (page.id === id) res = page;
    });
    return res;
  }
}

const pageloader = new PageLoader();

module.exports = pageloader;
