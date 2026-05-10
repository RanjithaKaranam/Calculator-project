const display = document.getElementById("display");

// Append Values
function appendValue(value) {
    display.value += value;
}

// Clear Display
function clearDisplay() {
    display.value = "";
}

// Delete Last Character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate Result
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}