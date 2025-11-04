const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine( str ) {
  const arr = str.split('');
  let result = '';
  let count = 1;
  
  for(let i = 1; i < arr.length; i += 1) {
    if(arr[i] === arr[i-1]) count += 1;
    else {
      result += (count === 1) ? arr[i-1] : count.toString() + arr[i-1];
      count = 1;
    }
    if (i === arr.length -1) result += (count === 1) ? arr[i] : count.toString() + arr[i];
  }
  return result;
}

module.exports = {
  encodeLine
};
