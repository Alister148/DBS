/* eslint-disable class-methods-use-this */
/* eslint-disable linebreak-style */

const filterConstructor = require('./filterConstructor');

class Filter {
  filtersArray = null;

  dataSet = null;

  filterdData = [];

  constructor(query, data) {
    //this method will convert the filter query to array of filter function in the operator.js file
    // ex:{
      //  "where": {
      //   "id": { "eq": 44433632 } --->[(a,b)=>a==b]
      // } 
      // 
}
    this.filtersArray = filterConstructor(query);
    this.dataSet = data;
  }

  checkDataIsValid(filtersArray, data) {
    let isDataValid = false;
    filtersArray.forEach((filter) => {
      if (filter(data) && !isDataValid) {
        isDataValid = true;
      }
    });
    return isDataValid;
  }

  filter() {
    this.dataSet.forEach((data) => {
      if (this.checkDataIsValid(this.filtersArray, data)) {
        this.filterdData.push(data);
      }
    });
    return this.filterdData;
  }
}
module.exports = Filter;
