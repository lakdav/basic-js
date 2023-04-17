const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
const seasons = {
	0: 'winter',
	1: 'winter',
	2: 'spring',
	3: 'spring',
	4: 'spring',
	5: 'summer',
	6: 'summer',
	7: 'summer',
	8: 'autumn',
	9: 'autumn',
	10: 'autumn',
	11: 'winter',
};

function getSeason(date) {
	if (!date) {
		return 'Unable to determine the time of year!';
	}
	if (date instanceof Date && date[Symbol.toStringTag] === new Date()[Symbol.toStringTag]) {
		return seasons[date.getMonth()];
	} else {
		throw new Error('Invalid date!');
	}
}
module.exports = {
	getSeason,
};
