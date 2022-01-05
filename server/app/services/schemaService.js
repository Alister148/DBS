/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
const dublinBikesSchema = require('../../schema/dublinBikes');

class SchemaService {
  getSchema() {
    return new Promise((resolve) => { resolve(dublinBikesSchema); });
  }
}

module.exports = new SchemaService();
