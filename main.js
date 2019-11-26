document.addEventListener("DOMContentLoaded", function() {
    generateRGB();
})

function generateRGB() {
    var redColor = Math.round(Math.random() * 255);
    var blueColor = Math.round(Math.random() * 255);
    var greenColor = Math.round(Math.random() * 255);
    var RGBString = "RGB(" + redColor + ", " + greenColor + ", " + blueColor + ")";
    var largeHeaderEl = document.querySelector(".header-large");
    largeHeaderEl.textContent = RGBString;
    colorSquares(redColor, greenColor, blueColor);
}

function colorSquares(correctRed, correctBlue, correctGreen) {
    //Get the squares, put them in array
    var squares = [];
    for (i = 1; i < 7; i++) {
        squares.push(document.querySelector("#square" + i + "El"));
    }

    //Get correct square
    var correctSquareSelector = Math.random() * 6;
    var correctSquareElement = squares[correctSquareSelector];
    console.log(squares);

    //Color squares
    correctSquareElement.style.background = "RGB(" + correctRed + "," + correctGreen + "," + correctBlue + ")";
    squares = squares.splice(squares.indexOf(correctSquareSelector), 1);
    for (i = 0; i < 5; i++) {
        var quickRandomRed = Math.round(Math.random() * 255);
        var quickRandomGreen = Math.round(Math.random() * 255);
        var quickRandomBlue = Math.round(Math.random() * 255);
        squares[i].style.background = "RGB(" + quickRandomRed + "," + quickRandomGreen + "," + quickRandomBlue + ")";
    }
}