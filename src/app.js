const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');

const log = require('./util/log');
const indexRouter = require('./routes/index');
const coursesRouter = require('./routes/courses');
const pagesRouter = require('./routes/pages');
const swaggerDocument = require('./api.json');

const app = express();

const corsOptions = {
  origin: '*',
};
app.use(cors(corsOptions));

// disable etags to prevent 304 being returned to clients
app.disable('etag');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(morgan('combined', { stream: log.stream }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/courses', coursesRouter);
app.use('/pages', pagesRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/', indexRouter);

app.get('/health', (req, res) => {
  res.send("It's Alive!");
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
