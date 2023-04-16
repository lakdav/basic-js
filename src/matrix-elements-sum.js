const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(m) {
	const ml = m.length;
	const l = m[0].length;
	let r = 0;
	for (let i = 0; i < l; i++) {
		for (let j = 0; j < ml; j++) {
			if (m[j][i] !== 0) r += m[j][i];
			else break;
		}
	}
	return r;
}

module.exports = {
	getMatrixElementsSum,
};
