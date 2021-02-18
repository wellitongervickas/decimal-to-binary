const decimalToBinary = require("./index");
describe("Decimal to binary", () => {
  it("should return a valid binary value when decimal values is valid", () => {
    expect(decimalToBinary(0)).toBe(0);
    expect(decimalToBinary(1)).toBe(1);
    expect(decimalToBinary(2)).toBe(10);
    expect(decimalToBinary(3)).toBe(11);
    expect(decimalToBinary(4)).toBe(100);
    expect(decimalToBinary(5)).toBe(101);
    expect(decimalToBinary(6)).toBe(110);
    expect(decimalToBinary(7)).toBe(111);
    expect(decimalToBinary(8)).toBe(1000);
    expect(decimalToBinary(9)).toBe(1001);
  });

  it("should return zero when decimal value is invalid", () => {
    expect(decimalToBinary()).toBe(0);
    expect(decimalToBinary(null)).toBe(0);
  });
});
