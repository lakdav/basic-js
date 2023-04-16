const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

function sortByHeight(arr) {
	let s = arr.filter((el) => el >= 0).sort((a, b) => a - b);
	let p = [];
	const l = arr.length;
	for (let i = 0; i < l; i++) {
		if (arr[i] < 0) p.push(i);
	}
	for (let i = 0; i < p.length; i++) {
		s.splice(p[i], 0, -1);
	}
	return s;
}
console.log(sortByHeight([23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3])),
	// [1, 3, -1, 23, 43, -1, -1, 54, -1, -1, -1, 77],
	(module.exports = {
		sortByHeight,
	});
