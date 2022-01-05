const winston = require('winston');

const logger = winston.createLogger({
  format: winston.format.simple(),
  defaultMeta: { service: 'user-service' },
});

module.exports = logger;
