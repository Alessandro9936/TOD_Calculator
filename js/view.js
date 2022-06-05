class CalculatorDisplay {
  parentElement = document.querySelector(".result");
  constructor() {
    this.display = "";
    ("");
  }

  cleanDisplay() {
    this.display = "";
    this.parentElement.textContent = "";
  }

  pop() {
    let poppedString = this.display.slice(0, -1);
    this.parentElement.textContent = this.display = poppedString;
  }

  displayNumber(number) {
    this.parentElement.textContent = this.display += number;
  }

  displayResult(result) {
    this.cleanDisplay();
    this.displayNumber(result);
  }
}

export default new CalculatorDisplay();
