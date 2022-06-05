import Calculator from "./model.js";
import CalculatorDisplay from "./view.js";

let calculator = new Calculator();

const numbers = document.querySelectorAll("[data-button=number]");
const operators = document.querySelectorAll("[data-button=operation]");
const deleteButton = document.querySelector("[data-button=delete]");
const reset = document.querySelector("[data-button=reset]");
const equalButton = document.querySelector("[data-button=equal]");
const resultDisplay = document.querySelector(".result");

function resetCalculator() {
  calculator = new Calculator();
}

function display(value) {
  CalculatorDisplay.displayNumber(value);
}

function setOperators(num1, operator, num2) {
  calculator.setFirstNumber(num1);
  calculator.setOperation(operator);
  calculator.setSecondNumber(num2);
}

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    const num = number.dataset.value;
    display(num);
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    const operationToDo = operator.dataset.operation;
    display(` ${operationToDo} `);
  });
});

equalButton.addEventListener("click", () => {
  const [first, operator, second] = resultDisplay.textContent.split(" ");
  setOperators(first, operator, second);

  const result = calculator.checkOperation();
  CalculatorDisplay.displayResult(result);
});

deleteButton.addEventListener("click", () => {
  if (resultDisplay.textContent == calculator.result) return;
  CalculatorDisplay.pop();
});

reset.addEventListener("click", () => {
  resetCalculator();
  CalculatorDisplay.cleanDisplay();
});
