const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isReverse) {
    if (isReverse === false)
      this.Reverse = true;
  }

  encrypt(str, key) {
    if (str === undefined || key === undefined) {
      throw new Error();
    }
    else {
      let codeSymbol = 0;
      let outputStr = '';
      let strUp = str.toUpperCase();
      let keyUp = key.toUpperCase();
      let indexKey = 0;
      for (let i = 0; i < strUp.length; i++) {
        if (strUp.charCodeAt(i) < 65 || strUp.charCodeAt(i) > 90) {
          outputStr += strUp[i];
          continue;
        }
        codeSymbol = (((strUp.charCodeAt(i) + keyUp.charCodeAt(indexKey)) % 26) + 65);
        outputStr += String.fromCharCode(codeSymbol);
        indexKey++;
        if (indexKey === keyUp.length) indexKey = 0;
      }
      if (this.Reverse) {
        return outputStr.split('').reverse().join('');
      }
      else {
        return outputStr;
      }
    }
  }

  decrypt(str, key) {
    if (str === undefined || key === undefined) {
      throw new Error();
    }
    else {
      let codeSymbol = 0;
      let outputStr = '';
      let strUp = str.toUpperCase();
      let keyUp = key.toUpperCase();
      let indexKey = 0;
      for (let i = 0; i < strUp.length; i++) {
        if (strUp.charCodeAt(i) < 65 || strUp.charCodeAt(i) > 90) {
          outputStr += strUp[i];
          continue;
        }
        codeSymbol = (((strUp.charCodeAt(i) + 26 - keyUp.charCodeAt(indexKey)) % 26) + 65);
        outputStr += String.fromCharCode(codeSymbol);
        indexKey++;
        if (indexKey === keyUp.length) indexKey = 0;
      }
      if (this.Reverse) {
        return outputStr.split('').reverse().join('');
      }
      else {
        return outputStr;
      }
    }
  }
}

module.exports = VigenereCipheringMachine;