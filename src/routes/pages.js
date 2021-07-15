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
    type: yup.string().oneOf(['text', 'image', 'animation']).required(),
    content: yup.string().required(),
  })),
  problem: yup.object().shape({
    type: yup.string().oneOf(['code', 'multichoice', 'text']).required(),
    question: yup.string().required(),
    data: yup.object().required(),
    hints: yup.array().of(yup.string()),
  }),
});

const submissionSchema = yup.object().shape({
  type: yup.string().oneOf(['code', 'text', 'eventStream']).required(),
  data: yup.object().required(),
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
router.get('/:id', (req, res) => {
  const page = pageService.getPageById(req.params.id);
  const cast = pageSchema.cast(page);
  return res.json(cast);
});

router.post('/:id/submit', (req, res) => {
  try {
    submissionSchema.validate(req.body);
  } catch (e) {
    throw new InvalidFormat(`invalid request body: ${e.message}`);
  }

  const castSubmission = submissionSchema.cast(req.body);
  const result = pageService.submit(req.params.id, castSubmission);
  const castResult = resultSchema.cast(result);
  res.json(castResult);
});

module.exports = router;
