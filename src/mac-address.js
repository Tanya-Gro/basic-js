const { NotImplementedError } = require('../lib');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address( n ) {
  if (n.split('-').length !== 6) {
    return false;
  }

  let arr = n.split('-');
  let invalidCode;
  let invalidArr = [];

  arr.forEach(element => {
    invalidCode = element
      .split('')
      .filter((item) => 
        (item.charCodeAt() < 48 || (item.charCodeAt() > 57  && item.charCodeAt() < 64) || item.charCodeAt() > 70))
          .join('');
    if (invalidCode) invalidArr.push(invalidCode);
  });

  return invalidArr.length === 0;
}

module.exports = {
  isMAC48Address
};
