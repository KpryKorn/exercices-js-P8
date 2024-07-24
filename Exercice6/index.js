const appendToDisplay = (value) => {
  const display = document.getElementById("display");
  console.log(display);
  display.value += value;
};

const clearDisplay = () => {
  const display = document.getElementById("display");
  display.value = "";
};

const calculateResult = () => {
  const display = document.getElementById("display");

  if (/\/0/.test(display.value)) {
    display.value = "Division by zero is not allowed";
    return;
  }

  display.value = eval(display.value);
};
