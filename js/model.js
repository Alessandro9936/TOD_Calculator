class Calculator {
  constructor() {
    this.result;
  }

  add(num1, num2) {
    if (typeof num1 === "string" || typeof num2 === "string") return;

    this.result ? (this.result += num2) : (this.result = num1 + num2);
  }
}

module.exports = Calculator;
