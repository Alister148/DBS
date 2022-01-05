/* eslint-disable class-methods-use-this */
/* eslint-disable linebreak-style */
const https = require('https');
const logger = require('../../utils/logger');
const dublinBikesLoaderconfig = require('../../config/dublinBikesLoaderConfig');

class DublinBikesLoader {
  bikesData = null;
  
  async loadData() {
    const options = {
      hostname: dublinBikesLoaderconfig.hostname,
      port: dublinBikesLoaderconfig.port,
      path: dublinBikesLoaderconfig.path,
      method: dublinBikesLoaderconfig.method,
    };
    try {
      return await this.getRequest(options);
    } catch (e) {
      logger.error(e.message);
      return null;
    }
  }

  getData() {
    return this.bikesData || this.loadData();
  }

  getRequest(options) {
    logger.info('Attempting to download the data');
    return new Promise((resolve, reject) => {
      const req = https.request(options, (res) => {
        let dataChunk = '';
        res.setEncoding('utf8');
        res.on('data', (partialData) => {
          dataChunk += partialData;
        });
        res.on('end', () => {
          resolve(JSON.parse(dataChunk));
          logger.info('Dublin Bikes dataset loaded successfully!');
        });
      });

      req.on('error', (error) => {
        reject(new Error('Unable to load the dataset.'));
        logger.error('Error loading dataset!', error);
      });
      req.end();
    });
  }
}

module.exports = new DublinBikesLoader().getData();
