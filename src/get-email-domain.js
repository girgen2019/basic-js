const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
 function getEmailDomain(email) {
  let prepositionEmail = email.split('@')
  let prepositionEmail1 = prepositionEmail.length-1
  return prepositionEmail[prepositionEmail1]
  
    }

module.exports = {
  getEmailDomain
};
