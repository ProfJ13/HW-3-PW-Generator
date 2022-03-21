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



// // Password characters
// var characters = {
//   upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
//   lowerLetters = "abcdefghijklmnopqrstuvwxyz",
//   numbers = "1234567890",
//   specialCharacters = "`~!@#$%^&*()-_=+,<.>/?\|"
// }

// function promptUpperLetters() {
//   characters.upperLetters = window.confirm("Would you like your password to contain uppercase characters?");
//   return characters.upperLetters;
// }

// function promptlowerLetters() {
//   characters.lowerLetters = window.confirm("Would you like your password to contain lowercase characters?");
//   return characters.lowerLetters;
// };

// function promptNumbers() {
//   characters.numbers = window.confirm("Would you like your password to contain numbers?");
//   return characters.numbers;
// }

// var promptspecialCharacters = function () {
//   characters.specialCharacters = window.confirm("Would you like your password to contain special characters?");
//   return characters.specialCharacters;
// };

// // Password length validation
// function validateLengthInput(password) {
//   if (password.length >= 8 && password.length <= 128) {
//     password.validLength = true;
//     lenErrorDiv.style.display = "none";
//   } else {
//     if (!passwordInpt.validLength) {
//       lenErrorDiv.style.display = "block";
//     }
//     password.validLength = false;
//   }
// }

// // Define generatePassword function from above
// function.generatePassword() {

// }