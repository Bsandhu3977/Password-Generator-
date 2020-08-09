

//store the character types in separate variables length, lower, upper, special, numbers

//Array of special characters to be included in password 
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var possbilities = [];
var password = [];
//create function that will return new password (this function will be called when button is clicked)
function createPassword() {
  //prompt user with question that will gather data of what user wants in their password
  var lengthOfPassword = parseInt(prompt("How many characters would you like your password to contain?"));
  //make sure that password is between 8 and 129
  if (lengthOfPassword < 8) {
    alert("passwrod is too short");
    lengthOfPassword = parseInt(prompt("How many characters would you like your password to contain?"));
  }
  if (lengthOfPassword > 128) {
    alert("passwrod is too long");
    lengthOfPassword = parseInt(prompt("How many characters would you like your password to contain?"));
  }

  var hasSpecialCharacters = confirm("Click ok if you want special characters.");
  var hasNumberCharacters = confirm("Click ok if you want number characters.");
  var hasLowerCaseCharacters = confirm("Click ok if you want lower charactes.");
  var hasUpperCaseCharacters = confirm("Click ok if you want upper characters.");

  //write the conditions that will create your new array of possibilities
  if (hasSpecialCharacters) {
    possbilities = possbilities.concat(specialCharacters)
  }
  if (hasNumberCharacters) {
    possbilities = possbilities.concat(numericCharacters)
  }
  if (hasLowerCaseCharacters) {
    possbilities = possbilities.concat(lowerCasedCharacters)
  }
  if (hasUpperCaseCharacters) {
    possbilities = possbilities.concat(upperCasedCharacters)
  }

  
  //with the array grab user choiced length of password amount of random index (use math random)
  var randomNumber;
  for (var i = 0; i < lengthOfPassword; i++) {
      randomNumber = Math.floor(Math.random() * possbilities.length);
      password.push(possbilities[randomNumber]); 
  }
  
  //render in the DOM
  var convertedPassword = password.join("");
  document.querySelector("#password").value = convertedPassword;
  }

  

// run the function when the event is triggered
document.querySelector("#generate").addEventListener("click",createPassword);

