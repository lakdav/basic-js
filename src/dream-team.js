const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
	if (!Array.isArray(members)) {
		return false;
	}
	const m = [];
	members.forEach((x) => {
		if (typeof x === 'string') {
			m.push(x.trim().slice(0, 1).toUpperCase());
		}
	});
	m.sort();
	return m.join('');
}

module.exports = {
	createDreamTeam,
};
