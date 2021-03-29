const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return matrix.reduce((sum, current) => {
    let cats = current.filter(cat => cat === '^^');
    return sum + cats.length;
  }, 0);
};
