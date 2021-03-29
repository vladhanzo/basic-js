const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = `${str}`;
  if(!('repeatTimes' in options)) {
    options.repeatTimes = 1;
  }
  if(!('separator' in options)) {
    options.separator = '+';
  }
  if(!('addition' in options)) {
    options.addition = '';
  }
  if(!('additionRepeatTimes' in options)) {
    options.additionRepeatTimes = 1;
  }
  if(!('additionSeparator' in options)) {
    options.additionSeparator = '|';
  }
  if(options.repeatTimes === 0) return str;
  const mainRepeatArr = Array.from(new Array(options.repeatTimes), x => str);
  const additionRepeatArr = Array.from(new Array(options.additionRepeatTimes), x => `${options.addition}`);
  const additionText = additionRepeatArr.join(options.additionSeparator);
  return mainRepeatArr.map(elem => `${elem}${additionText}`).join(options.separator);
};
  