const {
  createLogger, format, transports, config,
} = require('winston');

const {
  combine, timestamp, prettyPrint, printf,
} = format;

const logger = createLogger({
  level: 'info',
  levels: config.syslog.levels,
  format: combine(timestamp(), prettyPrint()),
  defaultMeta: { service: 'ag-api' },
  transports: [
    new transports.File({ filename: 'error.log', level: 'error' }),
    new transports.File({ filename: 'combined.log' }),
  ],
});

const simpleDev = printf((o) => `${o.timestamp} ${o.level}: ${o.message}`);

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      format: simpleDev,
    }),
  );
}

logger.stream = {
  write(message) {
    logger.info(message);
  },
};

module.exports = logger;
