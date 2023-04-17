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
	return domains.reduce((prev, item) => {
		let arr = item.split('.');
		let s = [];
		for (let i = arr.length - 1; i >= 0; i--) {
			s.push('.' + arr[i]);
			let p = s.join('');
			if (prev[p] === undefined) {
				prev[p] = 1;
			} else {
				prev[p] += 1;
			}
		}
		return prev;
	}, {});
}

module.exports = {
	getDNSStats,
};
