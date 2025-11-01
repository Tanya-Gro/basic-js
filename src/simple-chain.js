const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink( value ) {
    this.chain.push(`( ${value} )~~`);
    return this;
  },
  removeLink( position ) {
    if(!Number.isInteger(position) || !this.chain[position-1]) {
      this.chain = [];
      throw Error("You can't remove incorrect link!");
    }
    this.chain.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    this.chain[this.chain.length - 1] = this.chain[this.chain.length - 1].replace('~~', '');
    const result = this.chain.join('');
    this.chain = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};
