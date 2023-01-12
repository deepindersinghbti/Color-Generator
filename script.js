//Fetch the HTML sliders in the document
var redSlider = document.getElementById("redRange");
var greenSlider = document.getElementById("greenRange");
var blueSlider = document.getElementById("blueRange");

//Combine the values of red, green and blue into one single variable in rgb(r,g,b) format
var generatedColor = "rgb(" + redSlider.value + "," + greenSlider.value + "," + blueSlider.value + ")"

function updateColor() {
    //Combine the values of red, green and blue into one single variable in rgb(r,g,b) format
    var generatedColor = "rgb(" + redSlider.value + "," + greenSlider.value + "," + blueSlider.value + ")"

    //Change the color of the preview box when the slider is moved
    let item = document.querySelector('div');
    item.style.setProperty('background-color', generatedColor);

    //Display the value of each color in the bottom cell of each column
    document.getElementById('redCell').innerHTML = redSlider.value;
    document.getElementById('greenCell').innerHTML = greenSlider.value;
    document.getElementById('blueCell').innerHTML = blueSlider.value;
}

function copyCode() {
    //Copy the color code to clipboard
    navigator.clipboard.writeText(generatedColor);

    //Alert message
    alert("Color code copied to clipboard!");
}