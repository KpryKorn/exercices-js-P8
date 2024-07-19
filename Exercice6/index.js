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
  display.value = eval(display.value);
};
