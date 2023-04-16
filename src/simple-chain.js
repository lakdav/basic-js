const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
	items: [],
	getLength() {
		return this.items.length;
	},
	addLink(value) {
		if (this.isFinished) {
			throw new Error('');
		}
		this.items.push(`( ${value} )`);
		return this;
	},
	removeLink(position) {
		let i = position - 1;
		if (i >= 0 && i < this.items.length) {
			this.items.splice(i, 1);
			return this;
		} else {
			this.items = [];
			throw new Error("You can't remove incorrect link!");
		}
	},
	reverseChain() {
		this.strArr = this.items.reverse();
		return this;
	},
	finishChain() {
		const $ = this.strArr.join('~~');
		this.items = [];
		return $;
	},
};

module.exports = {
	chainMaker,
};
