class Calculator {
  constructor() {
    this.firstNumber;
    this.secondNumber;
    this.operation;
    this.result;
  }

  _convertToNumbers(...nums) {
    return nums.map((num) => +num);
  }

  setFirstNumber(num) {}

  setSecondNumber() {}

  setOperation() {}

  add(num1, num2) {
    this._convertToNumbers(num1, num2);

    this.result ? (this.result += num2) : (this.result = num1 + num2);
  }

  sub(num1, num2) {
    this._convertToNumbers(num1, num2);

    this.result ? (this.result -= num2) : (this.result = num1 - num2);
  }
}

module.exports = Calculator;
