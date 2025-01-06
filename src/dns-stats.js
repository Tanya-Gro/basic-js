const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const stats = [];
  const result = {};
  domains.forEach((item) => stats.push(item.split('.').reverse()));
  let maxLength = 0;
  stats.forEach((item) => {
    if (item.length > maxLength) maxLength = item.length;
  })
  // console.log(stats, maxLength);
  let count, path, field;
  path = '';
  for (let i = 0; i < maxLength; i += 1) {
    count = 0;
    field = '';
    for (let j = 0; j < stats.length; j += 1) {
      if (stats[j][i]) {
        field = path + '.' + stats[j][i];
        if(result.hasOwnProperty(field))
          result[field] += 1;
        else result[field] = 1;
      }
    }
    path = field;
  }
  return result;
}
// console.log(getDNSStats(['code.yandex.ru', 'music.yandex.ru', 'yandex.ru']))

module.exports = {
  getDNSStats
};
