/* eslint-disable linebreak-style */
const express = require('express');
const logger = require('./utils/logger');
const apiRouter = require('./app/routes/api');
require('./app/data-loader/dublinBikeLoader');

const serverConfig = require('./config/serverConfig');

const app = express();
app.use(express.json());
app.use(apiRouter);
app.use((req, res, next) => {
  logger.log('the url you are trying to reach is not hosted on our server', 'error');
  const err = new Error('Not Found');
  err.status = 404;
  res.status(err.status).json({ type: 'error', message: 'the url you are trying to reach is not hosted on our server' });
  next(err);
});
app.listen(serverConfig.port, () => {
  logger.info(`server started at port ${serverConfig.port}`);
});
