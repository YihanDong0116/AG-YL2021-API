const { Forbidden } = require('../error/forbidden');
const { InvalidFormat } = require('../error/invalidFormat');
const { NotFound } = require('../error/notFound');
const { NotImplemented } = require('../error/notImplemented');

const handleError = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  // set locals, only providing error in development
  let status = err.status || 500;
  let message = err.message || 'Internal Server Error';
  const reason = err.message;

  if (err instanceof Forbidden) {
    status = 403;
    message = 'Forbidden';
  }

  if (err instanceof NotFound) {
    status = 404;
    message = 'Not Found';
  }

  if (err instanceof NotImplemented) {
    status = 501;
    message = 'Not Implemented';
  }

  if (err instanceof InvalidFormat) {
    status = 400;
    message = 'Bad Request';
  }

  const error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(status);
  return res.json({
    url: req.url,
    status,
    message,
    reason,
    error,
  });
};

module.exports = { handleError };
