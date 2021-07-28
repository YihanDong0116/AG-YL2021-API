const express = require('express');
const yup = require('yup');
const { InvalidFormat } = require('../error/invalidFormat');

const { pageService } = require('../model');

const router = express.Router();

const pageSchema = yup.object().shape({
  id: yup.string().uuid().required(),
  title: yup.string().required(),
  type: yup.string().oneOf(['learn', 'practice']).required(),
  sections: yup.array().of(yup.object().shape({
    type: yup.string().required(),
    content: yup.mixed().required(),
  })).when('type',
    (value, schema) => (value === 'practice' ? schema.strip() : schema)),
  problem: yup.object().when('type',
    (value, schema) => (value === 'learn' ? schema.strip() : schema.shape({
      type: yup.string().required(),
      question: yup.string().required(),
      data: yup.mixed().defined(),
      hints: yup.array().of(yup.string()),
      sections: yup.array().of(yup.object().shape({
        type: yup.string().required(),
        content: yup.mixed().required(),
      })),
    }))),
});

const submissionSchema = yup.object().shape({
  type: yup.string().required(),
  data: yup.mixed().defined(),
});

const resultSchema = yup.object().shape({
  status: yup.string().oneOf(['pass', 'fail']).required(),
  feedback: yup.string(),
  results: yup.array().of(yup.object().shape({
    type: yup.string().oneOf(['sample', 'hidden']).required(),
    name: yup.string().required(),
    status: yup.string().oneOf(['pass', 'fail']).required(),
    feedback: yup.string(),
  })),
});

/* GET specific page. */
router.get('/:id', (req, res, next) => {
  try {
    const page = pageService.getPageById(req.params.id);
    const cast = pageSchema.cast(page, { stripUnknown: true });
    return res.json(cast);
  } catch (e) {
    return next(e);
  }
});

router.post('/:id/submit', (req, res, next) => {
  try {
    submissionSchema.validateSync(req.body);
  } catch (e) {
    return next(new InvalidFormat(`invalid request body: ${e.message}`));
  }

  try {
    const castSubmission = submissionSchema.cast(req.body, { stripUnknown: true });
    const result = pageService.submit(req.params.id, castSubmission);
    const castResult = resultSchema.cast(result, { stripUnknown: true });
    return res.json(castResult);
  } catch (e) {
    return next(e);
  }
});

module.exports = router;
