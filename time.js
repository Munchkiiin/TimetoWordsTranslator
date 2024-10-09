let currentInput = "";

function pressDigit(key) {
    if (currentInput.length < 4) {
        currentInput += key;
        updateDisplayWithColon();
    }
}

function clearDisplay() {
    currentInput = "";
    document.getElementById('timeinput').value = "";
}

function updateDisplayWithColon() {
    if (currentInput.length >= 2) {
        let displayValue = currentInput.slice(0, 2) + ":" + currentInput.slice(2);
        document.getElementById('timeinput').value = displayValue;
    } else {
        document.getElementById('timeinput').value = currentInput;
    }
}

function translateTimeToWords() {
    if (currentInput.length !== 4) {
        alert("Please enter a valid 4-digit time in HHMM format.");
        return;
    }

    let hoursString = currentInput[0] + currentInput[1]; 
    let minutesString = currentInput[2] + currentInput[3]; 

    let hours = (hoursString[0] - '0') * 10 + (hoursString[1] - '0');
    let minutes = (minutesString[0] - '0') * 10 + (minutesString[1] - '0');

    if (hours === 24 && minutes === 0) {
        document.getElementById('timeinput').value = "Twenty-Four O'clock";
        return;
    }

    if (hours > 23 || minutes > 59) {
        alert("Invalid time. Please enter a valid time between 0000 and 2400.");
        clearDisplay();
        return;
    }
    
    let hourWords = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty", "Twenty-one", "Twenty-two", "Twenty-three", "Twenty-four"];
    let minuteWords = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty", "Twenty-one", "Twenty-two", "Twenty-three", "Twenty-four", "Twenty-five", "Twenty-six", "Twenty-seven", "Twenty-eight", "Twenty-nine", "Thirty", "Thirty-one", "Thirty-two", "Thirty-three", "Thirty-four", "Thirty-five", "Thirty-six", "Thirty-seven", "Thirty-eight", "Thirty-nine", "Forty", "Forty-one", "Forty-two", "Forty-three", "Forty-four", "Forty-five", "Forty-six", "Forty-seven", "Forty-eight", "Forty-nine", "Fifty", "Fifty-one", "Fifty-two", "Fifty-three", "Fifty-four", "Fifty-five", "Fifty-six", "Fifty-seven", "Fifty-eight", "Fifty-nine"];

    let timeInWords;
    if (hours === 24 && minutes === 0) {
        timeInWords = "Twenty-Four O'clock";
    } else {
        let hoursInWords = hourWords[hours];
        let minutesInWords = (minutes === 0) ? "O'clock" : minuteWords[minutes];
        timeInWords = hoursInWords + " " + minutesInWords;
    }

    document.getElementById('timeinput').value = timeInWords;
}
