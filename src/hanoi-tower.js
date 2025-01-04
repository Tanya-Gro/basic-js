const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed, turns = 0) {
  if (disksNumber === 1) return {turns : turns + 1, seconds: Math.floor(3600 * (turns + 1) / turnsSpeed)};
  else return calculateHanoi(disksNumber - 1, turnsSpeed, turns + 2 ** (disksNumber - 1));
}

module.exports = {
  calculateHanoi
};
