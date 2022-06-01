class Calculator {
  constructor() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.result = 0;
  }

  add(num1, num2) {
    if (typeof num1 === "string" || typeof num2 === "string") return;

    this.firstNumber = num1;
    this.secondNumber = num2;

    this.result = num1 + num2;
  }
}

module.exports = Calculator;
