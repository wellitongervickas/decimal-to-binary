const { multiply, sum, mathMod } = require("ramda");

const decimalToBinary = (decimal) => {
  if (!decimal) return 0;

  return sum([
    mathMod(decimal, 2),
    multiply(10, decimalToBinary(parseInt(decimal / 2))),
  ]);
};

module.exports = decimalToBinary;
