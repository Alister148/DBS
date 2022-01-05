/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable-next-line max-len */
const filters = require('./operators');

// module.exports = (filterQuery) => Object.keys(filterQuery).flatMap((fieldName) => Object.keys(filterQuery[fieldName]).map((operator) =>
// (dataObject) => filters[operator](dataObject[fieldName], filterQuery[fieldName][operator])));

module.exports = (filterQuery) => {
    return Object.keys(filterQuery).flatMap((fieldName) => {
      return Object.keys(filterQuery[fieldName]).map((operator) => {
        // eslint-disable-next-line max-len
        return (dataObject) => {
            // console.log(dataObject[fieldName],filterQuery[fieldName][operator]);
            filters[operator](dataObject[fieldName], filterQuery[fieldName][operator])
        };
      });
    });
  };
  