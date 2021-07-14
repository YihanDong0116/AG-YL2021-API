const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');

const log = require('./util/log');
const routes = require('./routes');
const swaggerDocument = require('./api.json');
const { handleError } = require('./middleware/error');

const app = express();

const corsOptions = {
  origin: '*',
};
app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, 'public')));

// disable etags to prevent 304 being returned to clients
app.disable('etag');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(morgan('combined', { stream: log.stream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use(handleError);

module.exports = app;
