window.onload = function () {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let categories; // Array of topics
  let chosenCategory; // Selected catagory
  let getHint; // Word getHint
  let word; // Selected word
  let guess; // Geuss
  let geusses = []; // Stored geusses
  let lives; // Lives
  let counter; // Count correct geusses
  let space; // Number of spaces in word '-'

  // Get elements
  let showLives = document.getElementById("mylives");
  let showCatagory = document.getElementById("scatagory");
  let getHint = document.getElementById("hint");
  let showClue = document.getElementById("clue");

// create alphabet ul
let buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');
    
    for (let i = 0; i < alphabet.length; i++) {
        letters.id = 'alphabet';
        list = document.createElement('li');
        list.id = 'letter';
        list.innerHTML = alphabet[i];
        check();
        myButtons.appendChild(letters);
        letters.appendChild(list);
    }
};
