import Calculator from "./model.js";
import CalculatorDisplay from "./view.js";

const calculator = new Calculator();

const numbers = document.querySelectorAll("[data-button=number]");
const operators = document.querySelectorAll("[data-button=operation]");
const deleteButton = document.querySelector("[data-button=delete]");
const reset = document.querySelector("[data-button=reset]");
const equalButton = document.querySelector("[data-button=equal]");
const resultDisplay = document.querySelector(".result");

function display(value) {
  CalculatorDisplay.displayNumber(value);
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
    if (calculator.calc) return;
    calculator.setOperation(operationToDo);
    display(` ${operationToDo} `);
  });
});

equalButton.addEventListener("click", () => {
  const [first, , second] = resultDisplay.textContent.split(" ");
  calculator.setFirstNumber(first);
  calculator.setSecondNumber(second);

  const result = calculator.checkOperation();
  console.log(result);
});
