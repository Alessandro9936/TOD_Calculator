const Calculator = require("../model");

describe("calculator", () => {
  let testCalculator;
  beforeEach(() => {
    testCalculator = new Calculator();
  });

  describe("add ()", () => {
    it("adds two numbers", () => {
      const num1 = 10;
      const num2 = 20;
      const resultTest = num1 + num2;

      testCalculator.add(num1, num2);

      expect(testCalculator.result).toBe(resultTest);
    });

    it("return if arguments are strings", () => {
      const num1 = 10;
      const num2 = "20";

      expect(testCalculator.add(num1, num2)).toBe(undefined);
    });

    it("result is defined, add number to result", () => {
      testCalculator.result = 30;
      const num1 = 20;
      const num2 = 50;

      testCalculator.add(num1, num2);

      expect(testCalculator.result).toBe(80);
    });
  });
});
