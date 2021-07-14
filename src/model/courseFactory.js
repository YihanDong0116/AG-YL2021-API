const yup = require('yup');

const { Course } = require('./course');
const pageFactory = require('./pageFactory');

const courseSchema = yup.object().shape({
  name: yup.string().required(),
  pages: yup.array().of(yup.object()).required(),
});

const make = (data) => {
  let cast;
  try {
    courseSchema.validateSync(data);
    cast = courseSchema.cast(data);
  } catch (e) {
    throw new Error(`error parsing course: ${e}`);
  }

  const course = new Course(cast.name);

  for (let i = 0; i < cast.pages.length; i += 1) {
    let page;
    try {
      page = pageFactory.make(cast.pages[i]);
    } catch (e) {
      throw new Error(`error parsing page in course ${course.name}: ${e}`);
    }

    course.addPage(page);
  }

  return course;
};

module.exports = { make };
