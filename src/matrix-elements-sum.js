const { NotImplementedError } = require('../lib');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum( matrix ) {
  const rows = matrix.length;
  let i;
  return matrix[0].reduce((acc, elem, col) => {
    i = 0;
    while(i < rows && matrix[i][col] !== 0) {
      acc += matrix[i][col];
      i += 1;
    }
    return acc;
  }, 0);
}

module.exports = {
  getMatrixElementsSum
};
