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
var characters = {
  upperLetters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerLetters: "abcdefghijklmnopqrstuvwxyz",
  numbers: "1234567890",
  specialCharacters: "`~!@#$%^&*()-_=+,<.>/?\|",
}

// Password generator when button is pushed
function generatePassword() {

  // Added this as it was throwing an error before adding it - why is this?
  var password = "";
  var passwordVariables = "";

  // Password length 
  var passwordLength = window.prompt("What password length would you like?");
  if (
    passwordLength > 128 || passwordLength < 8) {
    window.alert("Your password must be between 8 and 128 characters.");
    return;
  }

  // Variable prompts
  var upperLettersSelection = window.confirm("Use uppercase letters?");
  console.log(upperLettersSelection);
  if (upperLettersSelection) {
    passwordVariables += characters.upperLetters;
  }
  console.log(passwordVariables);

  var lowerLettersSelection = window.confirm("Use lowercase letters?");
  console.log(lowerLettersSelection);
  if (lowerLettersSelection) {
    passwordVariables += characters.lowerLetters;
  }
  console.log(passwordVariables);

  var numbersSelection = window.confirm("Use numerical characters?");
  console.log(numbersSelection);
  if (numbersSelection) {
    passwordVariables += characters.numbers;
  }
  console.log(passwordVariables);

  var specialCharactersSelection = window.confirm("Use special characters?");
  console.log(specialCharactersSelection);
  if (specialCharactersSelection) {
    passwordVariables += characters.specialCharacters;
  };
  console.log(passwordVariables);

  // If no variables are selected
  if (passwordVariables === "") {
    window.alert("Please select at least one character type to continue.");
  };

  // Password creation from variables
  if (passwordLength >= 8 && passwordLength <= 128) {
    for (var i = 0; i < passwordLength; i++) {
      password += passwordVariables.charAt(Math.floor(Math.random() * passwordVariables.length));
    };
    console.log(password)
    return password
  };
}

// Need password to be displayed* code not working, come back tomorrow
// Make prompts repeat when no variable is selected.

// Actual guidelines for reference:
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page