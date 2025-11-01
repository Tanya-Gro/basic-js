const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
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
    let depth = 1;
    arr.filter((item) => Array.isArray(item)).map((item)=> depth = Math.max(this.calculateDepth(item) + 1, depth));
    return depth;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
