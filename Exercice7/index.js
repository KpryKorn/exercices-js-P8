const binaryResult = document.getElementById("binaryResult");

const convertToBinary = () => {
  const decimalInput = document.getElementById("decimalInput").value;

  if (isNaN(decimalInput) || decimalInput.trim() === "") {
    binaryResult.innerHTML = "";
    return "";
  }

  const result = Number(decimalInput).toString(2);
  binaryResult.innerHTML = result;
  return result;
};
