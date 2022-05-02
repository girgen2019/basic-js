const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr) {
  let totality = arr;
  let item = 0;

  let filterItems = totality.filter((items) => items !== -1);
  let sortItems = filterItems.sort((a, b) => a - b);
  
  for (let i = 0; i < totality.length; i++) {
    if (totality[i] !== -1) {
      totality[i] = sortItems[item];
      item++;
    }
  }
  return totality;
}

module.exports = {
  sortByHeight
};
