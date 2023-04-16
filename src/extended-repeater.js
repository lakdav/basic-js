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
	str = str + '';
	let arr = [];

	if (options) {
		const {
			repeatTimes = 1,
			separator = '+',
			additionRepeatTimes: addRepT = 1,
			additionSeparator: addSep = '|',
			addition = '',
		} = options;

		let s = str + (addition + '' ? addition + addSep : '').repeat(addRepT);
		if (addition + '') {
			s = s.slice(0, s.length - addSep.length);
		}

		for (let i = 0; i < repeatTimes; i++) {
			arr.push(s);
		}
		return arr.join(separator);
	}
}

module.exports = {
	repeater,
};
