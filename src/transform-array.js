const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
	if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
	let out = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === '--discard-next') {
			out[i] = 'del';
			i++;
			out[i] = 'del';
		} else if (arr[i] === '--discard-prev') {
			out[i] = 'del';
			if (i > 0) {
				out[i - 1] = 'del';
			}
		} else if (arr[i] === '--double-next') {
			out[i] = arr[i + 1];
		} else if (arr[i] === '--double-prev') {
			out[i] = out[i - 1];
		} else {
			out[i] = arr[i];
		}
	}
	return out.filter((x) => x != 'del').filter((x) => x != undefined);
}

module.exports = {
	transform,
};
