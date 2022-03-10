let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'))
// Functionality

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'RESET':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = Function('"use strict"; display.innerText')();
                } catch {
                    display.innerText = "Error"
                }
                break;
            case 'DEL':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});