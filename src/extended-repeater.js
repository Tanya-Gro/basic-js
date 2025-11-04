const { NotImplementedError } = require('../lib');

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

function repeater( str, options = {} ) {
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  const addition = options.hasOwnProperty('addition') ? String(options.addition) : '';
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';

  const repeatItem = (item, times, separator) => new Array(times).fill(item).join(separator);
  
  const additionStr = !addition 
    ? '' 
    : repeatItem(
      addition, 
      additionRepeatTimes, 
      additionSeparator
    );

  return repeatItem(
    String(str) + additionStr,
    repeatTimes, 
    separator
  );
}

module.exports = {
  repeater
};
