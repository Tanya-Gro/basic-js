const { NotImplementedError } = require('../lib');

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
function getDNSStats( domains ) {
  const result = {};
  let key = '';

  domains.forEach((domain) => {
    const fullDomain = domain.split('.').reverse();
    fullDomain.reduce((stepName, name) => {
      key = `${stepName}.${name}`;
      result.hasOwnProperty(key) 
        ? result[key] += 1
        : result[key] = 1;
      return key;
    }, '');
  })

  return result;
}

module.exports = {
  getDNSStats
};
