const yup = require('yup');

const { LearnPage } = require('./learnPage');
const { PracticePage } = require('./practicePage');

const graphSchema = yup.object().shape({
  height: yup.number().integer().required(),
  width: yup.number().integer().required(),
  nodes: yup.array().of(yup.object().shape({
    id: yup.string().required(),
    name: yup.string().required(),
    x: yup.number().integer().required(),
    y: yup.number().integer().required(),
  })).required(),
  edges: yup.array().of(yup.object().shape({
    id: yup.string().required(),
    name: yup.string(),
    fromNodeId: yup.string().required(),
    toNodeId: yup.string().required(),
  })).required(),
});

const pageSchema = yup.object().shape({
  title: yup.string().required(),
  type: yup.string().required(),
});

const learnPageSchema = yup.object().shape({
  sections: yup.array().of(yup.object().shape({
    type: yup.string().required(),
    content: yup.mixed(),
  })).required(),
});

const textSectionSchema = yup.object().shape({
  type: yup.string().required(),
  content: yup.string().required(),
});

const graphCreatorSectionSchema = yup.object().shape({
  type: yup.string().required(),
  content: yup.string(),
});

const imageSectionSchema = yup.object().shape({
  type: yup.string().required(),
  content: yup.string().required(),
});

const graphSectionSchema = yup.object().shape({
  type: yup.string().required(),
  content: graphSchema,
});

const blocklyExampleSectionSchema = yup.object().shape({
  type: yup.string().required(),
  content: yup.object().shape({
    blocks: yup.string().required(),
    variables: yup.mixed().required(),
    output: yup.object().shape({
      type: yup.string().required(),
      name: yup.string(),
    }).required(),
  }).required(),
});

const graphAnimationSectionSchema = yup.object().shape({
  type: yup.string().required(),
  content: yup.object().shape({
    initialGraph: graphSchema,
    events: yup.array().of(yup.object().shape({
      type: yup.string().required(),
      data: yup.mixed().defined(),
    })).required(),
  }).required(),
});

const practicePageSchema = yup.object().shape({
  tests: yup.array().of(yup.object().shape({
    feedback: yup.string().required(),
    // eslint-disable-next-line no-template-curly-in-string
    check: yup.mixed().test('is-function', '${path} must be a function', (value) => typeof value === 'function'),
  })).required(),
  problem: yup.object().shape({
    type: yup.string().required(),
    question: yup.string().required(),
    data: yup.object().required(),
    hints: yup.array().of(yup.string()).required(),
    sections: yup.array().of(yup.object().shape({
      type: yup.string().required(),
      content: yup.mixed(),
    })).required(),
  }).required(),
});

const multichoiceProblemDataSchema = yup.object().shape({
  options: yup.array().of(yup.object().shape({
    id: yup.string().required(),
    content: yup.string().required(),
  })),
});

const graphCreatorProblemDataSchema = yup.object().shape({});

const graphSelectorProblemDataSchema = graphSchema;

const dijkstraProblemDataSchema = graphSchema;

const graphBlocklyProblemSchema = yup.object().shape({
  initialGraph: graphSchema,
  blocks: yup.array().of(yup.object().shape({
    name: yup.string().required(),
  })).required(),
});

const getSection = (section) => {
  let schema;
  switch (section.type) {
    case 'text':
      schema = textSectionSchema;
      break;
    case 'image':
      schema = imageSectionSchema;
      break;
    case 'graph':
      schema = graphSectionSchema;
      break;
    case 'graphCreator':
      schema = graphCreatorSectionSchema;
      break;
    case 'graphAnimation':
      schema = graphAnimationSectionSchema;
      break;
    case 'blocklyExample':
      schema = blocklyExampleSectionSchema;
      break;
    default:
      throw new Error(`unknown section type ${section.type}`);
  }

  schema.validateSync(section);
  return schema.cast(section, { stripUnknown: true });
};

const getProblemData = (problem) => {
  let schema;
  switch (problem.type) {
    case 'multichoice':
      schema = multichoiceProblemDataSchema;
      break;
    case 'graphCreator':
      schema = graphCreatorProblemDataSchema;
      break;
    case 'graphSelector':
      schema = graphSelectorProblemDataSchema;
      break;
    case 'graphBlockly':
      schema = graphBlocklyProblemSchema;
      break;
    case 'DijkstraProblem':
      schema = dijkstraProblemDataSchema;
      break;
    default:
      throw new Error(`unknown problem type ${problem.type}`);
  }
  schema.validateSync(problem.data);
  return schema.cast(problem.data, { stripUnknown: true });
};

const getLearnPage = (data) => {
  learnPageSchema.validateSync(data);
  const cast = learnPageSchema.cast(data);
  const sections = cast.sections.map((s) => getSection(s));
  return new LearnPage(cast.title, sections);
};

const getPracticePage = (data) => {
  practicePageSchema.validateSync(data);
  const cast = practicePageSchema.cast(data);
  cast.problem.sections = cast.problem.sections.map((s) => getSection(s));
  cast.problem.data = getProblemData(cast.problem);
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
