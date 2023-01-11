//Fetch the HTML sliders in the document
var redSlider = document.getElementById("redRange");
var greenSlider = document.getElementById("greenRange");
var blueSlider = document.getElementById("blueRange");

//Fetch the HTML spans in the document
var redOutput = document.getElementById("redSpan");
redOutput.innerHTML = redSlider.value;

var greenOutput = document.getElementById("greenSpan");
greenOutput.innerHTML = greenSlider.value;

var blueOutput = document.getElementById("blueSpan");
blueOutput.innerHTML = blueSlider.value;

function updateColor() {
    //Combine the values of red, green and blue into one single variable in rgb(r,g,b) format
    var generatedColor = "rgb(" + redSlider.value + "," + greenSlider.value + "," + blueSlider.value + ")"

    //Change the color of the preview box when the slider is moved
    let item = document.querySelector('div');
    item.style.setProperty('background-color', generatedColor);

    // Display the value of each color in the bottom cell of each column
    document.getElementById('redCell').innerHTML = redSlider.value;
    document.getElementById('greenCell').innerHTML = greenSlider.value;
    document.getElementById('blueCell').innerHTML = blueSlider.value;
}

function copyCode() {
    var generatedColor = "rgb(" + redSlider.value + "," + greenSlider.value + "," + blueSlider.value + ")"

    //Copy the color code to clipboard
    navigator.clipboard.writeText(generatedColor);

    //Alert message
    alert("Color code copied to clipboard!");
}

//Update the value of each color in the table span when the slider is moved
function updateRedVal() {
    redSlider.oninput = function () {
        redOutput.innerHTML = this.value;
    }
}

function updateGreenVal() {
    greenSlider.oninput = function () {
        greenOutput.innerHTML = this.value;
    }
}

function updateBlueVal() {
    blueSlider.oninput = function () {
        blueOutput.innerHTML = this.value;
    }
}

