const display = document.getElementById("displayscreen");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay(){
    display.value ="";
}
function clearDigit(){
    display.value = display.value.slice(0,-1);
}
function calculate(){
try{
    display.value = eval(display.value);
}
catch{
    display.value = ".Syntax error"
    
}
    
}
