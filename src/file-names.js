const { NotImplementedError } = require('../lib');

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

function renameFiles( names ) {
  const uniqNames = {};
  const result = [];
  let count = 0;

  names.forEach(name => {
    if (uniqNames.hasOwnProperty(name)) {
      count = uniqNames[name] + 1;
      while(uniqNames.hasOwnProperty(`${name}(${count})`)) {
        count += 1;
      }
      uniqNames[name] = count;
      uniqNames[`${name}(${uniqNames[name]})`] = 0;
      result.push(`${name}(${uniqNames[name]})`);
    } else {
      uniqNames[name] = 0;
      result.push( name);
    }
  });
  
  return result;
}

module.exports = {
  renameFiles
};
