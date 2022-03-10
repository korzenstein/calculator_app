let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));

let radios = Array.from(document.getElementsByClassName("radio"));
let buttonGroup = document.querySelector(".buttonGroup");

// Toggle Themes Functionality

(() => {
  purple()
})();

function purple() {
    buttonGroup.classList.remove("orange", "black");
    buttonGroup.classList.add("purple");
}

function black() {
    buttonGroup.classList.remove("purple", "orange");
    buttonGroup.classList.add("black");
}

function orange() {
    buttonGroup.classList.remove("purple", "black");
    buttonGroup.classList.add("orange");
}

// radios.forEach((radio) => {
//     radio.addEventListener("click", () => {
//         return(radio.id === 1 ? buttonGroup.classList.add("purple") : console.log(radio.id))
//     })
// })

// Calc Functionality

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "RESET":
        display.innerText = "";
        break;
      case "=":
        try {
          display.innerText = Function('"use strict"; display.innerText')();
        } catch {
          display.innerText = "Error";
        }
        break;
      case "DEL":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});