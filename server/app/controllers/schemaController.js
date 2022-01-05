/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
const schemaService = require('../services/schemaService');
const logger = require('../../utils/logger');
const requestHandler = require('../../utils/RequestHandler');

class SchemaController {
  async getSchema(req, res) {
    try {
      const schema = await schemaService.getSchema();
      requestHandler.sendSuccess(res, 'Success', 200)(schema);
    } catch (e) {
      requestHandler.sendError(res, 'Unable to fetch the schema.')();
    }
  }
}

module.exports = new SchemaController();
