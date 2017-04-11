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


module.exports = {

}
