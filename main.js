//Event Listeners
document.addEventListener("DOMContentLoaded", function() {
    generateRGB();
})

document.getElementById("new-colors-button").addEventListener("click", colorSquares);

function generateRGB() {
    var redColor = Math.round(Math.random() * 255);
    var blueColor = Math.round(Math.random() * 255);
    var greenColor = Math.round(Math.random() * 255);
    var RGBString = "RGB(" + redColor + ", " + greenColor + ", " + blueColor + ")";
    var largeHeaderEl = document.querySelector(".header-large");
    largeHeaderEl.textContent = RGBString;
    colorSquares(redColor, greenColor, blueColor);
}

function colorSquares(correctRed, correctGreen, correctBlue) {
    //Get the squares, put them in array
    var squares = document.querySelectorAll(".squares");
    /* for (i = 1; i < 7; i++) {
        squares.push(document.querySelector("#square" + i + "El"));
    } */

    //Get correct square
    var correctSquareSelector = Math.floor(Math.random() * 6);
    console.log("Selector: " + correctSquareSelector);
    var correctSquareElement = squares[correctSquareSelector];
    console.log(squares);
    console.log(correctSquareElement);

    //Color squares
    correctSquareElement.style.background = "RGB(" + correctRed + "," + correctGreen + "," + correctBlue + ")";
    correctSquareElement.classList.add("correctS");
    correctSquareElement.addEventListener("click", correctSquare)
    console.log(squares);
    for (i = 0; i < 6; i++) {
        if (i == correctSquareSelector) { continue; }
        squares[i].addEventListener("click", wrongSquare);
        var quickRandomRed = Math.round(Math.random() * 255);
        var quickRandomGreen = Math.round(Math.random() * 255);
        var quickRandomBlue = Math.round(Math.random() * 255);
        squares[i].style.background = "RGB(" + quickRandomRed + "," + quickRandomGreen + "," + quickRandomBlue + ")";
        squares[i].classList.add("wrongS");
    }
}

function clearResponse() {
    document.getElementById("response-span").textContent = "";
}

function setResponse(message) {
    document.getElementById("response-span").textContent = message;
}

function wrongSquare() {
    alert("You clicked the wrong square.");
}

function correctSquare() {
    alert("You clicked the correct square.");
}