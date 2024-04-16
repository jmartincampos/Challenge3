// Assignment code here
function generatePassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecial) {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numericChars = "0123456789";
  const specialChars = "~!@#$%^&*()_+{}[]\|';:,.<>;";
  
  let allowedChars = "";
  let password = "";

  allowedChars += includeLowercase ? lowercaseChars : "";
  allowedChars += includeUppercase ? uppercaseChars : "";
  allowedChars += includeNumeric ? numericChars : "";
  allowedChars += includeSpecial ? specialChars : "";

  if (length <= 0) {
      return "Password length must be at least 1";
  }
  if (allowedChars.length === 0) {
      return "At least 1 set of characters needs to be selected";
  }

  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allowedChars.length);
      password += allowedChars[randomIndex];
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var length = parseInt(prompt("Password length must be between 8 and 20 characters"));
  if (isNaN(length) || length < 8 || length > 20) {
    alert("Please enter a valid password length between 8 and 20 characters.");
    return;
  }

  var includeLowercase = confirm("Include lowercase characters");
  var includeUppercase = confirm("Include uppercase characters");
  var includeNumeric = confirm("Include numeric characters");
  var includeSpecial = confirm("Include special characters");

  var password = generatePassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecial);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
