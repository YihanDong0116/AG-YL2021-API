const yup = require('yup');

const { LearnPage } = require('./learnPage');
const { PracticePage } = require('./practicePage');

const pageSchema = yup.object().shape({
  title: yup.string().required(),
  type: yup.string().required(),
});

const learnPageSchema = yup.object().shape({
  sections: yup.array().of(yup.object().shape({
    type: yup.string().oneOf(['text', 'image', 'animation']).required(),
    content: yup.string().required(),
  })).required(),
});

const practicePageSchema = yup.object().shape({
  tests: yup.array().of(yup.object().shape({
    feedback: yup.string().required(),
    // eslint-disable-next-line no-template-curly-in-string
    check: yup.mixed().test('is-function', '${path} must be a function', (value) => typeof value === 'function'),
  })).required(),
  problem: yup.object().shape({
    type: yup.string().oneOf(['multichoice', 'code', 'eventStream']).required(),
    data: yup.object().required(),
  }).required(),
});

const getLearnPage = (data) => {
  learnPageSchema.validateSync(data);
  const cast = learnPageSchema.cast(data);
  return new LearnPage(cast.title, cast.sections);
};

const getPracticePage = (data) => {
  practicePageSchema.validateSync(data);
  const cast = practicePageSchema.cast(data);
  return new PracticePage(cast.title, cast.problem, cast.tests);
};

const make = (data) => {
  try {
    pageSchema.validateSync(data);

    const cast = pageSchema.cast(data);

    switch (cast.type) {
      case 'learn':
        return getLearnPage(data);
      case 'practice':
        return getPracticePage(data);
      default:
        throw new Error(`unknown page type ${cast.type}`);
    }
  } catch (e) {
    throw new Error(`parsing page failed with error: ${e}`);
  }
};

module.exports = { make };
