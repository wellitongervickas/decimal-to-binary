const { multiply, sum, mathMod } = require("ramda");

describe("Decimal to binary", () => {
  const findBinary = (decimal) => {
    if (!decimal) return 0;

    return sum([
      mathMod(decimal, 2),
      multiply(10, findBinary(parseInt(decimal / 2))),
    ]);
  };

  it("should return a valid binary value when decimal values is valid", () => {
    expect(findBinary(0)).toBe(0);
    expect(findBinary(1)).toBe(1);
    expect(findBinary(2)).toBe(10);
    expect(findBinary(3)).toBe(11);
    expect(findBinary(4)).toBe(100);
    expect(findBinary(5)).toBe(101);
    expect(findBinary(6)).toBe(110);
    expect(findBinary(7)).toBe(111);
    expect(findBinary(8)).toBe(1000);
    expect(findBinary(9)).toBe(1001);
  });

  it("should return zero when decimal value is invalid", () => {
    expect(findBinary()).toBe(0);
    expect(findBinary(null)).toBe(0);
  });
});
