const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (typeof str === 'boolean' || typeof str === null) str = String(str);
  if (typeof options.addition  === 'boolean' || options.addition  === null) options.addition = String(options.addition);
  if (!options.additionSeparator) options.additionSeparator = '|';

  return repeatItem(!!options.addition 
    ? str + repeatItem(options.addition, 
        options.additionRepeatTimes, 
        options.additionSeparator) 
    : str,
    options.repeatTimes, 
    options.separator);
}
function repeatItem(item, times = 1, separator = '+') {
  return new Array(times)
    .fill(item)
    .join(separator);
}

module.exports = {
  repeater
};
