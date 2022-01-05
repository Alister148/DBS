/* eslint-disable linebreak-style */
module.exports = (type, value) => {
  switch (type) {
    case 'INTEGER': return Number.isInteger(value);
    case 'DATE': return Date.parse(value);
    case 'TEXT' || 'OPTIONS': return typeof value === 'string';
    default: return false;
  }
};
