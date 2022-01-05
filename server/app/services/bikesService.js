/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
const dublinBikeDataset = require('../data-loader/dublinBikeLoader');

class BikesService {
  getAllData() {
    return new Promise((resolve) => {
      resolve(dublinBikeDataset);
    });
  }
}
module.exports = new BikesService();
