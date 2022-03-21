// Prewritten code - *do not change*

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Begin original code

// Password characters
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerLetters = "abcdefghijklmnopqrstuvwxyz"
var numbers = "1234567890"
var specialCharacters = "`~!@#$%^&*()-_=+,<.>/?\|"


// Define generatePassword function from above
function.generatePassword() {

}