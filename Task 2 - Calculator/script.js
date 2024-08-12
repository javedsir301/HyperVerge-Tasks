const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
let output = "";

const evaluateExpression = (expression) => {
  try {
    let processedOutput = expression.replace("%", "/100");
    const result = new Function('return ' + processedOutput)();
  
    if (isNaN(result)) {
      throw new Error("Invalid result");
    }
    return result;
  } catch (error) {
    return "Error";
  }
};

const calculate = (btnValue) => {
  display.focus();

  if (btnValue === "=") {
    output = evaluateExpression(output);
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    output = output.slice(0, -1);
  } else {
    if (output === "" && ["%", "*", "/", "-", "+", "="].includes(btnValue)) return;
    output += btnValue;
  }

  display.value = output;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
