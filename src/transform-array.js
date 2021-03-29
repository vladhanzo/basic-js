const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }
  else {
    let transformArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== '--discard-next'
          && arr[i] !== '--discard-prev'
          && arr[i] !==  '--double-next'
          && arr[i] !==  '--double-prev'
          && arr[i-1] !== '--discard-next') {
        transformArr.push(arr[i]);
        continue;
      }
      if (arr[i] === '--double-next' && arr[i+1] !== undefined) {
        transformArr.push(arr[i+1]);
      }
      if (arr[i] === '--double-prev' && arr[i-1] !== undefined && arr[i-2] !== '--discard-next') {
        transformArr.push(arr[i-1]);
      }
      if (arr[i] === '--discard-next' && arr[i+1] !== undefined)  {
        i++;
      }
      if (arr[i] === '--discard-prev' && arr[i-1] !== undefined && arr[i-2] !== '--discard-next') {
        transformArr.pop();
      }
    }
    return transformArr;
  }
};
