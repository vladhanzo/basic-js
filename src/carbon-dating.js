const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const KF = 0.693 / HALF_LIFE_PERIOD;
  let numStr = parseFloat(sampleActivity),
      total = Math.ceil((Math.log(MODERN_ACTIVITY / numStr)) / KF);

  if(Number.isNaN(numStr) || (typeof sampleActivity !== 'string') || (numStr <= 0 || numStr > 15) ){
    return false
  }

  return total;
};
