/* eslint-disable arrow-body-style */
/* eslint-disable semi */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable-next-line max-len */
const FILTERS = require('./operators'); 


/**
* Expected input ex  {
*                     "status": { "eq": "CLOSED" }
*                      "id": {"eq":44433615}
*                    }
*          OUTPUT: [fn(dataObject) => FILTERS['eq'] (dataObject['status'],filterQuery['status']['eq']),
*                    fn(dataObject) => FILTERS['id'] (dataObject['id'],filterQuery['status']['id'])];
*
*OUTPUT 
* ----------
* The method will return an Array of filter functions from FILTERS object
* wrapped with the two operands a -(dataObject[fieldName]) and b(filterQuery[fieldName][operator])
*
* 
*
*The intention behind passing as an array is to iterate the dataObject only one time instead of iterating multiple times
* foreach queries.
*/

module.exports = (filterQuery) => {
  return Object.keys(filterQuery).flatMap((fieldName) => {
    return Object.keys(filterQuery[fieldName]).map((operator) => {
      // eslint-disable-next-line max-len
      return (dataObject) => {
        return FILTERS[operator](dataObject[fieldName], filterQuery[fieldName][operator])
      };
    });
  });
};
