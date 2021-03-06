let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));


let main = document.querySelector(".main")
let output = document.querySelector(".output")
let buttonGroup = document.querySelector(".buttonGroup");
let primaryButtons = document.querySelectorAll(".primaryButton");
let secondaryButtons = document.querySelectorAll(".secondaryButton")
let equals = document.querySelector(".equalsButton");

let toggleLables = document.querySelector(".toggleLabels")
let backgrounds = document.querySelectorAll(".backgrounds")
let textA = document.querySelectorAll(".textA")
let radio = document.querySelectorAll('input[name="radio"]')
let toggleBg = document.querySelector(".radioThemes")



let allClasses = [main, output, buttonGroup, primaryButtons, secondaryButtons, equals, textA];
// Toggle Themes Functionality

function themeOne() {
    // Remove Theme Two
    main.classList.remove("twoBgGray")
    output.classList.remove("twoBgLightGray")
    buttonGroup.classList.remove("twoBgRedish")
    primaryButtons.forEach(pb => pb.classList.remove("twoKeysLtYellow", "twoTextDarkGr", "twoKeysDarkGrayOrg"))
    secondaryButtons.forEach(sb => sb.classList.remove("twoKeysModCyan", "twoTextWhite" , "twoKeysDarkCyan"))
    equals.classList.remove("twoKeysOrange", "twoKeysDarkOrg", "twoTextWhite")
    textA.forEach(text => text.classList.remove("twoTextDarkGr"))
    toggleBg.classList.remove("twoBgRedish")
    radio.forEach(rad => rad.classList.remove("twoRadioOrange"))
    // Remove Theme Three
    main.classList.remove("threeVioletMain");
    output.classList.remove("threeVioletToggle")
    buttonGroup.classList.remove("threeVioletToggle")
    primaryButtons.forEach(pb => pb.classList.remove("threeDarkVioletKey", "threeTextYel", "threeMagentaShadow"));
    secondaryButtons.forEach(sb => sb.classList.remove("threeVioletKey", "threeTextWhite" , "threeMagentaShadow"));
    equals.classList.remove("threeCyanKey", "threeCyanShadow", "threeTextBlue")
    textA.forEach(text => text.classList.remove("threeTextYel"))
    toggleBg.classList.remove("threeVioletToggle")
    radio.forEach(rad => rad.classList.remove("threeRadio")) 

    // THEME ONE:
    // Add New Theme
    main.classList.add("oneBg");
    output.classList.add("oneScreen")
    buttonGroup.classList.add("oneScreen")
    toggleBg.classList.add("oneToggle")
        // group classes
    radio.forEach(rad => rad.classList.add("oneRadioRed"))
    primaryButtons.forEach(pb => pb.classList.add("oneKeyGrOrange", "oneTextGrBlue", "oneKeyShadowOrange"))
    secondaryButtons.forEach(sb => sb.classList.add("oneKeyBgBlue", "oneTextWhite" , "oneKeyShadowBlue"))
    equals.classList.add("oneKeyBgRed", "oneKeyShadowRed", "oneTextWhite")
    textA.forEach(text => text.classList.add("oneTextWhite"))
}


