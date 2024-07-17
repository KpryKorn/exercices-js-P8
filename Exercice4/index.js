const myButton = document.getElementById("myButton");
const paragraph = document.createElement("p");

myButton.addEventListener("click", () => {
  myButton.appendChild(paragraph);
  paragraph.innerHTML = "Bonjour, vous avez cliqué sur le bouton !";
});
