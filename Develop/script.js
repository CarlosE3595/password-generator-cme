// Assignment code here
function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }

  var rand = Math.random()
  return Math.floor(min* (1 - rand) + rand*max)
}

function getRandomItem(list) {
  return list[randomInt(list.length)]

}




function generatePassword() {

  var userInput = prompt("How long would you like your password to be?")

  var passwordLength = parseInt(userInput)

  if (isNaN(passwordLength)) {
    window.alert("Input you placed is not valid.")
    return
  }

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert ("Password length must be between 8 and 128 characters long.")
    return
  }

  var userWantsLowercaseLetters = window.confirm("Would you like to include lowercase letters into your password?");
  var userWantsUppercaseLetters = window.confirm("Would you like to include uppercase letters into your password?");
  var userWantsNumbers = window.confirm("Would you like to include numbers into your password?");
  var userWantsSymbols = window.confirm("Would you like to include symbols into your password?");

  var numberList = ["1","2","3","4","5","6","7","8","9"]
  var symbolList = ["!","@","#","$","%","^","&","*","(",")","-","=","_","+","[","]","{","}","|",";",":","'",",",".","/","<",">","?"]
  var lowercaseLettersList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var uppercaseLettersList = []
  var optionscart = []

  for (var i = 0; i < lowercaseLettersList.length; i++) {
    uppercaseLettersList[i] = lowercaseLettersList[i].toUpperCase()
  }

  if (userWantsNumbers === true) {
    optionscart.push(numberList)
  }
  if (userWantsSymbols === true) {
    optionscart.push(symbolList)
  }
  if (userWantsLowercaseLetters === true) {
    optionscart.push(lowercaseLettersList)
  }
  if (userWantsUppercaseLetters === true) {
    optionscart.push(uppercaseLettersList)
  }
  if (optionscart.length === 0) {
    optionscart.push(lowercaseLettersList)
  }

  var generatedPassword = ""
  for (var i = 0; i < passwordLength; i++) { 
    var randomList = getRandomItem(optionscart)
    var randomChar = getRandomItem(randomList)
    generatedPassword += randomChar
    
  }
  
  return generatedPassword
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
