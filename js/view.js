class CalculatorDisplay {
  parentElement = document.querySelector(".result");
  constructor() {
    this.display = "";
  }

  displayNumber(number) {
    this.parentElement.textContent = this.display += number;
  }
}

export default new CalculatorDisplay();
