const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)) throw Error ("'arr' parameter must be an instance of the Array!");

  let result = [...arr];
  let flag = false;
  for(let i = 0; i < result.length; i += 1){
    if (result[i] === '--double-next' || result[i] === '--double-prev' || result[i] === '--discard-next' || result[i] === '--discard-prev') {
      if (flag === true) result.splice(i, 1);
      else {
        switch(result[i]) {
          case '--double-next':
            i !== result.length - 1 ? result.splice(i, 1, arr[i + 1]) : result.pop();
            i++;
            break;
          case '--double-prev':
            i !== 0 ? result.splice(i, 1, arr[i - 1]) : result.shift();
            break;
          case '--discard-next':
            i !== result.length - 1 ? result.splice(i, 2) : result.pop();
            i-=2;
            flag = true;
            break;
          case '--discard-prev':
            i !== 0 ? result.splice(i - 1, 2) : result.shift(); 
            i -= 1 ;
            break;
          }
      }
    }
  }
  return result;
}
console.log(transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]))
// output: [1, 2, 3, 4, 5]

module.exports = {
  transform
};