function themeTwo() {
      // Remove Theme One
    main.classList.remove("oneBg");
    output.classList.remove("oneScreen")
    buttonGroup.classList.remove("oneScreen")
    primaryButtons.forEach(pb => pb.classList.remove("oneKeyGrOrange", "oneTextGrBlue", "oneKeyShadowOrange"))
    secondaryButtons.forEach(sb => sb.classList.remove("oneKeyBgBlue", "oneTextWhite" , "oneKeyShadowBlue"))
    equals.classList.remove("oneKeyBgRed", "oneKeyShadowRed", "oneTextWhite")
    textA.forEach(text => text.classList.remove("oneTextWhite"))
    toggleBg.classList.remove("oneToggle")
    radio.forEach(rad => rad.classList.remove("oneRadioRed"))
 // Remove Theme Three
    main.classList.remove("threeVioletMain");
    output.classList.remove("threeVioletToggle")
    buttonGroup.classList.remove("threeVioletToggle")
    primaryButtons.forEach(pb => pb.classList.remove("threeDarkVioletKey", "threeTextYel", "threeMagentaShadow"));
    secondaryButtons.forEach(sb => sb.classList.remove("threeVioletKey", "threeTextWhite" , "threeMagentaShadow"));
    equals.classList.remove("threeCyanKey", "threeCyanShadow", "threeTextBlue")
    textA.forEach(text => text.classList.remove("threeTextYel"))
    toggleBg.classList.remove("threeVioletToggle")
    radio.forEach(rad => rad.classList.remove("threeRadio")) 

    // THEME TWO: 
    // Add New Theme
    main.classList.add("twoBgGray")
    output.classList.add("twoBgLightGray")
    buttonGroup.classList.add("twoBgRedish")
    toggleBg.classList.add("twoBgRedish")
        // group classes
    radio.forEach(rad => rad.classList.add("twoRadioOrange"))
    primaryButtons.forEach(pb => pb.classList.add("twoKeysLtYellow", "twoTextDarkGr", "twoKeysDarkGrayOrg"))
    secondaryButtons.forEach(sb => sb.classList.add("twoKeysModCyan", "twoTextWhite" , "twoKeysDarkCyan"))
    equals.classList.add("twoKeysOrange", "twoKeysDarkOrg", "twoTextWhite")
    textA.forEach(text => text.classList.add("twoTextDarkGr"))
}

function themeThree() {
    // Remove Theme One
    main.classList.remove("oneBg");
    output.classList.remove("oneScreen")
    buttonGroup.classList.remove("oneScreen")
    primaryButtons.forEach(pb => pb.classList.remove("oneKeyGrOrange", "oneTextGrBlue", "oneKeyShadowOrange"))
    secondaryButtons.forEach(sb => sb.classList.remove("oneKeyBgBlue", "oneTextWhite" , "oneKeyShadowBlue"))
    equals.classList.remove("oneKeyBgRed", "oneKeyShadowRed", "oneTextWhite")
    textA.forEach(text => text.classList.remove("oneTextWhite"))
    toggleBg.classList.remove("oneToggle")
    radio.forEach(rad => rad.classList.remove("oneRadioRed"))
    // Remove Theme Two
    main.classList.remove("twoBgGray")
    output.classList.remove("twoBgLightGray")
    buttonGroup.classList.remove("twoBgRedish")
    primaryButtons.forEach(pb => pb.classList.remove("twoKeysLtYellow", "twoTextDarkGr", "twoKeysDarkGrayOrg"))
    secondaryButtons.forEach(sb => sb.classList.remove("twoKeysModCyan", "twoTextWhite" , "twoKeysDarkCyan"))
    equals.classList.remove("twoKeysOrange", "twoKeysDarkOrg", "twoTextWhite")
    textA.forEach(text => text.classList.remove("twoTextDarkGr"))
    toggleBg.classList.remove("twoBgRedish")
    radio.forEach(rad => rad.classList.remove("twoRadioOrange"))

    // Add New Theme
    main.classList.add("threeVioletMain");
    output.classList.add("threeVioletToggle")
    buttonGroup.classList.add("threeVioletToggle")
    toggleBg.classList.add("threeVioletToggle")
        // group classes
    radio.forEach(rad => rad.classList.add("threeRadio"))    
    primaryButtons.forEach(pb => pb.classList.add("threeDarkVioletKey", "threeTextYel", "threeMagentaShadow"));
    secondaryButtons.forEach(sb => sb.classList.add("threeVioletKey", "threeTextWhite" , "threeMagentaShadow"));
    equals.classList.add("threeCyanKey", "threeCyanShadow", "threeTextBlue")
    textA.forEach(text => text.classList.add("threeTextYel"))
}

(() => {
  themeOne()
})();

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

// const mutationObserver = new MutationObserver(entries => {
//   console.log(entries)
// })

// mutationObserver.observe(display, { childList: true });

// function keepShort() {
//   return(display.innerHTML.length >= 7 ? console.log('too long') : "")
// }

// keepShort();
