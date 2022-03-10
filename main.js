let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));


let main = document.querySelector(".main")
let output = document.querySelector(".output")
let buttonGroup = document.querySelector(".buttonGroup");
let butt = document.querySelector(".button");
let equals = document.getElementById("equals");


// Toggle Themes Functionality

(() => {
  themeOne()
})();

function themeOne() {
    main.classList.add("oneBg");
    output.classList.add("oneScreen")
    buttonGroup.classList.add("oneScreen")
    butt.classList.add("oneKeyGrOrange")
    equals.classList.add("oneKeyBgRed", "oneKeyShadowRed")

}



function themeTwo() {
    buttonGroup.classList.remove("purple", "orange");
    buttonGroup.classList.add("black");
}

function themeThree() {
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