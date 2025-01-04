const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value = '') {
    this.chain.push(`( ${value} )~~`);
    return this;
  },
  removeLink(position) {
    if(!Number.isInteger(position) || !this.chain[position-1]) {
      // console.log(this.chain[position-1]);
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
  }
};
// console.log(chainMaker.addLink(false).reverseChain().reverseChain().reverseChain().addLink({ 0: 'first', 1: 'second', 'length': 2 }).addLink(1.233).addLink(false).addLink(1).reverseChain().addLink(1).finishChain());
//, '( 1 )~~( false )~~( 1.233 )~~( [object Object] )~~( false )~~( 1 )'

module.exports = {
  chainMaker
};
