const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let maxDep = 1;
    arr.forEach(el => {
      let dep = 1;
      if (Array.isArray(el)) { dep += this.calculateDepth(el); }
      maxDep = Math.max(maxDep, dep);
    });
    return maxDep;
  }
};