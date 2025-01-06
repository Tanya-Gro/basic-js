const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let summa = n.toString().split('').reduce((sum, item) => sum + Number(item), 0);
  if (summa < 10) return summa;
  else return getSumOfDigits(summa);
}

module.exports = {
  getSumOfDigits
};
