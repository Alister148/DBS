/* eslint-disable class-methods-use-this */
/* eslint-disable linebreak-style */
/* eslint-disable-next-line max-len */

const filterConstructor = require('./filterConstructor');

class Filter {
  filtersArray = null;

  dataSet = null;

  filterdData = [];

  /** *
   * @param query
   *  {
  *    "status": { "eq": "CLOSED" }
  *    "id": {"eq":44433615}
  *    }
   * @param data
   *
   * Array<DublinBikeDataset>
   */
  constructor(query, data) {
    this.filtersArray = filterConstructor(query);
    this.dataSet = data;
  }

  /**
 * this method will iterate through the filterArray and
 * validate dataObject.
 * For example
 *
 * @param filterArray
 * [fn(dataObject) => FILTERS['eq'] (dataObject['status'],filterQuery['status']['eq']),
* fn(dataObject) => FILTERS['id'] (dataObject['id'],filterQuery['status']['id'])];
 *
 * @param bike
 *  {
*    "id": 44433611,
*      "Harvest Time (UTC)": null,
*     "Station id": 2,
*    "Available Bike-Stands": 15,
*    "Bike-Stands": 20,
*    "Available Bikes": 5,
*    "banking": "FALSE",
*    "bonus": false,
*    "Last Update": "2021-12-13T16:54:04",
*    "status": "OPEN",
 *    "Address": "Blessington Street",
 *    "name": "BLESSINGTON STREET",
 *    "latitude": null,
 *    "longitude": null
 *  }
 *
 * @returns boolean
 *
 *
 *
 */
  checkDataIsValid(filterArray, bike) {
    let isDataValid = true;
    filterArray.forEach((op) => {
      if (!op(bike)) {
        isDataValid = false;
      }
    });
    return isDataValid;
  }

  /**
 * this method will pass each data for validation and
 * saves the true data to the object filterdData
 * @returns Array of Filtered Data
 */
  filter() {
    this.dataSet.forEach((bike) => {
      if (this.checkDataIsValid(this.filtersArray, bike)) {
        this.filterdData.push(bike);
      }
    });
    return this.filterdData;
  }
}
module.exports = Filter;
