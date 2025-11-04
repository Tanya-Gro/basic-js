const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  const arr = n.toString().split('');
  const preArr = n.toString().split('');

  let indexPreMinDigit = 0;
  let indexMinDigit = 0;
  
  arr.forEach((item, index) => {
    if (item < arr[indexMinDigit]){
      indexPreMinDigit= indexMinDigit;
      indexMinDigit = index;
    }});

  delete preArr[indexPreMinDigit];
  delete arr[indexMinDigit];
  const num1 = +arr.join('');
  const num2 = +preArr.join('');
  return num1 > num2 ? num1 : num2;
}

module.exports = {
  deleteDigit
};
