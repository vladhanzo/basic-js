const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let arr = [];
    for(let mem of members) {
      if (typeof(mem) === "string") {
        arr.push(mem.trim().toUpperCase()[0]);
      }
    }
    return arr.sort().join("")
  }
  return false;
};
