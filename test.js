/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */

// declaring filters 
const data = require('./sampleData');
const gt = (a, b) => a > b;
const lt = (a, b) => a < b;
const eq = (a, b) => a === b;
const nt = (a, b) => a !== b;
const filters = {
  gt, lt, eq, nt,
};

// for checking both the operands
const isTruthy = (type, value) => {
  switch (type) {
    case 'INTEGER': return Number.isInteger(value);
    case 'DATE': return Date.parse(value);
    case 'TEXT' || 'OPTIONS': return typeof value === 'string';
    default: return false;
  }
};

// schema
const schema = [
  {
    display: 'id',
    name: 'id',
    type: 'INTEGER',
    options: [],
  },
  {
    display: 'Harvest Time (UTC)',
    name: 'harvestTimeUTC',
    type: 'DATE',
    options: [],
  },
  {
    display: 'Station id',
    name: 'stationId',
    type: 'INTEGER',
    options: [],
  },
  {
    display: 'Available Bike-Stands',
    name: 'availableBikeStands',
    type: 'INTEGER',
    options: [],
  }, {
    display: 'Bike-Stands',
    name: 'bikeStands',
    type: 'INTEGER',
    options: [],
  }, {
    display: 'Available Bikes',
    name: 'availableBikes',
    type: 'INTEGER',
    options: [],
  }, {
    display: 'banking',
    name: 'banking',
    type: 'OPTION',
    options: ['FALSE', 'TRUE'],
  }, {
    display: 'bonus',
    name: 'bonus',
    type: 'BOOLEAN',
    options: ['FALSE', 'TRUE'],
  }, {
    display: 'Last Update',
    name: 'lastUpdate',
    type: 'DATE',
    options: [],
  }, {
    display: 'status',
    name: 'status',
    type: 'OPTION',
    options: ['OPEN', 'CLOSED'],
  }, {
    display: 'Address',
    name: 'address',
    type: 'TEXT',
    options: [],
  },
  {
    display: 'name',
    name: 'name',
    type: 'TEXT',
    options: [],
  }, {
    display: 'latitude',
    name: 'latitude',
    type: 'TEXT',
    options: [],
  },
  {
    display: 'longitude',
    name: 'longitude',
    type: 'TEXT',
    options: [],
  },
];



const buildFiltersArray = () => {
  const filterObject = {
    Address: { eq: 'Blessington Street'},
    status: { eq: 'OPEN' },
  };
  return Object.keys(filterObject).flatMap((fieldName) => {
    return Object.keys(filterObject[fieldName]).map((operator) => {
      // eslint-disable-next-line max-len
      return (dataObject) => filters[operator](dataObject[fieldName], filterObject[fieldName][operator]);
    });
  });
};

const filtersArray = buildFiltersArray();
const checkIfDataValid = (operatorArray, bike) => {
  let isDataValid = true;
  operatorArray.forEach((op) => {
    if (op(bike) && isDataValid) {
      isDataValid = false;
    }
  });
  return isDataValid;
};
const filterData = (dataObject) => {
  dataObject.forEach((bike) => {
    if (checkIfDataValid(filtersArray, bike)) {
      console.log(bike);
    }
  });
};

filterData(data);
