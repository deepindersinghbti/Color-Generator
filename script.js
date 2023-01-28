//Fetch the HTML sliders in the document
var redSlider = document.getElementById("redRange");
var greenSlider = document.getElementById("greenRange");
var blueSlider = document.getElementById("blueRange");

function updateColor() {
    //Combine the values of red, green and blue into one single variable in rgb(r,g,b) format
    var generatedColor = "rgb(" + redSlider.value + "," + greenSlider.value + "," + blueSlider.value + ")"

    //Update the color of the preview box as the sliders are moved
    let item = document.querySelector('div');
    item.style.setProperty('background-color', generatedColor);

    //Display the value of each color in the bottom cell of each column
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
