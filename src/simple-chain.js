const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainArray: [],
  getLength() {
    return this.chainArray.length;
  },
  addLink(value = '') {
    this.chainArray.push(value);
    return this;
  },
  removeLink(position) {
    if (position < 0 || position > this.chainArray.length - 1 && !(typeof position === 'number') && position % 1 !== 0) {
      this.chainArray = [];
      throw new Error;
    }
    this.chainArray.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chainArray = this.chainArray.reverse();
    return this;
  },
  finishChain() {
    const result = this.chainArray.map((item) => `( ${item} )`).join('~~');
    this.chainArray = [];
    return result;
  }
};

module.exports = chainMaker;
