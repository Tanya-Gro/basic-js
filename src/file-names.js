const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const indexes = new Array(names.length).fill(0);
  const result = [];
  if (names[0]) result.push(names[0]);

  const growIndexes = function (item) {
    for(let i = 0; i < names.length; i ++)
      if (names[i] === item)
        indexes[i] += 1;
  }

  for(let i = 1; i < names.length; i ++){
    let fileName = names[i];
    if ((names.includes(names[i]) && names.indexOf(names[i]) < i) || result.includes(names[i])){
      growIndexes(names[i]);
      fileName = `${names[i]}(${indexes[i]})`;
    }
    result.push(fileName);
  }
return result;
}

module.exports = {
  renameFiles
};
