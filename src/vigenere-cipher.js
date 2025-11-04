const { NotImplementedError } = require('../lib');

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
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  }

  encrypt(message, key) {
    this.checkIncomingData(arguments);
    
    let result = '';
    let lengthMoving = 0;
    message = message.toUpperCase();
    
    for (let i = 0; i < message.length; i += 1) {
      if (this.alphabet.includes(message[i])) {
        result += this.getEncryptSymbol(message[i], key[(i - lengthMoving) % key.length].toUpperCase());
      } else {
        result += message[i];
        lengthMoving += 1;
      }}
      
    return this.checkDirection(result);
  }

  decrypt(encryptedMessage, key) {
    this.checkIncomingData(arguments);
    
    let result = '';
    let lengthMoving = 0;
    encryptedMessage = encryptedMessage.toUpperCase();

    for (let i = 0; i < encryptedMessage.length; i += 1) {
      if (this.alphabet.includes(encryptedMessage[i])) {
        result += this.getDecryptSymbol(encryptedMessage[i], key[(i - lengthMoving) % key.length].toUpperCase());
      } else {
        result += encryptedMessage[i];
        lengthMoving += 1;
      }}

    return this.checkDirection(result);
  }

  getEncryptSymbol(symbol, keySymbol) {
    let numRow = this.alphabet.indexOf(keySymbol);
    let numCol = this.alphabet.indexOf(symbol);
    let cryptoSymbolId = this.alphabet.indexOf(symbol) + numRow;
    
    if (cryptoSymbolId < 0) {
      cryptoSymbolId =  this.alphabet.length + numCol - 1;
    } else if (cryptoSymbolId >= this.alphabet.length) {
      cryptoSymbolId = cryptoSymbolId - this.alphabet.length;
    }

    return this.alphabet[cryptoSymbolId];
  }

  getDecryptSymbol(symbol, keySymbol) {
    let numRow = this.alphabet.indexOf(keySymbol);
    let numCol = this.alphabet.indexOf(symbol) - numRow;
    
    if (numCol < 0) {
      numCol =  this.alphabet.length + numCol;
    } else if (numCol >= this.alphabet.length) {
      numCol = numCol - this.alphabet.length + 2;
    }

    return this.alphabet[numCol];
  }
  
  checkDirection(message) {
    return this.directMachine ? message : message.split('').reverse().join('');
  }

  checkIncomingData(params) {
    if (params.length !== 2 || typeof params[0] !== 'string' || typeof params[1] !== 'string') {
      throw new Error('Incorrect arguments!');
    }
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
