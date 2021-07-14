const { CourseLoader } = require('../port/courseLoader');
const { CourseService } = require('./courseService');
const { PageService } = require('./pageService');

const courseLoader = new CourseLoader();
courseLoader.load();

const courseService = new CourseService(courseLoader.courses);

const pageService = new PageService(courseLoader.pages);

module.exports = {
  courseService, pageService,
};
