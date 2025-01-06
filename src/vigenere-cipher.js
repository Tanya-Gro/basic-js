const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (param = true) {
    this.directMachine = param;
  }
  alpthabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  encrypt(message, key) {
    if (arguments.length !== 2 || typeof arguments[0] !== 'string' || typeof arguments[1] !== 'string') throw new Error('Incorrect arguments!');
    let result = '';
    let lengthMoving = 0;
    for (let i = 0; i < message.length; i +=1) {
      if (this.alpthabet.includes(message[i].toUpperCase())) {
        result += this.getCryptoSymbol(message[i].toUpperCase(), key[(i - lengthMoving) % key.length].toUpperCase());
      } else {
        result += message[i];
        lengthMoving += 1;
      }}
    if (!this.directMachine) {
      return result.split('').reverse().join('');
    }
    return result;
  }
  decrypt(encryptedMessage, key ) {
    if (arguments.length !== 2 || typeof arguments[0] !== 'string' || typeof arguments[1] !== 'string') throw new Error('Incorrect arguments!');
    
    let result = '';
    let lengthMoving = 0;

    for (let i = 0; i < encryptedMessage.length; i += 1)
      if (this.alpthabet.includes(encryptedMessage[i].toUpperCase())) {
        result += this.getDeсryptoSymbol(encryptedMessage[i].toUpperCase(), key[(i - lengthMoving) % key.length].toUpperCase());
      } else {
        result += encryptedMessage[i];
        lengthMoving += 1;
      }
    if (!this.directMachine) {
      return result.split('').reverse().join('');
    }
    return result;
  }
  // возвращает символ из таблицы Виженера
  getCryptoSymbol(symbol, keySymbol) {
    let numRow = this.alpthabet.indexOf(keySymbol);
    let numCol = this.alpthabet.indexOf(symbol);
    let cryptoSymbolId;

    cryptoSymbolId = numCol + numRow;
    
    if (cryptoSymbolId < 0) {
      cryptoSymbolId =  this.alpthabet.length + numCol - 1;
    } else if (cryptoSymbolId >= this.alpthabet.length) {
      cryptoSymbolId = cryptoSymbolId - this.alpthabet.length;
    }
    // console.log(this.alpthabet[cryptoSymbolId])
    return this.alpthabet[cryptoSymbolId].toUpperCase();
  }

  // возвращает зашифрованный символ по таблицы Виженера
  getDeсryptoSymbol(symbol, keySymbol) {
    let numRow = this.alpthabet.indexOf(keySymbol);
    let cryptoSymbolId = this.alpthabet.indexOf(symbol);
    let numCol;
    numCol = cryptoSymbolId - numRow;
    
    // console.log(numRow, numCol, cryptoSymbolId, this.directMachine)
    if (numCol < 0) {
      numCol =  this.alpthabet.length + numCol;
    } else if (numCol >= this.alpthabet.length) {
      numCol = numCol - this.alpthabet.length + 2;
    }

    // console.log('---------', numRow, numCol, cryptoSymbolId, this.alpthabet[numCol])
    return this.alpthabet[numCol].toUpperCase();
  }
}

// const directMachine = new VigenereCipheringMachine();

// const reverseMachine = new VigenereCipheringMachine(false);

// console.log(directMachine.encrypt('attack at dawn!', 'alphonse')==='AEIHQX SX DLLU!'); 
// //=> 

// console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse')==='ATTACK AT DAWN!'); 
// //=> 

// console.log(reverseMachine.encrypt('attack at dawn!', 'alphonse')==='!ULLD XS XQHIEA'); //=> 

// console.log(reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse')==='!NWAD TA KCATTA'); //=> 

module.exports = {
  VigenereCipheringMachine
};
