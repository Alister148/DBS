/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
const logger = require('../../utils/logger');
const bikesService = require('../services/bikesService');
const requestHandler = require('../../utils/RequestHandler');
const Filter = require('../../utils/filter');

class BikesController {
  async filter(req, res) {
    try {
      const query = req.body;
      const bikesDataset = await bikesService.getAllData();
      const fl = new Filter(query.where, bikesDataset);
      requestHandler.sendSuccess(res, 'success', 200)(fl.filter());
    } catch (e) {
      requestHandler.sendError(res, e.message, 500)();
    }
  }
}

module.exports = new BikesController();
