const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "123456789";
const symbols = "!@#$%^&*()-=_+[]{}|;:',./<>?";




// Assignment code here
function generatePassword() {

  var userInput = prompt("How long would you like your password to be?")

  var passwordLength = parseInt(userInput)

  if (isNaN(passwordLength)) {
    window.alert("Input you placed is not a number.")
    return
  }

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert ("Password length must be between 8 and 128 characters long.")
    return
  }


//   var characters = ""
//   var userInput = prompt("How would you like to generate your password?\n1-Uppercase letters\n2-Lowercase letter\n3-numbers\n4-symbols")
//   if (userInput == 1) {
//     characters += lowercaseLetters
//   } 
//   else if(userInput == 2) {
//    characters += lowercaseLetters += uppercaseLetters

//   } 
//   else if(userInput == 3){
//     characters += lowercaseLetters += uppercaseLetters += numbers
//   } 
//   else if(userInput == 4){
//     characters += lowercaseLetters += uppercaseLetters += numbers += symbols
   
//   }
//   randomPassword(characters, length)
//  }

// function randomPassword(characters, length){
//   while(s) {
    
//   }

 }




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
