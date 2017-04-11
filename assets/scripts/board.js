'use strict'

// To Do:
  // scoreboard
  // let score = {'X': 0, 'O': 0};


// Array of X and O texts
let xoSymbols = ['\u2613','\u26AC'];
// reference; https://www.w3schools.com/charsets/tryit.asp?deci=9900 ; https://www.w3schools.com/charsets/ref_utf_symbols.asp
// console.log(playerInput);

// Empty array to store inputted Xs and Os
let playerInput = [];

// Empty array to store each button/box
let boxArray = [];
// Store each button/box into array
for (let i = 0; i < 9; i++) { // box0 ~ box8
  boxArray[i] = document.getElementById('box'+i);
}

// run function when any box clicked
const displayInput = function() {
  // "this" refers to each box in boxArray (boxArray[i])
  // Display player X/O input on clicked box. Start with X.
  this.textContent = xoSymbols[0];
  // push user's X/O input into playerInput array
  playerInput.push(this.textContent);
  // Disable button once user clicks on a box
  this.disabled = true;
  // run function that display win/draw message
  displayMessage();
  // reverse X/O input
  xoSymbols.reverse();
}

// Add click event to each box
for (let i = 0; i < 9; i++) {
  // boxArray[i].addEventListener("click", displayInput);
  $(boxArray[i]).on("click", displayInput);
}

// Note: addEventListner can be used only on ONE element at a time

// Win/draw messages
// Create text element for Player X win
let xWinMessage = document.createElement('p');
// Create text element for Player O win
let oWinMessage = document.createElement('p');
// Create text element for draw
let drawMessage = document.createElement('p');


// When certain combination achieved, display win/draw message
const displayMessage = function() {
  // If any of the winning combinations achieved for X, display win
  for (let i = 0; i < 3; i++) {
    if (
      // 0, 1, 2 -> 3, 4, 5 -> 6, 7, 8
      boxArray[i*3].textContent === playerInput[0] && boxArray[(i*3)+1].textContent === playerInput[0] && boxArray[(i*3)+2].textContent === playerInput[0] ||
      // 0, 3, 6 -> 1, 4, 7 -> 2, 5, 8
      boxArray[i].textContent === playerInput[0] && boxArray[i+3].textContent === playerInput[0] && boxArray[i+6].textContent === playerInput[0] ||
      // 0, 4, 8 -> 1, 4, 7 (redundant) --> 2, 4, 6
      boxArray[i].textContent === playerInput[0] && boxArray[4].textContent === playerInput[0] && boxArray[8-i].textContent === playerInput[0]) {
      xWinMessage.textContent = "X wins!";
      document.getElementById('message').appendChild(xWinMessage);
      for (let i = 0; i < 9; i++) {
        boxArray[i].disabled = true;
      }
    } else if (
      boxArray[i*3].textContent === playerInput[1] && boxArray[(i*3)+1].textContent === playerInput[1] && boxArray[(i*3)+2].textContent === playerInput[1] ||
      boxArray[i].textContent === playerInput[1] && boxArray[i+3].textContent === playerInput[1] && boxArray[i+6].textContent === playerInput[1] ||
      boxArray[i].textContent === playerInput[1] && boxArray[4].textContent === playerInput[1] && boxArray[8-i].textContent === playerInput[1]) {
      oWinMessage.textContent = "O wins!";
      document.getElementById('message').appendChild(oWinMessage);
      for (let i = 0; i < 9; i++) {
        boxArray[i].disabled = true;
      }
    }
  }
  // make a callback function
   if (playerInput.length === 9 && oWinMessage.textContent === "" && xWinMessage.textContent === "") { // If 9 inputs or more, display draw message
    // Create text element for draw
    drawMessage.textContent = "Draw!";
    // Append text element to div#message
    document.getElementById('message').appendChild(drawMessage);
    // disable all buttons when any of the win combinations are met
    for (let i = 0; i < 9; i++) {
      boxArray[i].disabled = true;
    }
  }
}

// when using two for loops in one, must have the same loop cycles


module.exports = {

}
