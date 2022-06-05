import Calculator from "../model";

describe("calculator", () => {
  let testCalculator;
  beforeEach(() => {
    testCalculator = new Calculator();
  });

  describe("setNumbers()", () => {
    describe("setFirstNumber ()", () => {
      it("set Calculator.firstNumber to provided number", () => {
        const number = 10;

        testCalculator.setFirstNumber(number);

        expect(testCalculator.firstNumber).toBe(number);
      });

      it("set Calculator.firstNumber to provided string number", () => {
        const number = "10";

        testCalculator.setFirstNumber(number);

        expect(testCalculator.firstNumber).toBe(10);
      });
    });
    describe("setFirstNumber ()", () => {
      it("set Calculator.secondNumber to provided number", () => {
        const number = 10;

        testCalculator.setSecondNumber(number);

        expect(testCalculator.secondNumber).toBe(number);
      });

      it("set Calculator.firstNumber to provided string number", () => {
        const number = "10";

        testCalculator.setSecondNumber(number);

        expect(testCalculator.secondNumber).toBe(10);
      });
    });
    describe("setOperation ()", () => {
      it("set Calculator.calc to provided number", () => {
        const operation = "+";

        testCalculator.setOperation(operation);

        expect(testCalculator.calc).toBe(operation);
      });
    });
  });

  describe("checkOperation ()", () => {
    it("call add id this.calc = +", () => {
      testCalculator.firstNumber = 30;
      testCalculator.secondNumber = 20;
      testCalculator.calc = "+";

      const result = testCalculator.checkOperation();

      expect(result).toBe(50);
    });

    it("call sub id this.calc = -", () => {
      testCalculator.firstNumber = 50;
      testCalculator.secondNumber = 10;
      testCalculator.calc = "-";

      const result = testCalculator.checkOperation();

      expect(result).toBe(40);
    });

    it("call mol id this.calc = *", () => {
      testCalculator.firstNumber = 20;
      testCalculator.secondNumber = 10;
      testCalculator.calc = "*";

      const result = testCalculator.checkOperation();

      expect(result).toBe(200);
    });

    it("call div id this.calc = /", () => {
      testCalculator.firstNumber = 50;
      testCalculator.secondNumber = 10;
      testCalculator.calc = "/";
      testCalculator.result = 0;

      const result = testCalculator.checkOperation();

      expect(result).toBe(5);
    });
  });

  describe("add ()", () => {
    it("adds two numbers", () => {
      testCalculator.firstNumber = 10;
      testCalculator.secondNumber = 20;
      const resultTest =
        testCalculator.firstNumber + testCalculator.secondNumber;

      testCalculator.add();

      expect(testCalculator.result).toBe(resultTest);
    });

    it("result is defined, add number to result", () => {
      testCalculator.result = 30;
      testCalculator.firstNumber = 20;
      testCalculator.secondNumber = 50;

      testCalculator.add();

      expect(testCalculator.result).toBe(80);
    });
  });

  describe("sub ()", () => {
    it("subs two numbers", () => {
      testCalculator.firstNumber = 20;
      testCalculator.secondNumber = 10;
      const resultTest =
        testCalculator.firstNumber - testCalculator.secondNumber;

      testCalculator.sub();

      expect(testCalculator.result).toBe(resultTest);
    });

    it("result is defined, sub number to result", () => {
      testCalculator.result = 80;
      testCalculator.firstNumber = 20;
      testCalculator.secondNumber = 50;

      testCalculator.sub();

      expect(testCalculator.result).toBe(30);
    });
  });

  describe("mol ()", () => {
    it("returns 0 if one addend is 0", () => {
      testCalculator.firstNumber = 20;
      testCalculator.secondNumber = 0;
      const resultTest =
        testCalculator.firstNumber * testCalculator.secondNumber;

      testCalculator.mol();

      expect(testCalculator.result).toBe(0);
    });

    it("mol two numbers", () => {
      testCalculator.firstNumber = 20;
      testCalculator.secondNumber = 10;
      const resultTest =
        testCalculator.firstNumber * testCalculator.secondNumber;

      testCalculator.mol();

      expect(testCalculator.result).toBe(resultTest);
    });

    it("result is defined, mol number to result", () => {
      testCalculator.result = 80;
      testCalculator.firstNumber = 20;
      testCalculator.secondNumber = 50;

      testCalculator.mol();

      expect(testCalculator.result).toBe(4000);
    });
  });

  describe("div ()", () => {
    it("returns 0 if first addend is 0", () => {
      testCalculator.firstNumber = 0;
      testCalculator.secondNumber = 100;
      const resultTest =
        testCalculator.firstNumber / testCalculator.secondNumber;

      testCalculator.div();

      expect(testCalculator.result).toBe(0);
    });

    it("returns Infinity if second addend is 0", () => {
      testCalculator.firstNumber = 100;
      testCalculator.secondNumber = 0;
      const resultTest =
        testCalculator.firstNumber / testCalculator.secondNumber;

      testCalculator.div();

      expect(testCalculator.result).toBe(Infinity);
    });

    it("div two numbers", () => {
      testCalculator.firstNumber = 20;
      testCalculator.secondNumber = 10;
      const resultTest =
        testCalculator.firstNumber / testCalculator.secondNumber;

      testCalculator.div();

      expect(testCalculator.result).toBe(resultTest);
    });

    it("result is defined, div number to result", () => {
      testCalculator.result = 80;
      testCalculator.firstNumber = 20;
      testCalculator.secondNumber = 20;

      testCalculator.div();

      expect(testCalculator.result).toBe(4);
    });
  });
});
