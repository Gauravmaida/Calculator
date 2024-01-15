function clearDisplay() {
    document.getElementById("display").value = "";
}

function appendCharacter(char) {
    document.getElementById("display").value += char;
}

function calculate() {
    let expression = document.getElementById("display").value;
    let result = eval(expression);
    document.getElementById("display").value = result;
}
