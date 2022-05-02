const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
   let summer = [5,6,7];
   let spring = [2,3,4];
   let winter = [11,0,1];
   let autumn = [8,9,10]

  if (!date) return 'Unable to determine the time of year!';
  if (date.hasOwnProperty('toString') || isNaN(Date.parse(date))) throw new Error('Invalid date!');

  let getDate = date.getMonth();
  if(winter.includes(getDate)){
    return "winter";
  } else if (spring.includes(getDate)) {
    return "spring";
  } else if (summer.includes(getDate)) {
    return "summer";
  } else if(autumn.includes(getDate)) {
    return "autumn";
  }
}

module.exports = {
  getSeason
};
