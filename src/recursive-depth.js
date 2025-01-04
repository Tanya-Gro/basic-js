const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth( arr ) {
    let dipth = 1;
    arr.filter((item) => Array.isArray(item)).map((item)=> dipth = Math.max(this.calculateDepth(item) + 1, dipth));
    return dipth;
  }
}
// const depthCalc = new DepthCalculator();
// console.log(depthCalc.calculateDepth([[[]]]))
module.exports = {
  DepthCalculator
};
