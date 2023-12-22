// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to generate password base on user based criteria
function generatePassword() {
  // Array types
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "~!@#$%^&*()_+{}[]\|';:,.<>;"
}

// Varibales to store user choices
var passwordLength = prompt ("Must be 8 to 12 characters):")

if (passwordLength < 8 || passwordLength > 12 || isNaN(passwordLength)) {
  alert("Please enter a valid password length between 8 and 128 characters.");
  return "" // signify error
}

var includeLowercase = confirm("Include lowercase characters?");
var includeUppercase = confirm("Include uppercase characters?");
var includeNumeric = confirm("Include numeric characters?");
var includeSpecial = confirm("Include special characters?");
